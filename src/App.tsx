import { APP_CONFIG } from './config';
import { Bead } from './components/Bead';

function App() {
  return (
    <main
      className="flex min-h-screen items-center px-8 py-12"
      aria-labelledby="app-title"
    >
      <section className="mx-auto w-full max-w-2xl">
        <p className="mb-3 text-sm font-bold tracking-wider text-orange-800 uppercase">
          Issue #3
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
          aria-label="Bead component preview"
          className="mt-8 flex h-20 items-center gap-8"
        >
          <Bead active={false} ariaLabel="Inactive earth bead" kind="earth" />
          <Bead active ariaLabel="Active earth bead" kind="earth" />
        </div>
      </section>
    </main>
  );
}

export default App;
