import { Textarea } from '@chakra-ui/react'
import styled from 'styled-components'

export const EditorWrapper = styled.div`
  flex: 1;
  padding: 0px 60px;
`
export const EditorTextArea = styled(Textarea)`
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  outline: none !important;
  &:focus {
    border: none !important;
    outline: none !important;
    background-color: transparent !important;
  }
`
