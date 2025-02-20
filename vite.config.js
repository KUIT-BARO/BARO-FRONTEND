import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:8080",
        // target: "http://localhost:5173",
        target: "http://3.34.221.7",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // "/api" 제거
      },
    },
  },
  // scripts: {
  //   build: "tsc && vite build && echo '/* /index.html 200' | cat > dist/_redirects"
  // }
});
