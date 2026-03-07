import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
    server: {
    host: process.env.REACT_APP_ENV == "development"? process.env.REACT_APP_DEV_HOST : '0.0.0.0', // Allow access from network
    port: 5173,       // You can change this if needed
  },
  resolve: {
    alias: {
      // Alias @ to the app directory
      '@': path.resolve(__dirname, './app'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
