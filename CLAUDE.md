# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a DatoCMS plugin called "Gradient Picker" that provides a simple gradient picker for creating smooth background gradients. The plugin allows users to select a starting color and adjust its opacity to generate a linear gradient that fades to white, outputting clean CSS ready for use in components.

## Development Commands

This project uses **pnpm v10** as the package manager (locked via `packageManager` field in package.json).

- **Install dependencies**: `pnpm install`
- **Start development server**: `pnpm dev`
- **Build the plugin**: `pnpm build`
  - This runs TypeScript compilation (`tsc -b`) followed by Vite build
- **Preview production build**: `pnpm preview`
- **Prepare for publishing**: `pnpm prepublishOnly` (automatically runs build)

## Architecture

### DatoCMS Plugin Structure

This plugin follows the standard DatoCMS plugin architecture using the `datocms-plugin-sdk`:

1. **Entry Point** ([src/main.tsx](src/main.tsx)): Uses `connect()` from `datocms-plugin-sdk` to register plugin entrypoints. Currently implements `renderConfigScreen()` which is called when the plugin's configuration screen needs to be rendered.

2. **Entrypoints Pattern**: Plugin screens are organized in [src/entrypoints/](src/entrypoints/) directory. Each entrypoint receives a context object (`ctx`) that provides access to DatoCMS plugin APIs and data.

3. **Rendering Utility** ([src/utils/render.tsx](src/utils/render.tsx)): Centralized React rendering function that wraps components in `StrictMode` and mounts to the `#root` div. All entrypoints use this utility for consistent rendering behavior.

### Plugin Configuration

The [package.json](package.json) includes a `datoCmsPlugin` section that defines:
- Plugin metadata (title, images)
- Entry point: `dist/index.html` (built by Vite)
- Permissions array (currently empty)

### Build System

- **Vite** is used for bundling with React plugin support
- **Base path** is set to `./` for proper asset resolution in DatoCMS environment
- TypeScript is configured with composite project structure (app and node configs)
- Output goes to `dist/` directory which is included in npm package

## Key Dependencies

- `datocms-plugin-sdk`: Core SDK for DatoCMS plugin development
- `datocms-react-ui`: UI component library for consistent DatoCMS look and feel (import styles from `datocms-react-ui/styles.css`)
- React 18 with TypeScript
