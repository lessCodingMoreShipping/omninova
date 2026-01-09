/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOICEFLOW_PROJECT_ID: string;
  readonly VITE_VOICEFLOW_RUNTIME_URL: string;
  readonly VITE_VOICEFLOW_VOICE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
