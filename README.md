# Gradient Picker

A powerful DatoCMS plugin for creating multi-color CSS gradients with full control over colors, stops, and angles. Perfect for creating beautiful backgrounds, hero sections, and visual effects.

## Features

- **Multi-color gradients**: Add unlimited color stops to your gradients
- **Angle control**: Adjust gradient direction with full 360° control
- **Linear and radial gradients**: Support for both gradient types
- **Live preview**: See your gradient in real-time as you create it
- **CSS output**: Generates clean CSS gradient strings ready to use
- **User-friendly interface**: Intuitive color picker powered by react-best-gradient-color-picker

## Installation

Install the plugin from the DatoCMS Plugin Marketplace or manually via npm:

```bash
pnpm add datocms-plugin-gradient-picker
```

## Usage

1. Add the plugin to your DatoCMS project
2. In your model, add a new field (String or Text type)
3. Under "Presentation", select "Gradient Picker" as the field addon
4. Save your changes

The plugin adds a visual gradient preview below the native DatoCMS text input. You can:
- Type or paste gradient CSS directly in the text field
- Click on the gradient preview to open the visual color picker
- Edit colors, stops, and angles using the picker popover

Gradients are stored as CSS-ready strings like:
```css
linear-gradient(90deg, rgb(255,0,0) 0%, rgb(0,0,255) 100%)
```

## Using the gradient in your code

The gradient is stored as a CSS string, so you can use it directly:

```jsx
// In React/JSX
<div style={{ background: record.gradientField }}>
  Your content here
</div>

// In CSS-in-JS
const styles = {
  hero: {
    background: record.gradientField
  }
}
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## License

MIT