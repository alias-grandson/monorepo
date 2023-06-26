import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: [
        './.vitepress/components',
      ],
      deep: false,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      transformer: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@monorepo/ui': resolve(__dirname, '../packages/ui/src/index.ts'),
    },
  },
})
