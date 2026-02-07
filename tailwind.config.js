/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#345C39",
        secondary: "#F6B01D",
        tertiary: "#142629",

        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontSize: {
        title: "60px",
        secondaryTitle: "24px",
        paragraph: "21px",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontFamily: {
        heading: ["Avenir Next", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        sans: ["Avenir Next", "Roboto", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
      fontWeight: {
        title: "900",
        secondaryTitle: "700",
        paragraph: "500",
      },
    },
  },
};
