# RefreshControl Component

A React Native RefreshControl component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { RefreshControl } from '@/components/UI/RefreshControl';
import { useState } from 'react';

const MyScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      accessibilityLabel="Pull to refresh"
    />
  );
};
```

## Props

- `refreshing` (boolean): Whether the refresh is in progress.
- `onRefresh` (function): Callback triggered on pull-to-refresh.
- `colors` (string[], optional): Spinner colors.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `RefreshControl.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., spinner color).
- Update `types.ts` to add props.
- Edit `RefreshControl.tsx` to change behavior.