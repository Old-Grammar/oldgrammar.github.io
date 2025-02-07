import type { Config } from "tailwindcss"
import type { CustomThemeConfig } from "tailwindcss/types/config"
import formsPlugin from "@tailwindcss/forms"
import typographyPlugin from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

// https://uicolors.app/create

const theme: Partial<CustomThemeConfig> = {
  colors: {
    primary: {
      "50": "#fff2f1",
      "100": "#ffe3e0",
      "200": "#ffccc6",
      "300": "#ffa99f",
      "400": "#ff7767",
      "500": "#fb4d38",
      "600": "#ea3924", // base OG color
      "700": "#c42411",
      "800": "#a22112",
      "900": "#862216",
      "950": "#490d06",
    },
    accent: {
      "50": "#f0fafb",
      "100": "#d8eff5",
      "200": "#b5dfec",
      "300": "#82c7de",
      "400": "#48a7c8",
      "500": "#2c8bae",
      "600": "#256989", // Base color
      "700": "#265c78",
      "800": "#274d63",
      "900": "#244255",
      "950": "#132939",
    },
  },
  backgroundImage: {
    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    "gradient-conic":
      "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  },
  fontFamily: {
    sans: ["museo-sans-rounded", ...defaultTheme.fontFamily.sans],
    serif: ["museo-slab", ...defaultTheme.fontFamily.serif]
  },
};

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/decorators.tsx"
  ],
  theme: {
    extend: {
      ...theme
    }
  },
  plugins: [formsPlugin, typographyPlugin]
}
export default config
