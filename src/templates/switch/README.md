# Switch Component

A React Native Switch component with TypeScript support, used for toggle input. Uses `PXSwitch` for Pixelblock branding.

## Usage

```tsx
import { Switch } from '@/components/UI/Switch';
import { useState } from 'react';

const MyScreen = () => {
  const [isOn, setIsOn] = useState(false);
  return <Switch value={isOn} onValueChange={setIsOn} />;
};
```

## Props

- `value` (boolean): The current state of the switch.
- `onValueChange` (function): Callback when the switch changes.
- `style` (object, optional): Additional styles.
- Inherits all `SwitchProps` from `react-native`.

## Files

- `Switch.tsx`: Component implementation.
- `styles.ts`: Component styles.
- `types.ts`: TypeScript interfaces.
- `index.ts`: Export file.
- `README.md`: This documentation.

## Customization

- Modify `styles.ts` to adjust appearance (e.g., transform).
- Update `types.ts` to add custom props.
- Edit `Switch.tsx` to change behavior.