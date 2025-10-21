import React, { useEffect, useMemo, useState } from 'react';
import { catalog as seedCatalog } from '../data/products';
import type { Category, Product, Variant } from '../types';

// Simple slugify utility
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// Deep clone seed to avoid editing imported module state
const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x));

const defaultVariant = (): Variant => ({ id: `VAR-${Math.random().toString(36).slice(2, 8)}`, name: 'Default' });

const SellerDashboard: React.FC = () => {
  const [catalog, setCatalog] = useState<Category[]>(() => clone(seedCatalog));
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [jsonOut, setJsonOut] = useState('');
  const [missingImages, setMissingImages] = useState<string[]>([]);

  const currentCat = catalog[selectedCategory];

  const refreshJson = () => {
    setJsonOut(
      '// Copy this into final-2/data/products.ts\n' +
      'import { Category } from "../types";\n\n' +
      'export const catalog: Category[] = ' + JSON.stringify(catalog, null, 2) + ';\n'
    );
  };

  useEffect(() => { refreshJson(); }, [catalog]);

  const addCategory = () => {
    const name = prompt('Category name');
    if (!name) return;
    const slug = slugify(name);
    const image = `/assets/images/${slug}.jpg`;
    setCatalog(prev => [...prev, { name, slug, image, items: [] }]);
    setSelectedCategory(catalog.length);
  };

  const addProduct = (asSubItemForIndex?: number) => {
    const name = prompt('Product name');
    if (!name || !currentCat) return;
    const slug = slugify(name);
    const image = `/assets/images/${slug}.jpg`;
    const newProd: Product = { name, slug, description: '', image, variants: [defaultVariant()] };

    setCatalog(prev => prev.map((c, i) => {
      if (i !== selectedCategory) return c;
      const items = [...c.items];
      if (asSubItemForIndex != null) {
        const base = items[asSubItemForIndex];
        const baseWithSubs: Product = { ...base, subItems: [...(base.subItems ?? []), newProd] };
        items[asSubItemForIndex] = baseWithSubs;
      } else {
        items.push(newProd);
      }
      return { ...c, items };
    }));
  };

  const addVariant = (p: Product) => {
    const name = prompt('Variant name');
    if (!name) return;
    p.variants = [...(p.variants ?? []), { id: `VAR-${Math.random().toString(36).slice(2,8)}`, name }];
    setCatalog(prev => [...prev]);
  };

  const checkImages = async () => {
    const imgs = new Set<string>();
    for (const c of catalog) {
      if (c.image) imgs.add(c.image);
      for (const it of c.items) {
        if (it.image) imgs.add(it.image);
        for (const sub of it.subItems ?? []) {
          if (sub.image) imgs.add(sub.image);
        }
      }
    }
    const missing: string[] = [];
    await Promise.all(Array.from(imgs).map(async (path) => {
      try {
        const r = await fetch(path, { method: 'HEAD' });
        if (!r.ok) throw new Error('not ok');
      } catch {
        missing.push(path);
      }
    }));
    setMissingImages(missing);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Seller Dashboard (local editor)</h1>
      <p className="text-slate-600 mb-4 text-sm md:text-base">This editor helps you build categories, sub-items, and variants. Export the generated JSON and replace the content in <code>final-2/data/products.ts</code>. Images should be placed under <code>public/assets/images</code> and referenced like <code>/assets/images/xxxx.jpg</code>.</p>

      <div className="flex gap-4 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0 bg-white rounded-lg shadow p-3 h-max">
          <button onClick={addCategory} className="w-full bg-brand-primary text-white rounded-md py-2 text-sm mb-3 hover:bg-brand-primary-hover">+ Add Category</button>
          <div className="space-y-1">
            {catalog.map((c, i) => (
              <button key={c.slug} onClick={() => setSelectedCategory(i)} className={`w-full text-left px-3 py-2 rounded-md text-sm ${i===selectedCategory? 'bg-brand-light font-semibold':'hover:bg-slate-100'}`}>
                {c.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main editor */}
        <section className="flex-1 bg-white rounded-lg shadow p-4">
          {currentCat ? (
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg md:text-xl font-semibold">{currentCat.name}</h2>
                <button onClick={() => addProduct()} className="bg-slate-800 text-white rounded-md px-3 py-1 text-sm">+ Add Product</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCat.items.map((p, idx) => (
                  <div key={p.slug} className="border rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-xs text-slate-500">/{p.slug}</div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => addProduct(idx)} className="text-xs bg-brand-primary text-white rounded px-2 py-1">+ Sub Item</button>
                        <button onClick={() => addVariant(p)} className="text-xs bg-slate-700 text-white rounded px-2 py-1">+ Variant</button>
                      </div>
                    </div>
                    <label className="block text-xs text-slate-600">Image</label>
                    <input className="w-full border rounded px-2 py-1 text-sm mb-2" value={p.image}
                      onChange={e=>{p.image=e.target.value; setCatalog(prev=>[...prev]);}} />
                    <label className="block text-xs text-slate-600">Description</label>
                    <textarea className="w-full border rounded px-2 py-1 text-sm mb-2" value={p.description}
                      onChange={e=>{p.description=e.target.value; setCatalog(prev=>[...prev]);}} />
                    {(p.subItems && p.subItems.length>0) ? (
                      <div className="text-xs text-slate-500">Has {p.subItems.length} sub item(s)</div>
                    ) : (
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Variants</div>
                        <div className="space-y-1">
                          {(p.variants ?? []).map(v => (
                            <input key={v.id} className="w-full border rounded px-2 py-1 text-sm" value={v.name}
                              onChange={e=>{v.name = e.target.value; setCatalog(prev=>[...prev]);}} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-slate-500">Select a category</div>
          )}
        </section>
      </div>

      {/* Tools */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Export JSON</h3>
            <div className="flex gap-2">
              <button onClick={()=>navigator.clipboard.writeText(jsonOut)} className="text-xs bg-slate-800 text-white rounded px-2 py-1">Copy</button>
              <button onClick={()=>{
                const blob = new Blob([jsonOut], {type:'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = 'catalog.json'; a.click();
                URL.revokeObjectURL(url);
              }} className="text-xs bg-slate-700 text-white rounded px-2 py-1">Download</button>
            </div>
          </div>
          <textarea className="w-full h-60 border rounded p-2 font-mono text-xs" value={jsonOut} readOnly />
        </div>

        <div className="bg-white rounded-lg shadow p-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Image checker</h3>
            <button onClick={checkImages} className="text-xs bg-brand-primary text-white rounded px-2 py-1">Check</button>
          </div>
          {missingImages.length === 0 ? (
            <div className="text-sm text-green-600">No missing images detected.</div>
          ) : (
            <ul className="list-disc pl-5 text-sm text-red-600 space-y-1">
              {missingImages.map(m => <li key={m}>{m}</li>)}
            </ul>
          )}
          <p className="text-xs text-slate-500 mt-2">Place files under <code>public/assets/images</code>. Filenames must match exactly (case-sensitive on many hosts).</p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
