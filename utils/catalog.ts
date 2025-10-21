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
