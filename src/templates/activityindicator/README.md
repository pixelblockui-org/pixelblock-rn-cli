# ActivityIndicator Component

A React Native ActivityIndicator component with TypeScript support, used to show a loading spinner. Uses `PXActivityIndicator` for Pixelblock branding.

## Usage

```tsx
import { ActivityIndicator } from '@/components/UI/ActivityIndicator';

const MyScreen = () => (
  <ActivityIndicator size="large" color="#007AFF" />
);
```

## Props

- `size` (string, optional): Size of the indicator ('small', 'large').
- `color` (string, optional): Color of the indicator.
- `style` (object, optional): Additional styles.
- Inherits all `ActivityIndicatorProps` from `react-native`.

## Files

- `ActivityIndicator.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., flex).
- Update `types.ts` to add custom props.
- Edit `ActivityIndicator.tsx` to change behavior.