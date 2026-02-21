# Flower Shop Prototype

Кликабельный MVP интернет-магазина цветов на **Next.js + TypeScript + Tailwind CSS**.

## Реализованные маршруты

- `/` — главная страница (hero, категории, популярные букеты, промо-блок, наш выбор, преимущества)
- `/catalog` — каталог с фильтрацией по категории (`?category=...`) и сортировкой по цене (`?sort=price_asc|price_desc`)
- `/product/[slug]` — карточка товара
- `/cart` — корзина с изменением количества, удалением и итоговой суммой
- `/checkout` — оформление заказа с валидацией обязательных полей
- `/checkout/success` — экран успешного оформления

## Локальный запуск

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:3000`.

## Запуск в GitHub Codespaces

1. Нажмите **Code → Codespaces → Create codespace on main**.
2. Контейнер автоматически выполнит `npm install` через `.devcontainer/devcontainer.json`.
3. Dev-сервер запускается командой:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3000
```

## Как получить Preview URL в Codespaces

- Вкладка **Ports** → у порта `3000` выбрать **Open in Browser** или **Open Preview**.
- Также можно использовать авто-предпросмотр VS Code (порт помечен как `openPreview` и `public`).
