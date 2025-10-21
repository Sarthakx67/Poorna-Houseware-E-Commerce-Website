
export interface Variant {
  id: string;
  name: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  variants?: Variant[];
  subItems?: Product[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  items: Product[];
}

export interface CartItem {
  id: string; // Variant ID
  productName: string;
  variantName: string;
  quantity: number;
}