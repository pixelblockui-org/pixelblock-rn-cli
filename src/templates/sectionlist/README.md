# SectionList Component

A React Native SectionList component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { SectionList } from '@/components/UI/SectionList';
import { Text } from 'react-native';

const MyScreen = () => (
  <SectionList
    sections={[
      { title: 'Section 1', data: ['Item 1', 'Item 2'] },
      { title: 'Section 2', data: ['Item 3', 'Item 4'] },
    ]}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    accessibilityLabel="Grouped list"
  />
);
```

## Props

- `sections` (array): Array of section objects with `title` and `data`.
- `renderItem` (function): Renders each item in the list.
- `renderSectionHeader` (function, optional): Renders section headers.
- `style` (object, optional): Additional styles for the list.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `SectionList.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add props.
- Edit `SectionList.tsx` to change behavior.