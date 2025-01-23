import defaultConfig from "@wboot/tailwind-config";

export default {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}"
  ],
};
