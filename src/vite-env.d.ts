/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_CREATE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  VITE_ORGANIZATION_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  VITE_SPECIALISTS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
