export enum BlockType {
    Text = "TEXT",
    Image = "IMAGE",
    Frame = "FRAME",
}

interface ProtoBlock {
    uuid: string
    type: BlockType
}

export interface TextBlock extends ProtoBlock {
    text: string
}

export interface ImageBlock extends ProtoBlock {
    image: string | null
    caption: string
}

export type FrameBlock = TextBlock

export type Block = TextBlock | ImageBlock | FrameBlock

export interface InitBlocks {
    [BlockType.Text]: TextBlock
    [BlockType.Image]: ImageBlock
    [BlockType.Frame]: FrameBlock
}

/*
    ============ TYPE GUARDS ==========
*/
export const isTextBlock = (block: Block): block is TextBlock => {
    return block.type === BlockType.Text
}

export const isImageBlock = (block: Block): block is ImageBlock => {
    return block.type === BlockType.Image
}

export const isFrameBlock = (block: Block): block is FrameBlock => {
    return block.type === BlockType.Frame
}
