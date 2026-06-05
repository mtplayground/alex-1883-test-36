# alex-1883-test-36

Interactive React abacus built with Vite.

## Requirements

- Node.js 18 or newer
- npm

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server on `0.0.0.0:8080`:

```bash
npm run dev
```

## Validation

Run the unit tests:

```bash
npm run test
```

Run the browser end-to-end test:

```bash
npm run e2e
```

Run linting and formatting checks:

```bash
npm run lint
npm run format:check
```

## Production Build

Create the static production build:

```bash
npm run build
```

The build output is written to `dist/`. The Vite base path is configured as
`./`, so built asset URLs are relative and the directory can be served from a
domain root, a subdirectory, or opened from a bare static file location.

Verify the production build locally on `0.0.0.0:8080`:

```bash
npm run serve:dist
```

For static hosting, deploy the full contents of `dist/` and serve
`dist/index.html` as the entry file.

## Configuration

Copy `.env.example` to `.env` when overriding defaults:

```bash
cp .env.example .env
```

`VITE_ABACUS_ROD_COUNT` controls the number of rods rendered by default. It must
be an integer from `1` through `15`.
