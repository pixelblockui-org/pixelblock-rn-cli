# View Component

A React Native View component with TypeScript support, used as a container for layout and styling. Uses `PXView` for Pixelblock branding.

## Usage

```tsx
import { View } from '@/components/UI/View';
import { Text } from 'react-native';

const MyScreen = () => (
  <View>
    <Text>Hello, World!</Text>
  </View>
);
```

## Props

- `children` (React.ReactNode, optional): Content to be rendered inside the View.
- `style` (object, optional): Additional styles for the View.
- Inherits all `ViewProps` from `react-native`.

## Files

- `View.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor, flex).
- Update `types.ts` to add custom props.
- Edit `View.tsx` to change behavior.