import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const PORT = process.env.PORT || 3000;

// @ts-ignore - I don't want to deal with the type of `mode`
export default defineConfig(({ mode /* , command */ }) => ({
  publicDir: './public',
  base: '/books/',
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[name].[local].[hash:base64:3]' : '[hash:base64:7]',
      localsConvention: 'camelCaseOnly',
    },
    devSourcemap: true,
  },
  server: {
    port: PORT,
    strictPort: true,
    open: process.env.NODE_ENV === 'development',
  },
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src'),
    },
  },
  plugins: [svgr(), react()],
  clearScreen: false,
  logLevel: 'info',
  cacheDir: './node_modules/.vite-my-cache',
  build: {
    outDir: './build',
    sourcemap: true,
  },
  preview: { port: 3001, strictPort: true, open: true },
}));
