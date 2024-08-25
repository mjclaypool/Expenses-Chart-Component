/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"]
      },
      colors: {
        "primary-soft-red": "hsl(10, 79%, 65%)",
        "primary-cyan": "hsl(186, 34%, 60%)",
        "neutral-dark-brown": "hsl(25, 47%, 15%)",
        "neutral-med-brown": "hsl(28, 10%, 53%)",
        "neutral-cream": "hsl(27, 66%, 92%)",
        "neutral-pale-orange": "hsl(33, 100%, 98%)",
      }
    },
  },
  plugins: [],
}

