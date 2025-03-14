import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
    chunkSizeWarningLimit: 1600,
  },
  optimizeDeps: {
    include: [
      "@hookform/resolvers/zod",
      "react-hook-form",
      "zod",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@radix-ui/react-separator",
      "clsx",
      "tailwind-merge",
    ],
    esbuildOptions: {
      target: "es2020",
    },
  },
  plugins: [
    react({
      plugins:
        process.env.VITE_TEMPO === "true" ? [["tempo-devtools/swc", {}]] : [],
    }),
    process.env.VITE_TEMPO === "true" ? tempo() : null,
  ].filter(Boolean),
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: process.env.VITE_TEMPO === "true" ? true : undefined,
  },
});
