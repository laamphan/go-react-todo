import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react"

const theme = defineConfig({
  globalCss: {
    body: {
      bg: {
        base: "gray.500",
        _dark: "blue.800",
      },
    },
  },
})

const config = mergeConfigs(theme, defaultConfig)

export const customSystem = createSystem(config, {
  theme: {},
})
