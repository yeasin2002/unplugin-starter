import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOptions, type Options } from './core/options'

export const UnpluginFactory: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (rawOptions = {}) => {
    const options = resolveOptions(rawOptions)

    const name = 'unplugin-starter'
    return {
      name,
      enforce: options.enforce,
      transform: {
        filter: { id: { include: options.include, exclude: options.exclude } },
        handler(code: string) {
          return `// unplugin-starter injected\n${code}`
        },
      },
    }
  }
)
