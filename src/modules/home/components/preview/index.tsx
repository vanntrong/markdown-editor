import { Heading, Link } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'
// support for math
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import MarkdownCode from '../markdown-code'
import { MarkdownBlockQuote, MarkdownList, MarkdownOrderedList, PreviewWrapper } from './styles'

interface IPreviewProps {
  content: string
}

const getHeading = ({ node, children }: any): JSX.Element => {
  const size: Record<string, '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'> = {
    h1: '2xl',
    h2: 'xl',
    h3: 'lg',
    h4: 'md',
    h5: 'sm',
    h6: 'xs'
  }
  return (
    <Heading
      as={node.tagName}
      size={size[node.tagName]}
      css={{
        margin: '20px 0',
        paddingBottom: '20px',
        borderBottom: '1px solid #ccc'
      }}
    >
      {children}
    </Heading>
  )
}

const getCodeBlock = ({ children, className, ...props }: any): JSX.Element => {
  const match = /language-(\w+)/.exec(className || '')
  console.log({ props })
  return (
    <MarkdownCode language={match ? match[1] : 'text'} className={className}>
      {String(children).replace(/\n$/, '')}
    </MarkdownCode>
  )
}

const getLink = ({ href, children }: any): JSX.Element => {
  return (
    <Link isExternal href={href} color="teal.500">
      {children}
    </Link>
  )
}

const getList = ({ children, node }: any): JSX.Element => {
  const element: Record<string, JSX.Element> = {
    ul: <MarkdownList>{children}</MarkdownList>,
    ol: <MarkdownOrderedList>{children}</MarkdownOrderedList>
  }

  return element[node.tagName]
}

const getBlockQuote = ({ children }: any): JSX.Element => {
  return <MarkdownBlockQuote>{children}</MarkdownBlockQuote>
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
