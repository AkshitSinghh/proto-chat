/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        primary: "#003049ff",
        secondary: "#4ecdc4",
        accent: "#171717",
        primaryV2: "#ff6b6b",
        secondaryV2: "#ffe66d",
        textSecondary: "#090304",
        formBackground: "#262626",
        icon: "#cbcbcb",
        bottonBarAnimation: "#c7c7c78c",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Noto Sans Lepcha",
        body: "Noto Sans Lepcha",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
