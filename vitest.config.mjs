import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/*.test.js"],
    exclude: ["**/node_modules/**", "**/tests/**"],
  },
});
