module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        danger: "#E30613",
        secondary: "#828282",
        dark: "#616161",
        warning: "#F2994A",
        success: "#219653",
        light: "#ECEFF3",
        lightred: '#FFA0A1',
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        footer:
          "0.5114px -15.9918px 80px rgba(0, 0, 0, 0.07), 0.10228px -3.19836px 13px rgba(0, 0, 0, 0.035)",
        card:
          "0px 0px 80px rgba(0, 0, 0, 0.07), 0px 0px 13px rgba(0, 0, 0, 0.035)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
