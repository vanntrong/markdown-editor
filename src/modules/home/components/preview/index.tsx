import { getBlockQuote, getCodeBlock, getHeading, getLink, getList } from '@/utils'
import 'katex/dist/katex.min.css'
import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
// support for math
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { PreviewWrapper } from './styles'

interface IPreviewProps {
  content: string
}

const components = {
  h1: getHeading,
  h2: getHeading,
  h3: getHeading,
  h4: getHeading,
  h5: getHeading,
  h6: getHeading,
  code: getCodeBlock,
  a: getLink,
  ul: getList,
  ol: getList,
  blockquote: getBlockQuote
}

const Preview = forwardRef<HTMLDivElement, IPreviewProps>(({ content }, ref): JSX.Element => {
  return (
    <PreviewWrapper ref={ref}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {content}
      </ReactMarkdown>
    </PreviewWrapper>
  )
})

Preview.displayName = 'Preview'

export default Preview
