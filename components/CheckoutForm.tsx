'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart-store';

export function CheckoutForm() {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const [error, setError] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const address = String(formData.get('address') || '').trim();

    if (!name || !phone || !address) {
      setError('Заполните обязательные поля: имя, телефон, адрес.');
      return;
    }

    clearCart();
    router.push('/checkout/success');
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100">
      <h1 className="text-3xl font-semibold text-zinc-700">Оформление заказа</h1>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <input name="name" placeholder="Имя*" className="w-full rounded-xl border p-3" />
      <input name="phone" placeholder="Телефон*" className="w-full rounded-xl border p-3" />
      <input name="address" placeholder="Адрес*" className="w-full rounded-xl border p-3" />
      <textarea name="comment" placeholder="Комментарий" className="min-h-24 w-full rounded-xl border p-3" />
      <button className="rounded-xl bg-rose px-5 py-3 font-medium text-white">Подтвердить</button>
    </form>
  );
}
