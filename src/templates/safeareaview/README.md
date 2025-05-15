# SafeAreaView Component

A React Native SafeAreaView component with TypeScript support, used to handle safe areas (notches, status bars). Uses `PXSafeAreaView` for Pixelblock branding.

## Usage

```tsx
import { SafeAreaView } from '@/components/UI/SafeAreaView';
import { Text } from 'react-native';

const MyScreen = () => (
  <SafeAreaView>
    <Text>Safe Area Content</Text>
  </SafeAreaView>
);
```

## Props

- `children` (React.ReactNode, optional): Content inside the safe area.
- `style` (object, optional): Additional styles.
- Inherits all `SafeAreaViewProps` from `react-native`.

## Files

- `SafeAreaView.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add custom props.
- Edit `SafeAreaView.tsx` to change behavior.