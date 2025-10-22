# @fajricpaix/frontend-ui

UI Component Library untuk React/Next.js projects den### 📁 Struktur Library yang Ter-export

- **Components**: Button (dengan semua variants dan cn utility built-in)
- **Types**: Full TypeScript support dengan `.d.ts` filescript dan Tailwind CSS.

## Instalasi

```bash
# Menggunakan yarn
yarn add @fajricpaix/frontend-ui

# Menggunakan npm
npm install @fajricpaix/frontend-ui
```

## Penggunaan

### Import Components

```tsx
import { Button } from '@fajricpaix/frontend-ui';
import type { ButtonProps } from '@fajricpaix/frontend-ui';
```

### Button Component

```tsx
import { Button } from '@fajricpaix/frontend-ui';

function App() {
  return (
    <div>
      {/* Basic button */}
      <Button>Click me</Button>
      
      {/* Button variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="info">Info</Button>
      
      {/* Button sizes */}
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      
      {/* Outline buttons */}
      <Button variant="primary" outline>Outline Primary</Button>
      <Button variant="success" outline>Outline Success</Button>
    </div>
  );
}
```

### Utilities

Button component sudah menyediakan utility `cn` secara internal, jadi Anda tidak perlu mengimport utility tambahan.

## Development

### Build Library

```bash
yarn build
```

### Development dengan Next.js

```bash
yarn dev
```

### Linting

```bash
yarn lint
```

## Struktur File

```
src/
├── components/
│   └── ui/
│       └── Button.tsx (with cn utility included)
└── index.ts
```

## TypeScript Support

Library ini fully typed dengan TypeScript. Semua components memiliki proper type definitions yang akan memberikan IntelliSense dan type checking yang baik.

## Styling

Components menggunakan Tailwind CSS classes. Pastikan project Anda memiliki Tailwind CSS configured untuk styling yang optimal.

## Publishing ke NPM

### 1. Build Library
```bash
yarn build
```

### 2. Login ke NPM
```bash
npm login
```

### 3. Publish
```bash
npm publish --access public
```

## Cara Menggunakan di Project Lain

Setelah di-publish, Anda dapat menginstall library ini di project lain:

```bash
# Di project Next.js/React lain
yarn add @fajricpaix/frontend-ui
```

### Contoh Penggunaan
```tsx
import { Button } from '@fajricpaix/frontend-ui';

function MyApp() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Add Item
      </Button>
      
      <Button variant="success" outline>
        Save Changes
      </Button>
    </div>
  );
}
```

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## License

MIT License - lihat file [LICENSE](LICENSE) untuk details.
