# ScrollView Component

A React Native ScrollView component with TypeScript support, used for scrollable content. Uses `PXScrollView` for Pixelblock branding.

## Usage

```tsx
import { ScrollView } from '@/components/UI/ScrollView';
import { Text } from 'react-native';

const MyScreen = () => (
  <ScrollView>
    <Text>Scrollable content goes here...</Text>
  </ScrollView>
);
```

## Props

- `children` (React.ReactNode, optional): Content to be rendered inside the ScrollView.
- `style` (object, optional): Additional styles for the ScrollView.
- Inherits all `ScrollViewProps` from `react-native`.

## Files

- `ScrollView.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor, flex).
- Update `types.ts` to add custom props.
- Edit `ScrollView.tsx` to change behavior (e.g., scroll indicators).