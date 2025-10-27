import { catalog } from '../data/products';
import { Category, Product } from '../types';

interface SearchResult {
  product: Product | null;
  path: (Category | Product)[];
}

// Recursive search function to find a product within nested subItems
const findProductRecursive = (
  items: Product[],
  slug: string,
  currentPath: (Category | Product)[]
): SearchResult | null => {
  for (const item of items) {
    const newPath = [...currentPath, item];
    if (item.slug === slug) {
      return { product: item, path: newPath };
    }
    if (item.subItems) {
      const result = findProductRecursive(item.subItems, slug, newPath);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

// Main function to search the entire catalog
export const findProductWithPath = (slug: string | undefined): SearchResult => {
  if (!slug) {
    return { product: null, path: [] };
  }

  for (const category of catalog) {
    const result = findProductRecursive(category.items, slug, [category]);
    if (result) {
      return result;
    }
  }

  return { product: null, path: [] };
};

// Development-only helper to validate that all variant IDs in the catalog are globally unique
export const validateUniqueVariantIds = (): void => {
  const seen = new Map<string, { name: string; path: string[] }>();
  const dups: Array<{ id: string; name: string; path: string[] }> = [];

  const walk = (node: Product, path: string[]) => {
    if (node.variants) {
      for (const v of node.variants) {
        const id = v.id.trim();
        if (seen.has(id)) {
          dups.push({ id, name: v.name, path: [...path, node.name] });
        } else {
          seen.set(id, { name: v.name, path: [...path, node.name] });
        }
      }
    }
    if (node.subItems) {
      for (const child of node.subItems) {
        walk(child, [...path, node.name]);
      }
    }
  };

  for (const category of catalog) {
    for (const item of category.items) {
      walk(item, [category.name]);
    }
  }

  if (dups.length > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `[catalog] Duplicate variant IDs detected (count=${dups.length}). Please fix to avoid cart collisions:`,
      dups
    );
  } else {
    // eslint-disable-next-line no-console
    console.info(`[catalog] All variant IDs are globally unique (count=${seen.size}).`);
  }
};
