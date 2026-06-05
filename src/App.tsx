import { APP_CONFIG } from './config';
import { Abacus } from './components/Abacus';
import { useAbacusState } from './hooks/useAbacusState';

function App() {
  const { rods } = useAbacusState(APP_CONFIG.rodCount);

  return (
    <main
      className="flex min-h-screen items-center px-8 py-12"
      aria-labelledby="app-title"
    >
      <section className="mx-auto w-full max-w-2xl">
        <p className="mb-3 text-sm font-bold tracking-wider text-orange-800 uppercase">
          Issue #8
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
        <div aria-label="Abacus frame preview" className="mt-8 max-w-full">
          <Abacus rodCount={APP_CONFIG.rodCount} rods={rods} />
        </div>
      </section>
    </main>
  );
}

export default App;
