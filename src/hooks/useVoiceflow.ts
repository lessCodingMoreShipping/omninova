import { useEffect } from "react";

// Extend Window interface to include Voiceflow
declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: VoiceflowConfig) => void;
      };
    };
  }
}

interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
  voice: {
    url: string;
  };
}

export const useVoiceflow = () => {
  useEffect(() => {
    const voiceflowConfig: VoiceflowConfig = {
      verify: { projectID: import.meta.env.VITE_VOICEFLOW_PROJECT_ID },
      url: import.meta.env.VITE_VOICEFLOW_RUNTIME_URL,
      versionID: "production",
      voice: {
        url: import.meta.env.VITE_VOICEFLOW_VOICE_URL,
      },
    };

    const loadVoiceflow = () => {
      if (window.voiceflow?.chat) {
        window.voiceflow.chat.load(voiceflowConfig);
      }
    };

    // Check if Voiceflow script is already loaded
    if (window.voiceflow) {
      loadVoiceflow();
    } else {
      // If not loaded, create script dynamically
      const script = document.createElement("script");
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.type = "text/javascript";
      script.onload = loadVoiceflow;
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Potential future cleanup logic
    };
  }, []);
};
