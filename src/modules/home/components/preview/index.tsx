import { getBlockQuote, getCodeBlock, getHeading, getLink, getList } from '@/utils'
import 'katex/dist/katex.min.css'
import { type FC } from 'react'
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

const Preview: FC<IPreviewProps> = ({ content }): JSX.Element => {
  return (
    <PreviewWrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {content}
      </ReactMarkdown>
    </PreviewWrapper>
  )
}

export default Preview
