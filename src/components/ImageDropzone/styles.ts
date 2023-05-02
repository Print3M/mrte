import { css } from "@emotion/react"
import { Theme } from "components/theme"

export default {
    dropzone: (t: Theme) =>
        css({
            display: "block",
            width: "100%",
            backgroundColor: t.colors.input,
            borderRadius: t.borderRadius,
            padding: 4,

            ".image-container": {
                position: "relative",

                img: {
                    border: "1px solid black",
                    marginBottom: -4,
                },

                ".icon": {
                    opacity: 0,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                },
            },

            ":hover, .upload": {
                opacity: 0.9,

                img: {
                    filter: "brightness(50%)",
                },

                ".icon": {
                    opacity: 1,
                },
            },

            "div.text": {
                display: "flex",
                justifyContent: "center",
                padding: 10,
            },
        }),
}
