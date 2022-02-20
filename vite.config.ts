import react from "@vitejs/plugin-react";
import { chromeExtension } from "rollup-plugin-chrome-extension";
import { defineConfig } from "vite";
import manifest from "./manifest.json";
import { name, version } from "./package.json";

// https://vitejs.dev/config/

Object.assign(manifest, { name, version });

export default defineConfig({
  build: { minify: false },
  plugins: [react(), chromeExtension({ manifest })],
});
