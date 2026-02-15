# Project Structure

## Directory Layout

```
.
├── src/                    # Source code
│   ├── core/              # Core functionality modules
│   │   └── options.ts     # Plugin options and configuration
│   └── index.ts           # Main entry point (plugin export)
├── test/                  # Test files
│   └── *.test.ts          # Vitest test files
├── dist/                  # Build output (generated, not in git)
├── .kiro/                 # Kiro AI assistant configuration
│   └── steering/          # AI guidance documents
└── [config files]         # Root-level configuration
```

## Key Files

- `src/index.ts`: Main plugin export using unplugin's `createUnplugin`
- `src/core/options.ts`: Plugin options interface and resolver
- `package.json`: Package metadata, scripts, and dependencies
- `tsconfig.json`: TypeScript compiler configuration
- `vitest.config.ts`: Test configuration
- `tsdown.config.ts`: Build configuration
- `eslint.config.js`: Linting rules
- `.prettierrc`: Code formatting rules

## Architecture Patterns

### Plugin Structure
- Use unplugin's `createUnplugin` factory for cross-bundler compatibility
- Export as `UnpluginInstance` type
- Implement plugin hooks (transform, load, etc.) as needed

### Options Pattern
- Define `Options` interface for user-facing configuration
- Create `OptionsResolved` type for internal use with defaults applied
- Implement `resolveOptions()` function to merge user options with defaults

### Module Organization
- Keep core logic in `src/core/` directory
- One concern per file
- Export public API from `src/index.ts`

### Testing
- Co-locate tests with source in `test/` directory
- Use `.test.ts` suffix for test files
- Aim for 80%+ coverage on all metrics

## File Naming Conventions
- Source files: `kebab-case.ts`
- Test files: `kebab-case.test.ts`
- Config files: `tool.config.ts` or `.toolrc`

## Import/Export Guidelines
- Use named exports for utilities and types
- Use default export for main plugin instance
- Prefer explicit imports over barrel exports
- Use `type` imports for type-only imports
