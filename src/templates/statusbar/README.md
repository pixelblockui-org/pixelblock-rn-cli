# StatusBar Component

A React Native StatusBar component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { StatusBar } from '@/components/UI/StatusBar';

const MyScreen = () => (
  <StatusBar
    backgroundColor="#007AFF"
    barStyle="light-content"
    accessibilityLabel="Status bar"
  />
);
```

## Props

- `backgroundColor` (string, optional): Background color of the status bar.
- `barStyle` (string, optional): Style of the status bar text (`default`, `light-content`, `dark-content`).
- `hidden` (boolean, optional): Whether to hide the status bar.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `StatusBar.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add props.
- Edit `StatusBar.tsx` to change behavior.
```