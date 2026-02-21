'use client';

import Link from 'next/link';
import { formatPrice } from '@/lib/format';
import { useCartStore } from '@/store/cart-store';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!items.length) {
    return (
      <main className="mx-auto max-w-4xl space-y-4 px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-zinc-700">Корзина пуста</h1>
        <Link href="/catalog" className="inline-block rounded-xl bg-rose px-5 py-3 text-white">
          Перейти в каталог
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <h1 className="text-4xl font-semibold text-zinc-700">Корзина</h1>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
            <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-semibold">{item.product.name}</p>
              <p>{formatPrice(item.product.price)}</p>
            </div>
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(event) => updateQuantity(item.product.id, Number(event.target.value))}
              className="w-16 rounded-lg border p-2"
            />
            <button onClick={() => removeItem(item.product.id)} className="text-sm text-red-500">
              Удалить
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Итого: {formatPrice(total)}</p>
        <Link href="/checkout" className="rounded-xl bg-rose px-5 py-3 text-white">
          Оформить заказ
        </Link>
      </div>
    </main>
  );
}
