import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-component-lib',
      fileName: 'react-component-lib',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          'react': 'React',
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react()
  ],
})
