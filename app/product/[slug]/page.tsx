import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { formatPrice } from '@/lib/format';
import { getProductBySlug } from '@/lib/products';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="h-96 w-full rounded-3xl object-cover" />
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-zinc-700">{product.name}</h1>
        <p className="text-3xl text-zinc-700">{formatPrice(product.price)}</p>
        <p className="text-zinc-600">{product.description}</p>
        <AddToCartButton product={product} />
        <div className="flex gap-4 text-sm text-zinc-500">
          <Link href="/catalog">← В каталог</Link>
          <Link href="/">На главную</Link>
        </div>
      </div>
    </main>
  );
}
