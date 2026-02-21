import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rose-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-zinc-700">
          Flower Shop
        </Link>
        <nav className="flex gap-4 text-sm text-zinc-600">
          <Link href="/catalog">Каталог</Link>
          <Link href="/cart">Корзина</Link>
        </nav>
      </div>
    </header>
  );
}
