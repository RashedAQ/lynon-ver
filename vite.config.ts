import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("recharts")) return "vendor-recharts";
            if (id.includes("@tanstack")) return "vendor-tanstack";
            if (id.includes("lottie")) return "vendor-lottie";
            if (id.includes("lucide-react")) return "vendor-lucide";
            if (id.includes("date-fns")) return "vendor-datefns";
            return "vendor";
          }
        },
      },
    },
  },
});
