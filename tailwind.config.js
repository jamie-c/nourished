import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nourishedco/ui/dist/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                "transat-light": [
                    '"Transat Light"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-light-obl": [
                    '"Transat Light Oblique"',
                    ...defaultTheme.fontFamily.sans,
                ],
                transat: [
                    '"Transat Standard"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-obl": [
                    '"Transat Standard Oblique"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-med": [
                    '"Transat Medium"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-med-obl": [
                    '"Transat Medium Oblique"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-bold": [
                    '"Transat Bold"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-bold-obl": [
                    '"Transat Bold Oblique"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-black": [
                    '"Transat Black"',
                    ...defaultTheme.fontFamily.sans,
                ],
                "transat-black-obl": [
                    '"Transat Black Oblique"',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            height: {
                "screen-1/2": "50vh",
                "screen-1/3": "33.333333vh",
                "screen-2/3": "66.666667vh",
            },
            transitionProperty: {
                height: "height",
                width: "width",
                spacing: "margin, padding",
            },
            borderWidth: {
                3: "3px",
            },
            colors: {
                bluegreen: {
                    100: "#cceae6",
                    200: "#99d5cd",
                    300: "#66c0b3",
                    400: "#33ab9a",
                    500: "#009681",
                    600: "#007867",
                    700: "#005a4d",
                    800: "#003c34",
                    900: "#001e1a",
                },
                lightgreen: {
                    100: "#f3f7ed",
                    200: "#e7efdb",
                    300: "#dce6c8",
                    400: "#d0deb6",
                    500: "#c4d6a4",
                    600: "#9dab83",
                    700: "#768062",
                    800: "#4e5642",
                    900: "#272b21",
                },
                darkgreen: {
                    100: "#ccdcd9",
                    200: "#99b8b3",
                    300: "#66958e",
                    400: "#337168",
                    500: "#004e42",
                    600: "#003e35",
                    700: "#002f28",
                    800: "#001f1a",
                    900: "#00100d",
                },
                brightgreen: {
                    100: "#e4ebdb",
                    200: "#c9d8b7",
                    300: "#aec492",
                    400: "#93b16e",
                    500: "#789d4a",
                    600: "#607e3b",
                    700: "#485e2c",
                    800: "#303f1e",
                    900: "#181f0f",
                },
                brightred: {
                    100: "#fedad3",
                    200: "#fdb5a8",
                    300: "#fb8f7c",
                    400: "#fa6a51",
                    500: "#f94525",
                    600: "#c7371e",
                    700: "#952916",
                    800: "#641c0f",
                    900: "#320e07",
                },
                maroon: {
                    100: "#e7d2d9",
                    200: "#d0a5b2",
                    300: "#b8778c",
                    400: "#a14a65",
                    500: "#891d3f",
                    600: "#6e1732",
                    700: "#521126",
                    800: "#370c19",
                    900: "#1b060d",
                },
            },
        },
        plugins: [],
    },
}
