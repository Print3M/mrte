import { useTheme as useEmotionTheme } from "@emotion/react"

export const theme = {
    colors: {
        red: "#e03131",
        background: "#141517",
        font: "white",
        input: '#373a40'
    },
    borderRadius: '4px'
}

export type Theme = typeof theme

export const useTheme = () => useEmotionTheme() as Theme
