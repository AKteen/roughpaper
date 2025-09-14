import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'RoughPaper',
        short_name: 'RoughPaper',
        description: 'A note-taking web app',
        theme_color: '#202124',
        background_color: '#202124',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/paper.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}']
      }
    })
  ],
})
