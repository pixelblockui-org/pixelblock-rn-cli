# TouchableHighlight Component

A React Native TouchableHighlight component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { TouchableHighlight } from '@/components/UI/TouchableHighlight';
import { Text } from 'react-native';

const MyScreen = () => (
  <TouchableHighlight
    onPress={() => console.log('Pressed!')}
    accessibilityLabel="Pressable button"
  >
    <Text>Press Me</Text>
  </TouchableHighlight>
);
```

## Props

- `children` (ReactNode): Content inside the touchable.
- `onPress` (function): Callback triggered when pressed.
- `style` (object, optional): Additional styles for the touchable.
- `underlayColor` (string, optional): Color shown when pressed.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `TouchableHighlight.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor, underlayColor).
- Update `types.ts` to add props.
- Edit `TouchableHighlight.tsx` to change behavior.