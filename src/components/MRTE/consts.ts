import { NIL as NIL_UUID } from "uuid"
import { BlockType, InitBlocks } from "./types"

export const initBlocks: InitBlocks = {
    [BlockType.Text]: {
        text: "",
        uuid: NIL_UUID,
        type: BlockType.Text,
    },
    [BlockType.Image]: {
        uuid: NIL_UUID,
        type: BlockType.Image,
        caption: '',
        image: null,
    },
    [BlockType.Frame]: {
        uuid: NIL_UUID,
        type: BlockType.Frame,
        text: "",
    },
}
