import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold text-zinc-700">Заказ принят</h1>
      <p className="text-zinc-500">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      <Link href="/" className="inline-block rounded-xl bg-rose px-5 py-3 text-white">
        Вернуться на главную
      </Link>
    </main>
  );
}
