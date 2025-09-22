import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2006
  },
  base: '/event-frontend/'   // 👈 VERY IMPORTANT for Tomcat context
})
