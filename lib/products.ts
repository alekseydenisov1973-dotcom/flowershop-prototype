import productsData from '@/data/products.json';
import { Product } from '@/lib/types';

export const products = productsData as Product[];

export const categories = [
  { key: 'romantic', label: 'Для любимой', subtitle: 'Романтика' },
  { key: 'birthday', label: 'День рождения', subtitle: 'Сюрприз' },
  { key: 'everyday', label: 'Просто так', subtitle: 'Знак внимания' },
  { key: 'fast', label: 'Доставка сегодня', subtitle: 'Очень срочно' }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
