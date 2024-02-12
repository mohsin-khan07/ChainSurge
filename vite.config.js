import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      replace: {
        "process.env.ALCHEMY_API": JSON.stringify(process.env.ALCHEMY_API),
      },
    },
  },
});
