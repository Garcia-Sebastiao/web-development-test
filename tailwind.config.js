/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: "poppinsLight",
        poppins: "poppins",
        poppinsMedium: "poppinsMedium",
        poppinsSemiBold: "poppinsSemiBold",
        poppinsBold: "poppinsBold",
      },
      colors: {
        cover: "#232345",
        "variant-1": "#ffffff10",
        "variant-2": "#00000020",
        "variant-3": "#ffffff30",
      },
      screens: {
        xs: "320px",
        sm: "414px",
        md: "640px",
        lg: "1000px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
