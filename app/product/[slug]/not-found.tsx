import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <main className="mx-auto max-w-3xl space-y-3 px-4 py-20 text-center">
      <h1 className="text-4xl font-semibold text-zinc-700">Товар не найден</h1>
      <p className="text-zinc-500">Проверьте ссылку или перейдите обратно в каталог.</p>
      <Link href="/catalog" className="inline-block rounded-xl bg-rose px-5 py-3 text-white">
        В каталог
      </Link>
    </main>
  );
}
