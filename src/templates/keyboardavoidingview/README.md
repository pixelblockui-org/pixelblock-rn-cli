# KeyboardAvoidingView Component

A React Native KeyboardAvoidingView component with TypeScript, accessibility, and theme support.

## Usage

```tsx
import { KeyboardAvoidingView } from '@/components/UI/KeyboardAvoidingView';
import { TextInput, View } from 'react-native';
import { useState } from 'react';

const MyScreen = () => {
  const [text, setText] = useState('');
  return (
    <KeyboardAvoidingView
      behavior="padding"
      accessibilityLabel="Keyboard avoiding container"
    >
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type here"
        />
      </View>
    </KeyboardAvoidingView>
  );
};
```

## Props

- `children` (ReactNode): Content inside the view.
- `behavior` (string, optional): Keyboard avoidance behavior (`height`, `position`, `padding`).
- `style` (object, optional): Additional styles for the view.
- `accessibilityLabel` (string, optional): Accessibility label for screen readers.

## Files

- `KeyboardAvoidingView.tsx`: Component implementation.
- `styles.ts`: Component styles with light/dark theme support.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `stories.ts`: Storybook stories (if applicable).
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add props.
- Edit `KeyboardAvoidingView.tsx` to change behavior.