/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ABACUS_ROD_COUNT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
