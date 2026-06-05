import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  // Use Vercel preset so Nitro builds compatible serverless functions
  preset: 'vercel',
  // Output directory matching Vercel's Build Output API
  // Output directory matching Vercel's Build Output API
  output: {
    dir: '.vercel/output',
    // Optional sub‑folders can be customized if needed
    // serverDir: '.vercel/output/server',
    // publicDir: '.vercel/output/public',
  },
  // Provide Vercel Build Output API config (generates config.json)
  vercel: {
    config: {}
  },
});
