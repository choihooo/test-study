import path from "path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@src/components": path.resolve(__dirname, "src/components"),
      "@src/pages": path.resolve(__dirname, "src/pages"),
      "@src/layouts": path.resolve(__dirname, "src/layouts"),
      "@src/utils": path.resolve(__dirname, "src/utils"),
      "@src/hooks": path.resolve(__dirname, "src/hooks"),
      "@src/types": path.resolve(__dirname, "src/types"),
      "@src/styles": path.resolve(__dirname, "src/styles"),
    },
  },
})
