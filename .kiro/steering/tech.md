# Technology Stack

## Core Technologies
- TypeScript 5.9+ (strict mode enabled)
- Node.js with ES2022 target
- unplugin for universal plugin architecture

## Build System
- tsdown: TypeScript bundler for dual ESM/CJS output
- Output: `dist/` directory with declaration files
- Formats: ESM (`.js`) and CommonJS (`.cjs`)

## Testing
- Vitest for unit testing
- Coverage thresholds: 80% (lines, functions, branches, statements)
- Coverage provider: v8

## Code Quality
- ESLint with TypeScript ESLint recommended rules
- Prettier for code formatting (single quotes, no semicolons, 100 char width)
- TypeScript strict mode with additional checks (`noUncheckedIndexedAccess`, `noImplicitOverride`)

## Git Hooks & Automation
- Husky + Lefthook for git hooks
- Commitlint with conventional commits
- lint-staged for pre-commit checks
- release-it for automated releases

## Common Commands

### Development
```bash
pnpm dev              # Run tests in watch mode
pnpm typecheck        # Type check without emitting
pnpm typecheck:watch  # Type check in watch mode
```

### Building
```bash
pnpm build            # Build for production
pnpm clean            # Clean build artifacts
```

### Testing
```bash
pnpm test             # Run tests once
pnpm test:coverage    # Run tests with coverage report
pnpm test:watch       # Run tests in watch mode
```

### Code Quality
```bash
pnpm lint             # Lint source code
pnpm lint:fix         # Lint and auto-fix issues
pnpm format:check     # Check code formatting
pnpm format:write     # Format code
```

### Pre-publish
```bash
pnpm ci               # Run full CI pipeline (build, format, lint, test)
pnpm check-exports    # Verify package exports with @arethetypeswrong
pnpm size             # Check bundle size
```

### Release
```bash
pnpm release          # Create a new release
```
