# TextInput Component

A React Native TextInput component with TypeScript support.

## Usage

```tsx
import { TextInput } from '@/components/UI/TextInput';
import { useState } from 'react';

const MyScreen = () => {
  const [text, setText] = useState('');

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Enter text"
    />
  );
};
```

## Props

- `value` (string): The current text value.
- `onChangeText` (function): Callback triggered when text changes.
- `placeholder` (string, optional): Placeholder text.
- `style` (object, optional): Additional styles for the input.

## Files

- `TextInput.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., borderColor, color).
- Update `types.ts` to add props.
- Edit `TextInput.tsx` to change behavior.