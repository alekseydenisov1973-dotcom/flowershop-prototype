import Link from 'next/link';

type Props = {
  title: string;
  subtitle: string;
  category: string;
};

export function CategoryCard({ title, subtitle, category }: Props) {
  return (
    <Link
      href={`/catalog?category=${category}`}
      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 transition hover:shadow-md"
    >
      <p className="text-xl font-semibold text-zinc-700">{title}</p>
      <p className="text-zinc-500">{subtitle}</p>
    </Link>
  );
}
