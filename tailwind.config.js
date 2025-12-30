/** tailwind.config.js **/
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        fraunces: ["Fraunces", "serif"]
      },
      borderRadius: {
        blob: "23% 77% 70% 30% / 53% 52% 48% 47%",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          /* Hide scrollbar for Chrome, Safari and Opera */
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          ".no-scrollbar": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
        });
      },
    ],
  },
};
