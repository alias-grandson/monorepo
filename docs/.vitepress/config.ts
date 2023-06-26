import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Monorepo UI',
  description: 'Example Vue monorepo with vitepress',
  cleanUrls: true,
  base: '/monorepo/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      {
        text: 'Example',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Example', link: '/guide/' },
          ],
        },
      ],
    },
  },
})
