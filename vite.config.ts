import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
    port: 3060,
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/main.tsx'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let path = `assets/[name]-[hash][extname]`;

          if (assetInfo.name) {
            let extType = assetInfo.name.split('.').at(-1);
            /* make sure if the image is categorized in the following extensions. 
            If not, it is categorized into no extension name folder */
            let isImage = false;

            if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              isImage = true;
            }
            // Construct the path based on whether it's an image or not.
            path = isImage
              ? `assets/${extType}/[name]-[hash][extname]`
              : `assets/[name]-[hash][extname]`;
          }
          return path;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
