---
inclusion: always
---

# Project Structure & Architecture

## Directory Layout

```
src/
├── core/              # Core functionality (options, utilities)
├── index.ts           # Main plugin export (default export)
├── api.ts             # Public API functions
├── vite.ts            # Vite-specific plugin
├── webpack.ts         # Webpack-specific plugin
├── rollup.ts          # Rollup-specific plugin
└── rspack.ts          # Rspack-specific plugin

test/
└── *.test.ts          # Vitest test files (80%+ coverage required)

dist/                  # Build output (ESM .js + CJS .cjs, auto-generated)
```

## Critical Architecture Rules

### Plugin Structure (unplugin)
- ALWAYS use `createUnplugin` factory from unplugin for cross-bundler compatibility
- Return type MUST be `UnpluginInstance`
- Main plugin export in `src/index.ts` as default export
- Bundler-specific exports (vite.ts, webpack.ts, etc.) re-export the main plugin

### Options Pattern (Required)
1. Define `Options` interface in `src/core/options.ts` for user-facing config
2. Create `OptionsResolved` type for internal use with all defaults applied
3. Implement `resolveOptions(options: Options): OptionsResolved` to merge user options with defaults
4. NEVER use raw user options directly - always resolve first

### Module Organization
- Core logic MUST live in `src/core/` directory
- One responsibility per file
- Public API exported from `src/index.ts` (default export for plugin)
- Use named exports for utilities, types, and helper functions

### Testing Requirements
- Tests in `test/` directory (NOT co-located with source)
- File naming: `*.test.ts` suffix
- Coverage thresholds: 80% minimum (lines, functions, branches, statements)
- Use Vitest for all tests
- ALWAYS run `pnpm test` before committing

## File Naming Conventions
- Source files: `kebab-case.ts`
- Test files: `kebab-case.test.ts`
- Config files: `tool.config.ts` or `.toolrc`
- NEVER use PascalCase or camelCase for filenames

## Import/Export Rules
- Use `export type` for type-only exports
- Use `import type` for type-only imports
- Named exports for utilities, types, and helpers
- Default export ONLY for main plugin in `src/index.ts`
- Avoid barrel exports (index.ts re-exporting everything)
- Prefer explicit imports: `import { foo } from './module'` over `import * as`

## Code Organization Patterns
- Keep functions small and focused (single responsibility)
- Extract complex logic into separate files in `src/core/`
- Use TypeScript strict mode - all types must be explicit
- Avoid `any` type - use `unknown` if type is truly unknown
