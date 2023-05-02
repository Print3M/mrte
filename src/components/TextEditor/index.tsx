import Placeholder from "@tiptap/extension-placeholder"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { FC, useEffect, useState } from "react"

// PRAWDOPODOBNIE LEPSZY BĘDZIE PO PROSTU MARKDOWN EDITOR
// https://uiwjs.github.io/react-md-editor/

const TextEditor: FC<{
    content: string
    setContent: (v: string) => void
    disabled?: boolean
    placeholder: string
}> = ({ content, setContent, disabled, placeholder }) => {
    /*
        Wrapper for strongly imperative TipTap API. It emulates
        state-controlled input. 
        
        NOTE:
        It's not official solution but for now I don't see better
        way to use external state to control TipTap editor.
    */
    const [_content, _setContent] = useState(content)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            if (!disabled) {
                _setContent(editor.getHTML())
            }
        },
    })

    useEffect(() => {
        // It waits for changing content when editor is in use.
        // It's necessary due to weird interference between multiple editors.
        if (editor?.isFocused && content !== _content && !disabled) {
            setContent(_content)
        }
    }, [_content, content, setContent, disabled])

    useEffect(() => {
        // It waits for changing content when editor is not in use.
        if (editor && !editor.isFocused) {
            editor.commands.setContent(content)
        }
    })

    return (
        <div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default TextEditor
