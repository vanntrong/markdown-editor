import Navbar from '@/components/navbar'
import { MARKDOWN_FILE_SUFFIX } from '@/constants'
import { downloadFile, uploadFileText } from '@/utils'
import { type ChangeEvent, useCallback, useRef, useState } from 'react'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-synchronize'

import Editor from '../components/editor'
import Preview from '../components/preview'
import { HomeWrapper } from '../styles/home.styles'

const Home = (): JSX.Element => {
  const [markdownContent, setMarkdownContent] = useState('')
  const [undoStack, setUndoStack] = useState<string[]>([])
  const [redoStack, setRedoStack] = useState<string[]>([])
  const [filename, setFilename] = useState('Untitled')
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const uploadFileRef = useRef<HTMLInputElement>(null)

  const handleChangeContent = useCallback(
    (newContent: string) => {
      console.log({ editorRef })
      const selectionStart = editorRef.current?.selectionStart
      const selectionEnd = editorRef.current?.selectionEnd
      if (selectionStart === undefined || selectionEnd === undefined || selectionStart === selectionEnd) {
        setMarkdownContent((prev) => prev + newContent)
        return
      }

      const selectedText = markdownContent.substring(selectionStart, selectionEnd)
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

  const handleUpload = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (!file) {
      return
    }

    uploadFileText(file)
      .then(({ filename, content }) => {
        setFilename(filename)
        setMarkdownContent(content)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  return (
    <div>
      <Navbar
        changeContent={handleChangeContent}
        isDisableUndo={undoStack.length === 0}
        isDisableRedo={redoStack.length === 0}
        undo={() => {
          setRedoStack((prev) => [...prev, markdownContent])
          setMarkdownContent(undoStack.pop() ?? '')
        }}
        redo={() => {
          setUndoStack((prev) => [...prev, markdownContent])
          setMarkdownContent(redoStack.pop() ?? '')
        }}
        filename={filename}
        onChangeFilename={(val) => {
          setFilename(val)
        }}
        onDownload={() => {
          downloadFile(filename, markdownContent, MARKDOWN_FILE_SUFFIX)
        }}
        onUpload={() => {
          uploadFileRef.current?.click()
        }}
      />
      <input type="file" hidden ref={uploadFileRef} onChange={handleUpload} />

      <ScrollSync>
        <HomeWrapper>
          <ScrollSyncPane innerRef={editorRef}>
            <Editor
              content={markdownContent}
              onChange={(e) => {
                setUndoStack((prev) => [...prev, markdownContent])

                setMarkdownContent(e.target.value)
              }}
            />
          </ScrollSyncPane>
          <ScrollSyncPane innerRef={previewRef}>
            <Preview content={markdownContent} />
          </ScrollSyncPane>
        </HomeWrapper>
      </ScrollSync>
    </div>
  )
}

export default Home
