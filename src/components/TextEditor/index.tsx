/** @jsxImportSource @emotion/react */
import "bytemd/dist/index.css"
import { Editor } from "@bytemd/react"
import { FC } from "react"
import { useTheme } from "components/theme"
import styles from "./styles"
import { IconMarkdown } from "@tabler/icons-react"

interface Props {
    content: string
    setContent: (v: string) => void
    placeholder: string
}

const TextEditor: FC<Props> = ({ placeholder, content, setContent }) => {
    const t = useTheme()

    return (
        <div css={styles.editor(t)}>
            <Editor value={content} onChange={setContent} placeholder={placeholder} />
            <IconMarkdown className="md-icon" />
        </div>
    )
}

export default TextEditor
