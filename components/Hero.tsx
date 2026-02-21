import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-zinc-700 md:text-6xl">Когда слова лишние.</h1>
          <p className="text-lg text-zinc-500">Порадуйте близких красивым букетом.</p>
          <Link
            href="/catalog"
            className="inline-block rounded-xl bg-rose px-6 py-3 font-medium text-white shadow-md transition hover:opacity-90"
          >
            Выбрать букет
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80"
          alt="Букет"
          className="h-64 w-full rounded-3xl object-cover md:h-96"
        />
      </div>
    </section>
  );
}
