import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { categories, products } from '@/lib/products';

type Props = {
  searchParams: {
    category?: string;
    sort?: string;
  };
};

export default function CatalogPage({ searchParams }: Props) {
  const selectedCategory = searchParams.category;
  const selectedSort = searchParams.sort;

  let filtered = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [...products];

  if (selectedSort === 'price_asc') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === 'price_desc') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-10">
      <h1 className="text-4xl font-semibold text-zinc-700">Каталог</h1>

      <div className="flex flex-wrap gap-2">
        <Link href="/catalog" className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">
          Все
        </Link>
        {categories.map((category) => (
          <Link
            key={category.key}
            href={`/catalog?category=${category.key}`}
            className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200"
          >
            {category.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-3 text-sm">
        <Link href={selectedCategory ? `/catalog?category=${selectedCategory}&sort=price_asc` : '/catalog?sort=price_asc'}>
          Цена ↑
        </Link>
        <Link href={selectedCategory ? `/catalog?category=${selectedCategory}&sort=price_desc` : '/catalog?sort=price_desc'}>
          Цена ↓
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
