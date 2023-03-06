import { useState } from 'react'
import { BiCopy } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { MarkdownCodeBlock, MarkdownCodeButton } from './styles'

const MarkdownCode = ({ language, children, className }: any): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false)
  const text = String(children).replace(/\n$/, '')

  SyntaxHighlighter.registerLanguage('jsx', jsx)

  const handleClick = (): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(() => {})
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return (
    <MarkdownCodeBlock className={`${className as string} ${language === 'text' ? 'text' : 'code'}`}>
      {language === 'text' ? (
        <span>{children}</span>
      ) : (
        <SyntaxHighlighter language={language} style={materialDark}>
          {children}
        </SyntaxHighlighter>
      )}

      {language !== 'text' && (
        <MarkdownCodeButton
          aria-label="copy"
          className={`${isCopied ? 'copied' : ''}`}
          icon={isCopied ? <BsCheckCircle color="green" /> : <BiCopy />}
          onClick={handleClick}
        />
      )}
    </MarkdownCodeBlock>
  )
}
export default MarkdownCode
