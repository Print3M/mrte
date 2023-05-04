import { css } from "@emotion/react"
import { Theme } from "../../theme"

export default {
    blockContainer: (t: Theme) =>
        css({
            "div.inner": {
                display: "flex",
                justifyContent: "space-between",
            },

            "div.editor": {
                maxWidth: "calc(100% - 47px)",
                flexGrow: 1,
                padding: "0 4px",
            },

            "div.divider": {
                height: 2,
                width: "100%",
                backgroundColor: t.colors.input,
                margin: "10px 0 10px",
            },

            ".ProseMirror": {
                padding: 8,
                backgroundColor: t.colors.input,
                borderRadius: t.borderRadius,

                "p.is-editor-empty:first-of-type::before": {
                    content: "attr(data-placeholder)",
                    float: "left",
                    color: "#adb5bd",
                    pointerEvents: "none",
                    height: 0,
                },
            },

            "button.remove": {
                borderRadius: t.borderRadius,
                backgroundColor: t.colors.red,
                textAlign: "center",
                alignSelf: "start",
                width: 35,
                height: 35,
                color: "white",

                ":hover": {
                    opacity: 0.9,
                },
            },
        }),
    addBlock: (t: Theme) =>
        css({
            padding: 12,
            display: "flex",
            justifyContent: "center",
            border: `2px dotted ${t.colors.input}`,
            gap: 23,

            button: {
                width: 80,
                height: 50,
                textAlign: "center",
                borderRadius: t.borderRadius,
                backgroundColor: t.colors.input,

                ":hover": {
                    opacity: 0.9,
                },
            },
        }),
    frame: (t: Theme) =>
        css({
            padding: 8,
            border: `1px solid ${t.colors.input}`,
            fontFamily: "monospace",
            fontSize: 13,
        }),
}
