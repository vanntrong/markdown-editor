import Navbar from '@/components/navbar'
import { useCallback, useRef, useState } from 'react'

import Editor from '../components/editor'
import Preview from '../components/preview'
import { HomeWrapper } from '../styles/home.styles'

const Home = (): JSX.Element => {
  const [markdownContent, setMarkdownContent] = useState('')
  const editorRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = useCallback(
    (newContent: string) => {
      const selectionStart = editorRef.current?.selectionStart
      const selectionEnd = editorRef.current?.selectionEnd
      if (selectionStart === undefined || selectionEnd === undefined || selectionStart === selectionEnd) {
        setMarkdownContent((prev) => prev + newContent)
        return
      }

      const selectedText = editorRef.current?.value.substring(selectionStart, selectionEnd)
      if (!selectedText) {
        setMarkdownContent((prev) => prev + newContent)
        return
      }
      const draft = markdownContent
      const newContentWithSelection =
        draft.substring(0, selectionStart) + newContent + markdownContent.substring(selectionEnd)
      setMarkdownContent(newContentWithSelection)
    },
    [markdownContent]
  )

  return (
    <div>
      <Navbar content={markdownContent} changeContent={handleChange} />

      <HomeWrapper>
        <Editor
          ref={editorRef}
          content={markdownContent}
          onChange={(e) => {
            setMarkdownContent(e.target.value)
          }}
        />
        <Preview content={markdownContent} />
      </HomeWrapper>
    </div>
  )
}

export default Home
