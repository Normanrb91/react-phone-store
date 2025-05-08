# React Phone Store

Mini aplicación de compra de dispositivos móviles.

## Descripción

Esta SPA permite ver un listado de productos móviles y acceder al detalle de cada uno, además de añadirlos al carrito.

## Estructura del proyecto

```plaintext
react-phone-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── queries/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── README.md
├── package.json
└── vite.config.ts
```

## Requisitos

- Node.js v20.5 o superior
- npm

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Normanrb91/react-phone-store.git
cd react-phone-store
```

2. Instalar dependencias:

```bash
npm install
```

## Scripts disponibles

- `npm run dev` — Inicia la aplicación en modo desarrollo
- `npm run build` — Genera la compilación para producción
- `npm run lint` — Ejecuta ESLint sobre el código
- `npm run test` — Ejecuta las pruebas con Vitest

## Uso

- Accede a `http://localhost:5173` para ver el listado de productos.
- Haz clic en un producto para ver su detalle.
- En la vista de detalle, selecciona las opciones (color, almacenamiento) y añade al carrito.

## Notas adicionales

- El proyecto consume la API en `https://itx-frontend-test.onrender.com`.
- Aporta feedback y sugerencias en la sección de issues.
