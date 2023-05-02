/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { AddBlock, Editor } from "./Block"
import { initBlocks } from "./consts"
import { Block, BlockType } from "./types"
import { css, ThemeProvider } from "@emotion/react"
import { theme, useTheme, Theme } from "components/theme"

const styles = {
    main: (t: Theme) =>
        css({
            backgroundColor: t.colors.background,
            padding: 10,
            color: t.colors.font,
            width: 800,
            margin: "auto",
        }),
}

const _MRTE = () => {
    const t = useTheme()
    const [blocks, setBlocks] = useState<Block[]>([])

    const addBlock = (type: BlockType) => {
        setBlocks([...blocks, { ...initBlocks[type], uuid: uuidv4() }])
    }

    const updateBlock = (updatedBlock: Block) => {
        const blocksCopy = [...blocks]
        const idx = blocks.findIndex(i => i.uuid === updatedBlock.uuid)
        blocksCopy[idx] = updatedBlock
        setBlocks(blocksCopy)
    }

    const removeBlock = (uuid: string) => {
        setBlocks(blocks.filter(i => i.uuid !== uuid))
    }

    return (
        <div css={styles.main(t)}>
            {blocks.map(i => (
                <Editor
                    key={i.uuid}
                    data={i}
                    update={updateBlock}
                    remove={() => removeBlock(i.uuid)}
                />
            ))}
            <AddBlock onAdd={addBlock} />
        </div>
    )
}

const MRTE = () => (
    <ThemeProvider theme={theme}>
        <_MRTE />
    </ThemeProvider>
)

export default MRTE
