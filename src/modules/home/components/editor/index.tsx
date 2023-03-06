import { type FC } from 'react'

import { EditorTextArea, EditorWrapper } from './styles'

interface IEditorProps {
  content: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Editor: FC<IEditorProps> = ({ content, onChange }): JSX.Element => {
  return (
    <EditorWrapper>
      <EditorTextArea value={content} onChange={onChange} />
    </EditorWrapper>
  )
}

export default Editor
