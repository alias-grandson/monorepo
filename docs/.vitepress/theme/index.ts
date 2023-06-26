import DefaultTheme from 'vitepress/theme'
import { uiExample } from '@monorepo/ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component(uiExample, 'ui-example')
  },
}
