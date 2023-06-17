import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgs from 'vite-plugin-react-svg'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    svgs({ defaultExport: 'component' }),
  ],
})
