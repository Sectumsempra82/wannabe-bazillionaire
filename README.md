# wannabe-bazillionaire

Millionaire-style quiz game built with React.

## Run locally

Use Node.js 22.12 or newer (Node 20 requires at least 20.19).
The validated runtime is pinned in .nvmrc.

```sh
npm ci
npm start
```

Open the URL printed by Vite (including /wannabe-bazillionaire/). The server binds to localhost.
For a different port: `npm start -- --port 5174`.

## Validate and build

```sh
npm test
npm run build
npm run preview
npm audit
```

Tests run once; use `npm test -- --watch` for watch mode.
Production files are generated in `build/`.
The GitHub Pages base path is preserved in vite.config.mjs. The existing npm run deploy command publishes build/; run it only when publication is intended.

## Maintenance notes

Create React App was replaced with Vite 8. JSX source files now use .jsx; application logic was preserved.
React 16, Bootstrap 4 and the existing Enzyme tests are retained for compatibility. Enzyme is constrained to its compatible Cheerio release; upgrading React and replacing Enzyme are separate modernization work.
