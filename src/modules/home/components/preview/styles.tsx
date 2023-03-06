import styled from 'styled-components'

export const PreviewWrapper = styled.div`
  flex: 1;
  padding: 10px 60px;
  background-color: #f5f5f5;
  overflow: auto;
`

export const MarkdownList = styled.ul`
  & > li {
    margin: 5px 0;
  }

  & > li > ul {
    margin: 0 20px !important;
  }
`

export const MarkdownOrderedList = styled.ol`
  & > li {
    margin: 5px 0;
  }

  & > li > ol {
    margin: 0 20px !important;
  }
`

export const MarkdownBlockQuote = styled.blockquote`
  margin: 20px 0;
  padding: 10px 20px;
  border-left: 5px solid #ccc;
`
