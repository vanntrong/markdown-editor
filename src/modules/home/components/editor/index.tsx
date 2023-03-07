import { forwardRef } from 'react'

import { EditorTextArea, EditorWrapper } from './styles'

interface IEditorProps {
  content: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Editor = forwardRef<HTMLTextAreaElement, IEditorProps>(({ content, onChange }, ref): JSX.Element => {
  return (
    <EditorWrapper>
      <EditorTextArea value={content} onChange={onChange} ref={ref} />
    </EditorWrapper>
  )
})

Editor.displayName = 'Editor'

export default Editor
