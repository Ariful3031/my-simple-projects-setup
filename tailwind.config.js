
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#E6F9FF",
                    100: "#CCF2FF",
                    200: "#99E5FF",
                    300: "#66D9FF",
                    400: "#33CCFF",
                    500: "#22C55E",
                    600: "#0094CC",
                    700: "#007199",
                    800: "#004D66",
                    900: "#002A33",
                },
            },
            // fontFamily: {
            //     montserrat: ["Montserrat", "sans-serif"],
            // },
        },
    },
    plugins: [
        daisyui,
        // scrollbarHide,
    ],
};
