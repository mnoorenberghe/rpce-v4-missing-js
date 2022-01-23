import react from '@vitejs/plugin-react'
import { chromeExtension } from 'rollup-plugin-chrome-extension'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), chromeExtension({})],
})