import { EditableInput, EditablePreview } from '@chakra-ui/react'
import { useMemo } from 'react'
import {
  BiCodeBlock,
  BiHeading,
  BiItalic,
  BiListCheck,
  BiListOl,
  BiListUl,
  BiStrikethrough,
  BiTable
} from 'react-icons/bi'
import { BsFolderFill, BsLink45Deg, BsQuote, BsTypeBold } from 'react-icons/bs'
import { IoMdRedo, IoMdUndo } from 'react-icons/io'

import { InlineEditFileName, NavbarContainer, NavbarItem, NavbarItemsWrapper } from './styles'

interface INavbarItem {
  key: string
  icon: JSX.Element
  ariaLabel: string
  onClick?: () => void
}

const Navbar = (): JSX.Element => {
  const navbarItemsLeft: INavbarItem[] = useMemo(
    () => [
      {
        key: 'folder',
        icon: <BsFolderFill color="gray" size={24} />,
        ariaLabel: 'Folder',
        onClick: () => {
          console.log('Folder')
        }
      },
      {
        key: 'undo',
        icon: <IoMdUndo color="gray" size={24} />,
        ariaLabel: 'Undo',
        onClick: () => {
          console.log('Undo')
        }
      },
      {
        key: 'redo',
        icon: <IoMdRedo color="gray" size={24} />,
        ariaLabel: 'Redo',
        onClick: () => {
          console.log('Redo')
        }
      },
      {
        key: 'bold',
        icon: <BsTypeBold color="gray" size={24} />,
        ariaLabel: 'Bold',
        onClick: () => {
          console.log('Bold')
        }
      },
      {
        key: 'italic',
        icon: <BiItalic color="gray" size={24} />,
        ariaLabel: 'Italic',
        onClick: () => {
          console.log('Italic')
        }
      },
      {
        key: 'heading',
        icon: <BiHeading color="gray" size={24} />,
        ariaLabel: 'Heading',
        onClick: () => {
          console.log('Heading')
        }
      },
      {
        key: 'strikethrough',
        icon: <BiStrikethrough color="gray" size={24} />,
        ariaLabel: 'Strikethrough',
        onClick: () => {
          console.log('Strikethrough')
        }
      },
      {
        key: 'code',
        icon: <BiCodeBlock color="gray" size={24} />,
        ariaLabel: 'Code',
        onClick: () => {
          console.log('Code')
        }
      },
      {
        key: 'underscore-list',
        icon: <BiListUl color="gray" size={24} />,
        ariaLabel: 'Underscore list',
        onClick: () => {
          console.log('Underscore list')
        }
      },
      {
        key: 'numbered-list',
        icon: <BiListOl color="gray" size={24} />,
        ariaLabel: 'Numbered list',
        onClick: () => {
          console.log('Numbered list')
        }
      },
      {
        key: 'check-list',
        icon: <BiListCheck color="gray" size={24} />,
        ariaLabel: 'Check list',
        onClick: () => {
          console.log('Check list')
        }
      },
      {
        key: 'quote',
        icon: <BsQuote color="gray" size={24} />,
        ariaLabel: 'Quote',
        onClick: () => {
          console.log('Quote')
        }
      },
      {
        key: 'table',
        icon: <BiTable color="gray" size={24} />,
        ariaLabel: 'Table',
        onClick: () => {
          console.log('Table')
        }
      },
      {
        key: 'link',
        icon: <BsLink45Deg color="gray" size={24} />,
        ariaLabel: 'Link',
        onClick: () => {
          console.log('Link')
        }
      }
    ],
    []
  )

  return (
    <NavbarContainer>
      <NavbarItemsWrapper>
        {navbarItemsLeft.map(({ ariaLabel, icon, key, ...props }) => (
          <NavbarItem aria-label={ariaLabel} icon={icon} key={key} {...props} title={ariaLabel} />
        ))}
      </NavbarItemsWrapper>

      <NavbarItemsWrapper>
        <InlineEditFileName defaultValue="Default file name">
          <EditablePreview />
          <EditableInput />
        </InlineEditFileName>
      </NavbarItemsWrapper>
    </NavbarContainer>
  )
}

export default Navbar
