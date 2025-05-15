# TouchableOpacity Component

A React Native TouchableOpacity component with TypeScript support, used for touchable elements with opacity feedback. Uses `PXTouchableOpacity` for Pixelblock branding.

## Usage

```tsx
import { TouchableOpacity } from '@/components/UI/TouchableOpacity';
import { Text } from 'react-native';

const MyScreen = () => (
  <TouchableOpacity onPress={() => console.log('Pressed')}>
    <Text>Press Me</Text>
  </TouchableOpacity>
);
```

## Props

- `children` (React.ReactNode, optional): Content inside the touchable area.
- `onPress` (function): Callback when pressed.
- `style` (object, optional): Additional styles.
- Inherits all `TouchableOpacityProps` from `react-native`.

## Files

- `TouchableOpacity.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., backgroundColor).
- Update `types.ts` to add custom props.
- Edit `TouchableOpacity.tsx` to change behavior.