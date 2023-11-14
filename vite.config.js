import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:3000",
        secure:false,
        proxyTimeout: 1000 * 60 * 10, // Set a higher timeout if needed
      },
    },
  },
  plugins: [react()],
})
