import MarkdownCode from '@/modules/home/components/markdown-code'
import { MarkdownBlockQuote, MarkdownList, MarkdownOrderedList } from '@/modules/home/components/preview/styles'
import { Heading, Link } from '@chakra-ui/react'

export const getHeading = ({ node, children }: any): JSX.Element => {
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

export const getCodeBlock = ({ children, className, ...props }: any): JSX.Element => {
  const match = /language-(\w+)/.exec(className || '')
  console.log({ props })
  return (
    <MarkdownCode language={match ? match[1] : 'text'} className={className}>
      {String(children).replace(/\n$/, '')}
    </MarkdownCode>
  )
}

export const getLink = ({ href, children }: any): JSX.Element => {
  return (
    <Link isExternal href={href} color="teal.500">
      {children}
    </Link>
  )
}

export const getList = ({ children, node }: any): JSX.Element => {
  const element: Record<string, JSX.Element> = {
    ul: <MarkdownList>{children}</MarkdownList>,
    ol: <MarkdownOrderedList>{children}</MarkdownOrderedList>
  }

  return element[node.tagName]
}

export const getBlockQuote = ({ children }: any): JSX.Element => {
  return <MarkdownBlockQuote>{children}</MarkdownBlockQuote>
}
