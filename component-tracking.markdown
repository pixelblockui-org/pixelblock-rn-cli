# Pixelblock RN CLI Component Tracking

This file tracks all potential React Native components that can be added to the `pixelblock-rn-cli` to make it a comprehensive tool for modern projects. Components are categorized by type (Core, UI, Navigation, Community/Custom). A ✅ indicates the component is implemented in the CLI; a ☐ indicates it is not yet added. Use this checklist to plan and prioritize new component templates.

## Core Components
These are built-in React Native components provided by the `react-native` library, using the `PX` prefix for Pixelblock branding (e.g., `PXView`, `PXText`).

- [✅] View - A container for layout and styling (implemented in `src/templates/view`).
- [✅] Text - Displays text with customizable styles (implemented in `src/templates/text`).
- [✅] TextInput - Allows user text input (implemented in `src/templates/textinput`).
- [✅] Button - A basic button for user interaction (implemented in `src/templates/button`).
- [✅] Image - Displays images from local or remote sources (implemented in `src/templates/image`).
- [✅] ScrollView - A scrollable container for content (implemented in `src/templates/scrollview`).
- [✅] FlatList - A performant list for rendering large datasets (implemented in `src/templates/flatlist`).
- [☐] SectionList - A list with section headers for grouped data.
- [✅] TouchableOpacity - A touchable component with opacity feedback (implemented in `src/templates/touchableopacity`).
- [☐] TouchableHighlight - A touchable component with highlight feedback.
- [☐] TouchableWithoutFeedback - A touchable component without visual feedback.
- [☐] Pressable - A modern touchable component with advanced press handling.
- [✅] SafeAreaView - Ensures content avoids device notches and edges (implemented in `src/templates/safeareaview`).
- [✅] ActivityIndicator - Displays a loading spinner (implemented in `src/templates/activityindicator`).
- [✅] Switch - A toggle switch for boolean input (implemented in `src/templates/switch`).
- [☐] RefreshControl - Adds pull-to-refresh functionality to scrollable components.
- [☐] StatusBar - Controls the device status bar appearance.
- [☐] KeyboardAvoidingView - Adjusts layout to avoid the keyboard.

## UI Components
These are commonly used UI elements, often built from core components or libraries.

- [☐] Modal - Displays a popup overlay for dialogs or forms.
- [☐] Alert - Shows a native alert dialog (custom wrapper for `Alert.alert`).
- [☐] Card - A styled container for grouped content (e.g., with shadow, border).
- [☐] Avatar - A circular image or icon for user profiles.
- [☐] Badge - A small indicator for notifications or counts.
- [☐] Divider - A horizontal or vertical line for separating content.
- [☐] ProgressBar - Displays progress for tasks or loading.
- [☐] Slider - Allows users to select a value from a range.
- [☐] Checkbox - A toggle for single or multiple selections.
- [☐] RadioButton - A single-selection option from a group.
- [☐] Dropdown - A menu for selecting one option from a list.
- [☐] Tooltip - A small popup for contextual information.
- [☐] Accordion - A collapsible section for expandable content.
- [☐] Tabs - A navigation component for switching between views.
- [☐] Carousel - A scrollable gallery for images or content.
- [☐] DatePicker - A component for selecting dates.
- [☐] TimePicker - A component for selecting times.
- [☐] Stepper - A component for incrementing/decrementing values.

## Navigation Components
These are related to navigation, often used with libraries like `react-navigation`.

- [☐] Header - A navigation bar with title, back button, or actions.
- [☐] BottomTabBar - A tab bar for bottom navigation.
- [☐] Drawer - A sidebar menu for navigation.
- [☐] StackNavigator - A wrapper for stack-based screen navigation.
- [☐] TabNavigator - A wrapper for tab-based navigation.

## Community/Custom Components
These are popular components from community libraries or custom implementations for modern apps.

- [☐] Icon - A component for vector icons (e.g., using `react-native-vector-icons`).
- [☐] Toast - A temporary notification popup (e.g., using `react-native-toast-message`).
- [☐] Skeleton - A placeholder for loading content (e.g., shimmering effect).
- [☐] BottomSheet - A draggable sheet from the bottom (e.g., using `@gorhom/bottom-sheet`).
- [☐] Swipeable - A component with swipe gestures (e.g., for lists using `react-native-gesture-handler`).
- [☐] Video - A video player component (e.g., using `react-native-video`).
- [☐] Map - A map view component (e.g., using `react-native-maps`).
- [☐] QRCode - A component for displaying QR codes (e.g., using `react-native-qrcode-svg`).
- [☐] Calendar - A calendar for date selection (e.g., using `react-native-calendars`).
- [☐] AnimatedView - A wrapper for animated components (using `react-native-reanimated`).
- [☐] Form - A form container with validation (e.g., using `formik` or `react-hook-form`).
- [☐] RichTextEditor - A text editor for rich content (e.g., using `react-native-pell-rich-editor`).
- [☐] Chart - A component for data visualization (e.g., using `react-native-chart-kit`).
- [☐] SocialButton - A button for social login (e.g., Google, Facebook).
- [☐] ImagePicker - A component for selecting images (e.g., using `react-native-image-picker`).

## Notes
- **Implemented Components**: `Button`, `TextInput`, `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TouchableOpacity`, `SafeAreaView`, `ActivityIndicator`, and `Switch` are available in the CLI (`src/templates/`), using the `PX` prefix (e.g., `PXView`, `PXFlatList`) for Pixelblock branding.
- **Adding New Components**: Create a new folder in `src/templates/<componentName>` with `<ComponentName>.tsx`, `index.ts`, `styles.ts`, `types.ts`, and `README.md`, following the structure of existing templates. Use `PX` prefix for core components (e.g., `PXFlatList`).
- **Prioritization**: Focus on remaining core components like `SectionList`, `Pressable`, and `RefreshControl`, then UI components like `Modal` or `Card` for enhanced UX.
- **Community Libraries**: Some components (e.g., `Icon`, `BottomSheet`) require additional dependencies. Update `package.json` in the project when adding these.
- **Tracking Updates**: Check (✅) components in this file as they are added to the CLI. Update the CLI’s `README.md` to list new components.

## Next Steps
- Add core components (`SectionList`, `Pressable`, `RefreshControl`) to cover basic app needs, using `PX` prefix.
- Implement popular UI components (`Modal`, `Card`, `Tabs`) for richer interfaces.
- Explore community components (`BottomSheet`, `Toast`) to support advanced features.
- Test each new component in a React Native project to ensure compatibility.