import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "./build"
    },
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[name]_[local]__[hash:base64:6]"
        }
    }
})
