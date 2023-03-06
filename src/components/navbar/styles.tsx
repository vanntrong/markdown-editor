import { Editable, IconButton } from '@chakra-ui/react'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2c2c;
  padding: 5px 10px;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

export const NavbarItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const NavbarItem = styled(IconButton)`
  background-color: transparent !important;
  &:hover {
    background-color: #3c3c3c !important;
  }
  &:disabled {
    background-color: #616161 !important;
    cursor: not-allowed !important;
  }
`

export const InlineEditFileName = styled(Editable)`
  color: gray;
  font-size: 20px;
`
