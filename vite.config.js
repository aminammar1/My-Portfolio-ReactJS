import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/My-Portfolio-ReactJS/", // Replace with your repo name
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
