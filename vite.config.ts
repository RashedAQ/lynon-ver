import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
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
    legacy({
      targets: [
        "defaults",
        "not IE 11",
        "iOS >= 12",
        "Android >= 7"
      ],
      modernPolyfills: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    target: "es2019",
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
      // Ensure CJS packages that reference global React are transformed properly
      // and avoid runtime React undefined issues in some deployments
    },
    commonjsOptions: { transformMixedEsModules: true },
  },
  optimizeDeps: { include: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"] },
});
