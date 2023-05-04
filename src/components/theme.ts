import { useTheme as useEmotionTheme } from "@emotion/react"

export const colors = {
    light: {
        font: "black",
        list: "",
        code: "",
        link: "",
        url: "",
        quote: "",
    },
    dark: {
        font: "white",
        list: "#36d7b7",
        code: "#00aa55",
        link: "#19b5fe",
        url: "#dda0dd",
        quote: "#e26a6a",
    },
}

export interface Theme {
    colors: {
        red: string
        background: string
        input: string
    }
    colorSchema: "dark" | "light"
    borderRadius: number
}

export const theme: Theme = {
    colors: {
        red: "#e03131",
        background: "#141517",
        input: "#373a40",
    },
    colorSchema: "dark",
    borderRadius: 4,
}

export const useTheme = () => useEmotionTheme() as Theme
