import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/lyb-jewelry/', // Đảm bảo thay đúng tên repository của bạn
});
