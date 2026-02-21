const benefits = ['Доставка за 1 час', 'Всегда свежие', 'Оплата удобная'];

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-3 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-rose-100">
            <p className="font-medium text-zinc-600">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
