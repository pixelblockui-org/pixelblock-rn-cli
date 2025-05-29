# Pressable Component

A React Native Pressable component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { Pressable } from '@/components/UI/Pressable';
import { Text } from 'react-native';

const MyScreen = () => (
  <Pressable
    onPress={() => console.log('Pressed!')}
    accessibilityLabel="Pressable button"
  >
    <Text>Press Me</Text>
  </Pressable>
);
```

## Props

- `children` (ReactNode): Content inside the pressable.
- `onPress` (function): Callback triggered when pressed.
- `style` (object, optional): Additional styles for the pressable.
- `pressedStyle` (object, optional): Styles applied when pressed.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `Pressable.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor, pressed opacity).
- Update `types.ts` to add props.
- Edit `Pressable.tsx` to change behavior.