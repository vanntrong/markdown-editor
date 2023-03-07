import { IconButton } from '@chakra-ui/react'
import styled from 'styled-components'

export const MarkdownCodeBlock = styled.code`
  display: inline-block;
  padding: 2px 4px;
  background-color: #2f2f2f;
  border-radius: 5px;
  font-size: inherit;
  color: white;

  & > pre {
    padding: 5px 15px !important;
  }

  &.code {
    display: flex;
    width: 100%;
    margin: 5px;
    position: relative;

    &:hover button {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const MarkdownCodeButton = styled(IconButton)`
  opacity: 0;
  visibility: hidden;
  background-color: #9e9e9e !important;
  border: 1px solid transparent !important;
  position: absolute !important;
  top: 5px !important;
  right: 5px !important;

  &.copied {
    border-color: green !important;
  }
`
