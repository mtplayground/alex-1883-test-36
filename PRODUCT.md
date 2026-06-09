# alex-1883-test-36

## Product Snapshot

`alex-1883-test-36` is an interactive browser-based soroban-style abacus built
as a Vite, React, and TypeScript single-page app. It renders a configurable set
of rods, lets users move beads with pointer interactions, displays the live
decimal value, and provides a clear control to reset the abacus to zero.

## Current Features

- Soroban rod model: one heaven bead worth `5` and four earth beads worth `1`.
- Pure value logic for per-rod digits and full abacus decimal totals.
- Interactive bead movement with click, mouse, and touch pointer handling.
- Snap behavior that keeps earth beads grouped toward or away from the
  reckoning bar.
- Responsive abacus frame that scales for desktop and small touch screens.
- Sky-blue visual theme using `sky-400` active beads with matching sky-toned
  frame, borders, focus rings, and shadows.
- Live formatted value display and disabled/enabled clear button state.
- Static production build suitable for root, subdirectory, or bare directory
  hosting.

## Architecture

- `src/models/abacus.ts` owns shared bead, rod, and abacus types plus rod digit
  calculation.
- `src/lib/abacusState.ts` owns pure state creation and bead mutation helpers.
- `src/lib/value.ts` derives the full decimal value from rod digits.
- `src/hooks/useAbacusState.ts` lifts abacus state into React.
- `src/components/` contains the presentational and interactive UI pieces:
  `Bead`, `Rod`, `Abacus`, `ValueDisplay`, and `ResetButton`.
- `src/config.ts` reads Vite environment configuration and clamps the rod count
  to supported limits.

## Conventions

- Development and preview servers listen on `0.0.0.0:8080`.
- `VITE_ABACUS_ROD_COUNT` controls the default rod count and must be an integer
  from `1` through `15`.
- Vite is configured with `base: './'` so built assets use relative URLs.
- Tailwind CSS provides styling; ESLint and Prettier enforce code quality and
  formatting.
- Unit tests use Vitest. Browser end-to-end tests use Playwright.

## Common Commands

- `npm run dev` starts the development server.
- `npm run test` runs unit tests.
- `npm run e2e` runs the Playwright browser test.
- `npm run lint` runs ESLint.
- `npm run format:check` checks formatting.
- `npm run build` creates the static `dist/` production build.
- `npm run serve:dist` serves the production build on `0.0.0.0:8080`.
