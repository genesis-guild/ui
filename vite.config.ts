import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgs from 'vite-plugin-react-svg'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgs({ defaultExport: 'component' })],
})
