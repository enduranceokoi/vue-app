import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/ticketapp-vue/' // 👈 replace with your GitHub repo name
});
