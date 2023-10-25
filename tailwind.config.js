/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono,monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
        hero: "calc(100dvh - 4.5rem)",
      },
      backgroundImage: {
        BgImage: "url('/public/images/BgImage.jpg')",
      },
    },
  },
  plugins: [],
};
