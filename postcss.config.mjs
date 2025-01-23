import postcssConfig from "@wboot/tailwind-config/postcss";
import tailwindConfig from "./tailwind.config.mjs";
export default {
  ...postcssConfig,
  plugins: {
    ...postcssConfig.plugins,
    tailwindcss: { config: tailwindConfig },
  },
};
