export function PromoSection() {
  return (
    <section className="bg-rose-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <h2 className="mb-3 text-3xl font-semibold text-zinc-700">Мы создаем букеты с душой</h2>
          <p className="text-zinc-600">Каждый букет собирается вручную с любовью и заботой.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80"
          alt="Флорист"
          className="h-64 w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
