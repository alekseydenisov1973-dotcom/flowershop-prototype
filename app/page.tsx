import Link from 'next/link';
import { Benefits } from '@/components/Benefits';
import { CategoryCard } from '@/components/CategoryCard';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { PromoSection } from '@/components/PromoSection';
import { categories, products } from '@/lib/products';

export default function HomePage() {
  const popular = products.slice(0, 5);
  const picks = products.slice(5, 8);

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.key}
              title={category.label}
              subtitle={category.subtitle}
              category={category.key}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-zinc-700">Популярные букеты</h2>
          <Link href="/catalog" className="text-zinc-500 hover:text-zinc-700">
            Смотреть все
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <PromoSection />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-3xl font-semibold text-zinc-700">Наш выбор</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {picks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Benefits />
    </main>
  );
}
