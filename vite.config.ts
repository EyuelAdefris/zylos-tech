import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" }
  },
  vite: {
    build: {
      // Output directory compatible with Vercel Build Output API
      outDir: ".vercel/output/static",
      emptyOutDir: false
    }
  },
  // Enable Nitro (configured in nitro.config.ts)
  nitro: true,
});

