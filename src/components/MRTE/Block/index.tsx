/** @jsxImportSource @emotion/react */
import { FC } from "react"
import { Block, BlockType, FrameBlock, isFrameBlock, isImageBlock, isTextBlock } from "../types"
import RichTextEditor from "components/TextEditor"
import styles from "./styles"
import { useTheme } from "components/theme"
import { IconCode, IconPhotoPlus, IconTrashX, IconTypography } from "@tabler/icons-react"
import ImageDropzone from "components/ImageDropzone"

const BlockContainer: FC<{ children: JSX.Element | JSX.Element[]; remove: () => void }> = ({
    children,
    remove,
}) => {
    const t = useTheme()

    return (
        <div css={styles.blockContainer(t)}>
            <div className="inner">
                <div className="editor">{children}</div>
                <button type="button" className="remove" onClick={remove}>
                    <IconTrashX />
                </button>
            </div>
            <div className="divider" />
        </div>
    )
}

export const AddBlock: FC<{ onAdd: (t: BlockType) => void }> = ({ onAdd }) => {
    const t = useTheme()

    return (
        <div css={styles.addBlock(t)}>
            <button type="button" onClick={() => onAdd(BlockType.Text)} title="Paragraph">
                <IconTypography />
            </button>
            <button type="button" onClick={() => onAdd(BlockType.Image)} title="Image">
                <IconPhotoPlus />
            </button>
            <button type="button" onClick={() => onAdd(BlockType.Frame)} title="Frame">
                <IconCode />
            </button>
        </div>
    )
}

interface EditorProps {
    data: Block
    update: (data: Block) => void
    remove: () => void
}

export const Editor: FC<EditorProps> = ({ data, update, remove }) => {
    const t = useTheme()

    if (isTextBlock(data)) {
        return (
            <BlockContainer remove={remove}>
                <RichTextEditor
                    content={data.text}
                    setContent={c => update({ ...data, text: c })}
                    placeholder="Paragraph..."
                />
            </BlockContainer>
        )
    }

    if (isImageBlock(data)) {
        return (
            <BlockContainer remove={remove}>
                <RichTextEditor
                    content={data.caption}
                    setContent={c => update({ ...data, caption: c })}
                    placeholder="Image caption..."
                />
                <div css={{ height: 2 }} />
                <ImageDropzone image={data.image} setImage={v => update({ ...data, image: v })} />
            </BlockContainer>
        )
    }

    if (isFrameBlock(data)) {
        const x = data as FrameBlock

        return (
            <BlockContainer remove={remove}>
                <div css={styles.frame(t)}>
                    <RichTextEditor
                        content={x.text}
                        setContent={c => update({ ...x, text: c })}
                        placeholder="Frame content..."
                    />
                </div>
            </BlockContainer>
        )
    }

    return <></>
}
