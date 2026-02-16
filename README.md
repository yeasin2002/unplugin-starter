# unplugin Starter

An advanced starter template for creating modern, universal build plugins that work seamlessly across Vite, Rollup, Webpack, esbuild, and other bundlers using [unplugin](https://github.com/unjs/unplugin). Built with TypeScript and featuring comprehensive tooling for testing, formatting, type-checking, and automated releases.

## ✨ Features

- 🔌 **Universal Plugin Architecture** - Write once, run everywhere with unplugin
- 📦 **Dual Package Exports** - ESM and CommonJS support out of the box
- 🎯 **TypeScript First** - Strict mode enabled with comprehensive type safety
- ✅ **Testing Ready** - Vitest with 80%+ coverage requirements
- 🎨 **Code Quality** - ESLint, Prettier, and automated formatting
- 🚀 **Automated Releases** - Conventional commits with release-it
- 🔍 **Type Checking** - Continuous type validation with watch mode
- 📊 **Bundle Size Tracking** - Monitor your package size with size-limit
- 🪝 **Git Hooks** - Pre-commit checks with Husky and Lefthook

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone this template
git clone https://github.com/yeasin2002/npm-starter.git my-plugin
cd my-plugin

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 📖 Usage


## 🛠️ Development

### Available Scripts

#### Development
```bash
pnpm dev              # Run tests in watch mode
pnpm typecheck        # Type check without emitting
pnpm typecheck:watch  # Type check in watch mode
```

#### Building
```bash
pnpm build            # Build for production (ESM + CJS)
pnpm clean            # Clean build artifacts and cache
```

#### Testing
```bash
pnpm test             # Run tests once
pnpm test:coverage    # Run tests with coverage report
pnpm test:watch       # Run tests in watch mode
```

#### Code Quality
```bash
pnpm lint             # Lint source code
pnpm lint:fix         # Lint and auto-fix issues
pnpm format:check     # Check code formatting
pnpm format:write     # Format code with Prettier
```

#### Pre-publish Checks
```bash
pnpm ci               # Run full CI pipeline
pnpm check-exports    # Verify package exports
pnpm size             # Check bundle size
pnpm size:why         # Analyze bundle size
pnpm audit            # Security audit
```

#### Release
```bash
pnpm release          # Create a new release with conventional changelog
```

## 📁 Project Structure

```
src/
├── core/              # Core functionality
│   └── options.ts     # Plugin options and resolution
├── index.ts           # Main plugin export (default)
├── api.ts             # Public API functions
├── vite.ts            # Vite-specific plugin
├── webpack.ts         # Webpack-specific plugin
├── rollup.ts          # Rollup-specific plugin
└── rspack.ts          # Rspack-specific plugin

test/
└── *.test.ts          # Vitest test files

dist/                  # Build output (auto-generated)
├── index.js           # ESM build
├── index.cjs          # CommonJS build
└── index.d.ts         # TypeScript declarations
```

## 🔧 Configuration

### TypeScript

Strict mode enabled with additional checks:

### Testing

- Framework: Vitest
- Coverage: 80% minimum (lines, functions, branches, statements)
- Provider: v8

### Code Style

- ESLint with TypeScript ESLint recommended rules
- Prettier (single quotes, no semicolons, 100 char width)
- EditorConfig for consistent formatting

### Git Hooks

- Pre-commit: Lint staged files
- Commit message: Conventional commits validation

## 📦 Publishing

### Before Publishing

1. Update `package.json` with your package details:
   - `name`
   - `description`
   - `author`
   - `repository`
   - `homepage`
   - `keywords`

2. Run pre-publish checks:
```bash
pnpm run ci
```

3. Create a release:
```bash
pnpm release
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

MIT © [Md Kawsar Islam Yeasin](https://yeasin2002.vercel.app/)

## 🔗 Links

- [unplugin Documentation](https://github.com/unjs/unplugin)
- [Report Issues](https://github.com/yeasin2002/npm-starter/issues)
- [Changelog](CHANGELOG.md)

## 💡 Tips

- Keep your plugin focused on a single responsibility
- Always resolve options with defaults before using them
- Write tests for all public APIs
- Use TypeScript strict mode for better type safety
- Follow conventional commits for automated changelog generation
- Monitor bundle size to keep your plugin lightweight

---

Made with ❤️ by [Yeasin](https://yeasin2002.vercel.app/)
