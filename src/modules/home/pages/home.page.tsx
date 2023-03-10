import Navbar from '@/components/navbar'
import { MARKDOWN_FILE_SUFFIX } from '@/constants'
import { useAppContext } from '@/contexts/app.context'
import useUpdateWorkspace from '@/modules/workspace/services/useUpdateWorkspace'
import { downloadFile, toastError, uploadFileText } from '@/utils'
import { type ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-synchronize'

import Editor from '../components/editor'
import Preview from '../components/preview'
import { HomeWrapper } from '../styles/home.styles'

const Home = (): JSX.Element => {
  const { currentWorkspace } = useAppContext()
  const [markdownContent, setMarkdownContent] = useState('')
  const [filename, setFilename] = useState('Untitled')
  const [undoStack, setUndoStack] = useState<string[]>([])
  const [redoStack, setRedoStack] = useState<string[]>([])

  const editorRef = useRef<HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const uploadFileRef = useRef<HTMLInputElement>(null)

  const { updateWorkspace } = useUpdateWorkspace()

  const handleChangeContent = useCallback(
    async (newContent: string, rawContentWithoutMarkdown: string) => {
      const selectionStart = editorRef.current?.selectionStart
      const selectionEnd = editorRef.current?.selectionEnd
      if (selectionStart === undefined || selectionEnd === undefined || selectionStart === selectionEnd) {
        setMarkdownContent((prev) => prev + newContent)
        // select this new content
        let sizeDiffBetweenMarkdownAndRaw: number
        if (newContent.includes('#')) {
          // for heading # we don't need to divide by 2
          sizeDiffBetweenMarkdownAndRaw = newContent.length - rawContentWithoutMarkdown.length
        } else {
          sizeDiffBetweenMarkdownAndRaw = Math.floor((newContent.length - rawContentWithoutMarkdown.length) / 2) // /2 because of the markdown syntax like: **bold**
        }

        const newSelectionStart = markdownContent.length + sizeDiffBetweenMarkdownAndRaw

        let newSelectionEnd: number
        if (newContent.includes('#')) {
          newSelectionEnd = markdownContent.length + newContent.length
        } else {
          newSelectionEnd = markdownContent.length + newContent.length - sizeDiffBetweenMarkdownAndRaw
        }

        // use promise to make sure that the selection is set after the focus
        new Promise((resolve) => {
          editorRef.current?.focus()
          resolve(true)
        }).then(() => {
          editorRef.current?.setSelectionRange(newSelectionStart, newSelectionEnd)
        })

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
        toastError(e.message)
      })
  }, [])

  useEffect(() => {
    if (currentWorkspace) {
      setMarkdownContent(currentWorkspace.content ?? '')
      setFilename(currentWorkspace.name)
      return
    }
    setMarkdownContent(localStorage.getItem('markdownContent') ?? '')
    setFilename(localStorage.getItem('filename') ?? 'Untitled')
  }, [currentWorkspace])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWorkspace) {
        updateWorkspace({
          ...currentWorkspace,
          content: markdownContent,
          name: filename
        })
      } else {
        localStorage.setItem('markdownContent', markdownContent)
        localStorage.setItem('filename', filename)
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [markdownContent, filename])

  const undo = (): void => {
    setRedoStack((prev) => [...prev, markdownContent])
    setMarkdownContent(undoStack.pop() ?? '')
  }

  const redo = (): void => {
    setUndoStack((prev) => [...prev, markdownContent])
    setMarkdownContent(redoStack.pop() ?? '')
  }

  return (
    <div>
      <Navbar
        changeContent={handleChangeContent}
        isDisableUndo={undoStack.length === 0}
        isDisableRedo={redoStack.length === 0}
        undo={undo}
        redo={redo}
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
