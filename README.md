# NPM Starter

A production-ready starter template for creating modern NPM packages with TypeScript, featuring comprehensive tooling for testing, formatting, type-checking, and automated releases.

[![CI](https://github.com/yeasin2002/npm-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/yeasin2002/npm-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you build better NPM packages!

## ✨ Features

### Build & Type System

- **📦 TypeScript 5.9+** - Proper TypeScript support
- **⚡ tsdown** - Rust based Lightning-fast builds
- **🔍 Export Validation** - Ensure package exports work correctly with [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io)
- **📚 Dual Module Format** - Full CommonJS and ESM support for maximum compatibility

### Testing & Quality

- **🧪 Vitest**
- **🎨 Prettier** - Consistent code formatting with all necessary rules
- **🔧 ESLint** - TypeScript-aware linting with type-checked rules
- **📏 size-limit** - Monitor and control bundle size

### Automation & Workflow

- **🪝 Husky + lint-staged** - Pre-commit hooks for automatic formatting and linting
- **✅ Commitlint** - Enforce conventional commits for better changelogs
- **🚀 release-it** - Tag-based automated releases with conventional-changelog
- **🤖 GitHub Actions** - Complete CI/CD pipeline for testing and releases
- **🔄 Dependabot** - Weekly automated dependency updates with proper grouping

### Documentation & Developer Experience

- **🐛 VS Code Integration** - Debug configurations and recommended extensions
- **🔒 Security Audits** - Automated dependency scanning

## 🚀 Quick Start

### Installation

```bash
# Clone this repository
git clone https://github.com/yeasin2002/npm-starter.git

# Navigate to the directory
cd npm-starter

# Install dependencies (supports npm, yarn, pnpm, or bun)
pnpm install
```

### Development

```bash
# Run tests in watch mode
pnpm run dev

# Build the package
pnpm run build

# Run type checking
pnpm run lint

# Run tests
pnpm run test
```

## 📋 Available Scripts

### Development

| Script                     | Description                           |
| -------------------------- | ------------------------------------- |
| `pnpm run dev`             | Run tests in watch mode               |
| `pnpm run build`           | Build the package (CJS + ESM + types) |
| `pnpm run clean`           | Remove build artifacts and caches     |
| `pnpm run typecheck`       | Run TypeScript type checking          |
| `pnpm run typecheck:watch` | Run type checking in watch mode       |

### Testing

| Script                   | Description                    |
| ------------------------ | ------------------------------ |
| `pnpm run test`          | Run all tests once             |
| `pnpm run test:watch`    | Run tests in watch mode        |
| `pnpm run test:coverage` | Run tests with coverage report |

### Code Quality

| Script                  | Description                      |
| ----------------------- | -------------------------------- |
| `pnpm run lint`         | Run ESLint and TypeScript checks |
| `pnpm run lint:fix`     | Auto-fix linting issues          |
| `pnpm run format:write` | Format code with Prettier        |
| `pnpm run format:check` | Check code formatting            |
| `pnpm knip`             | Declutter unused dependencies    |

### Documentation

| Script                | Description                 |
| --------------------- | --------------------------- |
| `pnpm run docs`       | Generate API documentation  |
| `pnpm run docs:watch` | Generate docs in watch mode |

### Security & Size

| Script              | Description                        |
| ------------------- | ---------------------------------- |
| `pnpm run audit`    | Run security audit on dependencies |
| `pnpm run size`     | Check bundle size                  |
| `pnpm run size:why` | Analyze bundle size with details   |

### Release & CI

| Script                   | Description                      |
| ------------------------ | -------------------------------- |
| `pnpm run check-exports` | Validate package exports         |
| `pnpm run ci`            | Run full CI pipeline             |
| `pnpm run release`       | Create release (used by CI/Tags) |

## 📁 Project Structure

```
npm-starter/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml          # CI/CD pipeline
│   │   ├── release.yml     # Tag-based automated releases
│   │   └── security.yml    # Security audits
│   └── dependabot.yml      # Dependency update configuration
├── .husky/                  # Git hooks (pre-commit, commit-msg)
├── .kiro/                   # Kiro AI assistant configuration
│   └── steering/           # Project-specific AI guidance
├── .vscode/                 # VS Code settings and debug configs
├── src/
│   ├── index.ts            # Main entry point (re-exports all public APIs)
│   └── utils.ts            # Example utilities
├── test/
│   └── utils.test.ts       # Vitest test files
├── dist/                    # Build output (generated, gitignored)
│   ├── index.cjs           # CommonJS bundle
│   ├── index.js            # ESM bundle
│   └── index.d.ts          # TypeScript declarations
├── docs/                    # Generated API documentation (gitignored)
├── coverage/                # Test coverage reports (gitignored)
├── package.json             # Package metadata and scripts
├── tsconfig.json            # TypeScript compiler options
├── tsdown.config.ts         # Build configuration
├── vitest.config.ts         # Test configuration
├── eslint.config.js         # Linting rules
├── .prettierrc              # Code formatting rules
├── .lintstagedrc.json       # Pre-commit hook configuration
├── commitlint.config.js     # Commit message linting
└── README.md
```

## 📦 Publishing

This template uses **tag-based automated releases** with `release-it` and `conventional-changelog`.

### Quick Release Workflow

```bash
# 1. Make changes and commit using conventional commits
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug"

# 2. Create a version tag (patch/minor/major)
npm version patch  # 1.0.0 → 1.0.1
# or
npm version minor  # 1.0.0 → 1.1.0
# or
npm version major  # 1.0.0 → 2.0.0

# 3. Push the tag to trigger automated release
git push --follow-tags
```

### What Happens Automatically

When you push a tag (e.g., `v1.0.1`), GitHub Actions automatically:
1. ✅ Runs the full CI pipeline
2. ✅ Builds the package
3. ✅ Generates/updates CHANGELOG.md from conventional commits
4. ✅ Publishes to npm
5. ✅ Creates a GitHub release with changelog

### Pre-releases

For beta/alpha versions:

```bash
npm version prerelease --preid=beta  # 1.0.0 → 1.0.1-beta.0
git push --follow-tags
```

### Required Setup

> **Important**: Add `NPM_TOKEN` to your GitHub repository secrets:
> 1. Get an automation token from [npmjs.com](https://www.npmjs.com/settings/tokens)
> 2. Add it to **Settings → Secrets → Actions** as `NPM_TOKEN`

### Conventional Commits

Use these commit prefixes for automatic changelog generation:

- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `test:` - Test updates
- `perf:` - Performance improvements

> **Note**: The `prepublishOnly` script ensures all checks pass before publishing.

## 🛠️ Customization

### 1. Update Package Metadata

Edit `package.json`:

```json
{
  "name": "your-package-name",
  "version": "0.0.1",
  "description": "Your package description",
  "keywords": ["keyword1", "keyword2"],
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/repo.git"
  },
  "homepage": "https://github.com/username/repo"
}
```

### 2. Customize Build & TypeScript

**Build settings** (`tsdown.config.ts`):

- Add/remove output formats
- Configure external dependencies
- Adjust bundling options

**TypeScript options** (`tsconfig.json`):

- Change target/lib versions
- Adjust strictness levels
- Modify path mappings

### 3. Configure Code Quality

**ESLint** (`eslint.config.js`):

- Add custom rules
- Configure type-checking behavior
- Adjust ignore patterns

**Prettier** (`.prettierrc`):

- Change formatting preferences
- Adjust line width, quotes, semicolons

### 4. Add Dependencies

```bash
# Production dependencies (bundled with your package)
pnpm add package-name

# Development dependencies (build tools, testing)
pnpm add -D package-name

# Peer dependencies (required by consumers)
# Add to peerDependencies in package.json
```

## 🔧 Troubleshooting

### Build Issues

```bash
# Clean all build artifacts and caches
pnpm run clean

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Type Errors

```bash
# Run type checking with detailed output
pnpm run typecheck

# Check for export issues
pnpm run check-exports
```

### Test Failures

```bash
# Run tests with verbose output
pnpm run test -- --reporter=verbose

# Run specific test file
pnpm run test
```

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [tsdown Documentation](https://github.com/egoist/tsdown)
- [release-it Documentation](https://github.com/release-it/release-it)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Total TypeScript - NPM Package Guide](https://www.totaltypescript.com/how-to-create-an-npm-package)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Md Kawsar Islam Yeasin**

- Email: [mdkawsarislam2002@gmail.com](mailto:mdkawsarislam2002@gmail.com)
- Website: [yeasin2002.vercel.app](https://yeasin2002.vercel.app/)
- GitHub: [@yeasin2002](https://github.com/yeasin2002)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

See the [issues page](https://github.com/yeasin2002/npm-starter/issues) for known issues and feature requests.
