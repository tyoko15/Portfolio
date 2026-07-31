// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // リポジトリ名に合わせて変更する
  base: '/Portfolio/',
  plugins: [react()],
})