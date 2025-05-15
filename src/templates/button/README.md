# Button Component

A React Native Button component with TypeScript support.

## Usage

```tsx
import { Button } from '@/components/UI/Button';

const MyScreen = () => (
  <Button
    title="Click Me"
    onPress={() => console.log('Button pressed!')}
  />
);
```

## Props

- `title` (string): The text displayed on the button.
- `onPress` (function): Callback triggered when the button is pressed.
- `style` (object, optional): Additional styles for the button.

## Files

- `Button.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor, color).
- Update `types.ts` to add props.
- Edit `Button.tsx` to change behavior.