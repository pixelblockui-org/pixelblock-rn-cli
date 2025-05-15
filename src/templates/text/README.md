# Text Component

A React Native Text component with TypeScript support, used to display text. Uses `PXText` for Pixelblock branding.

## Usage

```tsx
import { Text } from '@/components/UI/Text';

const MyScreen = () => (
  <Text>Hello, World!</Text>
);
```

## Props

- `children` (React.ReactNode): The text content to display.
- `style` (object, optional): Additional styles for the Text.
- Inherits all `TextProps` from `react-native`.

## Files

- `Text.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., fontSize, color).
- Update `types.ts` to add custom props.
- Edit `Text.tsx` to change behavior.