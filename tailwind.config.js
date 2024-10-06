/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "hsl(45, 59%, 64%)",
        brownShade: "#3d281b",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle,rgba(2,0,36,0.194) 0%, rgba(69,63,29,1) 100%)",
      },
    },
  },
  plugins: [],
};
