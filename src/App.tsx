import { APP_CONFIG } from './config';
import { Rod } from './components/Rod';
import type { RodState } from './models/abacus';

const PREVIEW_ROD: RodState = {
  heaven: true,
  earth: [true, true, false, false],
};

function App() {
  return (
    <main
      className="flex min-h-screen items-center px-8 py-12"
      aria-labelledby="app-title"
    >
      <section className="mx-auto w-full max-w-2xl">
        <p className="mb-3 text-sm font-bold tracking-wider text-orange-800 uppercase">
          Issue #6
        </p>
        <h1
          id="app-title"
          className="text-4xl leading-none font-bold text-gray-950 sm:text-6xl lg:text-7xl"
        >
          Abacus app shell
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-700">
          The Vite React application is initialized and ready for the abacus
          model and components in the next issues. The default abacus is
          configured for {APP_CONFIG.rodCount} rods.
        </p>
        <div
          aria-label="Rod component preview"
          className="mt-8 flex items-center"
        >
          <Rod label="Preview rod" rod={PREVIEW_ROD} />
        </div>
      </section>
    </main>
  );
}

export default App;
