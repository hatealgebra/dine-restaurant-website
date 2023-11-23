/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        beaver: "hsla(26, 22%, 51%, 1)",
        codGray: "hsla(0, 0%, 7%, 1)",
        mirage: "hsla(236, 30%, 13%, 1)",
        ebonyClay: "hsla(219, 21%, 18%, 1)",
        shuttleGray: "hsla(219, 14%, 42%, 1)",
        gold: "hsla(26, 22%, 51%, 1)",
      },
      fontSize: {
        sm: [
          "1.6rem",
          {
            lineHeight: "2",
            fontWeight: "400",
            letterSpacing: "2px",
          },
        ],
        base: [
          "2rem",
          {
            lineHeight: "1.50",
            fontWeight: "400",
          },
        ],
        lg: [
          "1.7rem",
          {
            fontWeight: "600",
            lineHeight: "0.94",
          },
        ],
        xl: [
          "1.7rem",
          {
            lineHeight: "1.64",
            letterSpacing: "2.5px",
            fontWeight: "600",
          },
        ],
        "2xl": [
          "2rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "4.8rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
      },
    },
    boxShadow: {
      drop: "0px 75px 100px -50px rgba(56, 66, 85, 0.50)",
      smallerDrop: "0px 15px 25px 0px rgba(56, 66, 85, 0.25)",
    },
  },
  plugins: [],
};
