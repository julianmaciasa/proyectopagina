import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import svgLoader from '@andylacko/vite-svg-react-loader' 
//import svgx from "@svgx/vite-plugin-react"
import svgr from "vite-plugin-svgr";


export default defineConfig({
  plugins: [
    react(), 
    svgr(),
  ], 
})


