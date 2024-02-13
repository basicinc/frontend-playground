import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // '@': path.join(__dirname, './src'), // MEMO: vite-tsconfig-pathsで設定済み
    },
  },
  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
  },
});
