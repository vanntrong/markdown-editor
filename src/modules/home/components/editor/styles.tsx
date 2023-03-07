import { type TextareaProps } from '@chakra-ui/react'
import styled from 'styled-components'

export const EditorWrapper = styled.div`
  flex: 1;
  padding: 0px 20px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const EditorTextArea = styled.textarea<TextareaProps>`
  padding-top: 10px;
  resize: none;
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
