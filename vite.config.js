// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react' // ✅ Add this

// export default defineConfig({
//   base: '/',
//   plugins: [    react(),      // ✅ Enables React Fast Refresh / HMR
// tailwindcss()],
//   assetsInclude: ['**/*.html'], // ✅ Fix HTML parsing error
//   server: {
//     host: '0.0.0.0',
//     port: 3067,
//     allowedHosts: ['sarwalldecors.com'],
//     strictPort: true,
//   },
// })

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0',
    port: 3067,
    allowedHosts: ['sarwalldecors.com'],
    strictPort: true,
  },
})
