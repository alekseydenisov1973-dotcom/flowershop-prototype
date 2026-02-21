'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/store/cart-store';

type Props = {
  product: Product;
};

export function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="rounded-xl bg-rose px-6 py-3 font-medium text-white transition hover:opacity-90"
    >
      В корзину
    </button>
  );
}
