# Changelog

## v2.1.0

-   Added support for custom icons with path arrays
-   Path arrays can also be arrays of objects.
-   Property `type` is now `mdi` by default, rather than `null`
-   Bumped all dependencies
-   DEV: Switched to `Vitest` for component tests

## v2.0.0

As of v2.0.0 of vue3-icon, Vite is being used to create the library files. The file paths are now:

| Module   | Location              |
| -------- | --------------------- |
| CommonJS | dist/vue3-icon.cjs.js |
| ESM      | dist/vue3-icon.es.js  |
| UMD      | dist/vue3-icon.umd.js |
