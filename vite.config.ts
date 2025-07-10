import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// The path import is no longer needed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The resolve.alias configuration has been removed.
})
