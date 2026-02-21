import Link from 'next/link';
import { formatPrice } from '@/lib/format';
import { Product } from '@/lib/types';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-1 hover:shadow-md"
    >
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="space-y-1 p-4">
        <p className="font-semibold text-zinc-700">{product.name}</p>
        <p className="text-xl text-zinc-700">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
