# pixelblock-rn-cli

A CLI tool for generating organized React Native components with TypeScript support, part of the Pixelblock ecosystem. Dynamically detects component templates, supports interactive component selection, template validation, and configuration files.

## Installation

### Option 1: Global Installation

```bash
npm install -g pixelblock-rn-cli
```

### Option 2: Run Directly with npx

```bash
npx pixelblock-rn-cli add
```

## Usage

### Add a Component

Generate a component (e.g., `button`, `textinput`) interactively or by name:

```bash
pixelblock-rn-cli add
# or
pixelblock-rn-cli add button
# or with custom directory
pixelblock-rn-cli add button --dir src/components
```

- Prompts to select a component if no name is provided or if the name is invalid.
- Creates a folder in `components/UI/<ComponentName>/` (or specified/configured directory) with:
  - `index.ts`
  - `<ComponentName>.tsx`
  - `styles.ts` (with default colors)
  - `types.ts`
  - `README.md`
- Validates template files to ensure all required files are present.
- Prompts to overwrite if the component already exists.
- Supports configuration via `.pixelblockrc` for default output directory.

### Configuration

Create a `.pixelblockrc` file in your project root to set defaults:

```json
{
  "outputDir": "src/components"
}
```

## Getting Started

1. **Set Up a React Native Project**:

   ```bash
   npx react-native init MyApp --template react-native-template-typescript
   cd MyApp
   npm install
   ```

   Required dependencies:

   ```json
   {
     "dependencies": {
       "react": "^18.2.0",
       "react-native": "^0.74.5"
     },
     "devDependencies": {
       "@types/react": "^18.2.79",
       "@types/react-native": "^0.73.0",
       "typescript": "^5.0.4"
     }
   }
   ```

   Optional `tsconfig.json` for path aliases:

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["*"]
       }
     }
   }
   ```

2. **Install the CLI** (if global):

   ```bash
   npm install -g pixelblock-rn-cli
   ```

3. **Add a Component**:

   ```bash
   pixelblock-rn-cli add
   ```

   - Select a component from the prompt (e.g., `button`).
   - Component is generated in `components/UI/Button/` (or configured directory).

4. **Use the Component**:

   ```tsx
   import { Button } from '@/components/UI/Button';

   const MyScreen = () => (
     <Button
       title="Click Me"
       onPress={() => console.log('Button pressed!')}
     />
   );
   ```

   Without aliases:

   ```tsx
   import { Button } from './components/UI/Button';
   ```

## Customization

- Edit `components/UI/<ComponentName>/styles.ts` to change colors (e.g., `backgroundColor`, `borderColor`).
- Modify `<ComponentName>.tsx` or `types.ts` for behavior or props.
- Add new component templates in `src/templates/<ComponentName>/`.
- Configure defaults in `.pixelblockrc`.

## Requirements

- Node.js (>=14.x)
- React Native project with:
  - `react` (>=18.2.0)
  - `react-native` (>=0.74.5)
  - `@types/react`, `@types/react-native`, `typescript` (>=5.0.4)
- Yarn or npm

## Contributing

Open an issue or submit a pull request on GitHub.

## License

MIT License. See LICENSE.

## Related Projects

- pixelblock-cli