// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'docs/.vuepress/theme/*.{vue,html,jsx,tsx}',
    ]
  },
})