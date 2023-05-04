import { css } from "@emotion/react"
import { colors, Theme } from "components/theme"

const PADDING = "8px"

export default {
    editor: (t: Theme) =>
        css({
            position: "relative",

            ".md-icon": {
                position: "absolute",
                bottom: 0,
                right: 3,
                opacity: 0.8,
            },

            ".bytemd": {
                backgroundColor: t.colors.input,
                color: colors[t.colorSchema].font,
                border: 0,
                borderRadius: t.borderRadius,
                overflow: "hidden",
                height: "auto",
            },

            ".bytemd-toolbar": {
                display: "none",
            },

            ".CodeMirror-line, .CodeMirror-line-like": {
                padding: `0 ${PADDING} !important`,
            },

            ".CodeMirror-lines": {
                backgroundColor: t.colors.input,
                padding: `${PADDING} 0 !important`,
                color: colors[t.colorSchema].font,
            },

            ".CodeMirror-cursor": {
                border: `1px solid ${colors[t.colorSchema].font}`,
            },

            ".bytemd-status": {
                border: 0,
            },

            ".bytemd-status-right": {
                display: "none",
            },

            ".CodeMirror-placeholder": {
                padding: `0 ${PADDING} !important`,
            },

            // ========= Code highlighting =========

            // List
            "span.cm-variable-2": {
                color: colors[t.colorSchema].list,
            },

            // Code
            "span.cm-comment": {
                color: colors[t.colorSchema].code,
            },

            // Link
            "span.cm-link": {
                color: colors[t.colorSchema].link,
            },

            // Url
            "span.cm-url": {
                color: colors[t.colorSchema].url,
            },

            // Quote
            "span.cm-quote": {
                color: colors[t.colorSchema].quote,
            },
        }),
}
