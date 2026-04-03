import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// __NND_BASE_PATH__ is replaced by the scaffold script
export default defineConfig({
  plugins: [react()],
  base: '/sharks/',
})
