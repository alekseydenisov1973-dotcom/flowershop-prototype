export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
