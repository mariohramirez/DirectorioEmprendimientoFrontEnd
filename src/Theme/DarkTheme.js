const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#026937",
        },
        secondary: {
            main: "#026937",
        },
        black: {
            main: "#242B2E"
        },
        background: {
            main: "#E8EEF2",
            default: "#E8EEF2",
            paper: "#E8EEF2"
        },
        textColor: {
            main: "#111111"
        }
    }
})