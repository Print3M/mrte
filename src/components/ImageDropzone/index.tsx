/** @jsxImportSource @emotion/react */
import { IconUpload } from "@tabler/icons-react"
import { useTheme } from "components/theme"
import { FC, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import styles from "./styles"
import { fileToString } from "./utils"

enum DropState {
    Enter = "ENTER",
    Leave = "LEAVE",
    Over = "OVER",
}

interface Props {
    setImage: (img: string | null) => void
    image?: string | null
}

const ImageDropzone: FC<Props> = ({ setImage, image }) => {
    const t = useTheme()
    const [state, setState] = useState(DropState.Leave)
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: { "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] },
        maxFiles: 1,
        onDragEnter: () => setState(DropState.Enter),
        onDragLeave: () => setState(DropState.Leave),
        onDragOver: () => setState(DropState.Over),
    })

    useEffect(() => {
        const loadImage = async () => {
            if (!acceptedFiles.length) return

            try {
                setImage(await fileToString(acceptedFiles[0]))
            } catch (e) {
                setImage(null)
                console.error(e)
            }

            setState(DropState.Leave)
        }

        loadImage()
    }, [acceptedFiles])

    return (
        <button css={styles.dropzone(t)} {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            {image && (
                <div className={`image-container ${state === DropState.Over ? "upload" : ""}`}>
                    <img src={image} />
                    <IconUpload className="icon" size={120} stroke={2.5} />
                </div>
            )}
            {!image && (
                <div className="text">
                    {state === DropState.Over ? (
                        <IconUpload />
                    ) : (
                        "Drop an image (jpg, png) or click to select one."
                    )}
                </div>
            )}
        </button>
    )
}

export default ImageDropzone
