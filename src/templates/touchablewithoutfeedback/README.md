# TouchableWithoutFeedback Component

A React Native TouchableWithoutFeedback component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { TouchableWithoutFeedback } from '@/components/UI/TouchableWithoutFeedback';
import { Text } from 'react-native';

const MyScreen = () => (
  <TouchableWithoutFeedback
    onPress={() => console.log('Pressed!')}
    accessibilityLabel="Pressable area"
  >
    <Text>Press Me</Text>
  </TouchableWithoutFeedback>
);
```

## Props

- `children` (ReactNode): Content inside the touchable.
- `onPress` (function): Callback triggered when pressed.
- `style` (object, optional): Additional styles for the touchable.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `TouchableWithoutFeedback.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add props.
- Edit `TouchableWithoutFeedback.tsx` to change behavior.