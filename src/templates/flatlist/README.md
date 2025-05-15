# FlatList Component

A React Native FlatList component with TypeScript support, used for efficient rendering of large lists. Uses `PXFlatList` for Pixelblock branding.

## Usage

```tsx
import { FlatList } from '@/components/UI/FlatList';
import { Text } from 'react-native';

const MyScreen = () => {
  const data = [{ id: '1', text: 'Item 1' }, { id: '2', text: 'Item 2' }];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />
  );
};
```

## Props

- `data` (T[]): The array of data to render.
- `renderItem` (function): Function to render each item.
- `style` (object, optional): Additional styles for the FlatList.
- Inherits all `FlatListProps` from `react-native`.

## Files

- `FlatList.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add custom props.
- Edit `FlatList.tsx` to change behavior (e.g., keyExtractor).