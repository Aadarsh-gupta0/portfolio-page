import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Repo name, so `npm run build` output works on GitHub Pages.
  base: '/portfolio-page/',
  plugins: [react(), tailwindcss()],
})
