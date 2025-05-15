# Image Component

A React Native Image component with TypeScript support, used to display images. Uses `PXImage` for Pixelblock branding.

## Usage

```tsx
import { Image } from '@/components/UI/Image';

const MyScreen = () => (
  <Image
    source={{ uri: 'https://example.com/image.jpg' }}
  />
);
```

## Props

- `source` (object): The image source (e.g., `{ uri: string }` or local asset).
- `style` (object, optional): Additional styles for the Image.
- Inherits all `ImageProps` from `react-native`.

## Files

- `Image.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., width, height, resizeMode).
- Update `types.ts` to add custom props.
- Edit `Image.tsx` to change behavior.