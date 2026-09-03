/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#002a3c",
        "primary-container": "#00415a",
        "on-primary": "#ffffff",
        "on-primary-container": "#7cadca",
        "primary-fixed": "#c4e7ff",
        "primary-fixed-dim": "#9ccdeb",
        "on-primary-fixed": "#001e2c",
        "on-primary-fixed-variant": "#144c65",

        "secondary": "#835500",
        "secondary-container": "#feae2c",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#6b4500",
        "secondary-fixed": "#ffddb4",
        "secondary-fixed-dim": "#ffb955",
        "on-secondary-fixed": "#291800",
        "on-secondary-fixed-variant": "#633f00",

        "tertiary": "#002a3a",
        "tertiary-container": "#1a4052",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#87abc0",
        "tertiary-fixed": "#c2e8fe",
        "tertiary-fixed-dim": "#a7cce1",
        "on-tertiary-fixed": "#001e2b",
        "on-tertiary-fixed-variant": "#264b5d",

        "surface": "#f6faff",
        "surface-dim": "#d2dbe4",
        "surface-bright": "#f6faff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#ecf5fe",
        "surface-container": "#e6eff8",
        "surface-container-high": "#e0e9f2",
        "surface-container-highest": "#dbe4ed",
        "surface-variant": "#dbe4ed",
        "surface-tint": "#32647e",

        "on-surface": "#141d23",
        "on-surface-variant": "#41484d",
        "inverse-surface": "#293138",
        "inverse-on-surface": "#e9f2fb",
        "inverse-primary": "#9ccdeb",

        "outline": "#71787d",
        "outline-variant": "#c1c7cd",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        "background": "#f6faff",
        "on-background": "#141d23",
      },
      fontFamily: {
        headline: ["'Work Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        display: ["'Work Sans'", "sans-serif"],
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      spacing: {
        'base': '8px',
        'gutter': '24px',
        'container-max': '1280px',
        'margin-mobile': '16px',
        'margin-desktop': '40px',
      },
      boxShadow: {
        'ambient': '0 2px 8px 0 rgba(0, 42, 60, 0.06)',
        'ambient-lg': '0 8px 24px -4px rgba(0, 42, 60, 0.08)',
      }
    },
  },
  plugins: [],
};
