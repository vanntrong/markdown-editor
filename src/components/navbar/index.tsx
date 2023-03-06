import { EditableInput, EditablePreview } from '@chakra-ui/react'
import { type FC, useCallback, useMemo } from 'react'
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

interface INavbarProps {
  content: string
  changeContent: (content: string) => void
}

enum ToolbarItem {
  folder,
  undo,
  redo,
  bold,
  italic,
  heading,
  strikethrough,
  code,
  underscore_list,
  numbered_list,
  check_list,
  quote,
  link,
  table
}

const getContentFromToolbarItem = (type: ToolbarItem, content: string): string => {
  const obj: Record<any, string> = {
    [ToolbarItem.folder]: '',
    [ToolbarItem.undo]: '',
    [ToolbarItem.redo]: '',
    [ToolbarItem.bold]: `**${content}**`,
    [ToolbarItem.italic]: `*${content}*`,
    [ToolbarItem.heading]: `# ${content}`,
    [ToolbarItem.strikethrough]: `~~${content}~~`,
    [ToolbarItem.code]: `\`\`\`${content}\`\`\``,
    [ToolbarItem.underscore_list]: `- ${content}`,
    [ToolbarItem.numbered_list]: `1. ${content}`,
    [ToolbarItem.check_list]: `- [ ] ${content}`,
    [ToolbarItem.quote]: `> ${content}`,
    [ToolbarItem.link]: `[${content}](https://example.com)`,
    [ToolbarItem.table]:
      '| Header | Header | Header |\n| ------ | ------ | ------ |\n| Cell | Cell | Cell |\n| Cell | Cell | Cell |'
  }

  return obj[type]
}

const Navbar: FC<INavbarProps> = ({ content, changeContent }): JSX.Element => {
  const handleChange = useCallback(
    (type: ToolbarItem): void => {
      const selection = document.getSelection()?.toString()
      const newContent = getContentFromToolbarItem(
        type,
        selection && selection?.length > 0 ? selection : ToolbarItem[type]
      )
      changeContent(newContent)
    },
    [changeContent]
  )

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
          handleChange(ToolbarItem.bold)
        }
      },
      {
        key: 'italic',
        icon: <BiItalic color="gray" size={24} />,
        ariaLabel: 'Italic',
        onClick: () => {
          handleChange(ToolbarItem.italic)
        }
      },
      {
        key: 'heading',
        icon: <BiHeading color="gray" size={24} />,
        ariaLabel: 'Heading',
        onClick: () => {
          handleChange(ToolbarItem.heading)
        }
      },
      {
        key: 'strikethrough',
        icon: <BiStrikethrough color="gray" size={24} />,
        ariaLabel: 'Strikethrough',
        onClick: () => {
          handleChange(ToolbarItem.strikethrough)
        }
      },
      {
        key: 'code',
        icon: <BiCodeBlock color="gray" size={24} />,
        ariaLabel: 'Code',
        onClick: () => {
          handleChange(ToolbarItem.code)
        }
      },
      {
        key: 'underscore-list',
        icon: <BiListUl color="gray" size={24} />,
        ariaLabel: 'Underscore list',
        onClick: () => {
          handleChange(ToolbarItem.underscore_list)
        }
      },
      {
        key: 'numbered-list',
        icon: <BiListOl color="gray" size={24} />,
        ariaLabel: 'Numbered list',
        onClick: () => {
          handleChange(ToolbarItem.numbered_list)
        }
      },
      {
        key: 'check-list',
        icon: <BiListCheck color="gray" size={24} />,
        ariaLabel: 'Check list',
        onClick: () => {
          handleChange(ToolbarItem.check_list)
        }
      },
      {
        key: 'quote',
        icon: <BsQuote color="gray" size={24} />,
        ariaLabel: 'Quote',
        onClick: () => {
          handleChange(ToolbarItem.quote)
        }
      },
      {
        key: 'table',
        icon: <BiTable color="gray" size={24} />,
        ariaLabel: 'Table',
        onClick: () => {
          handleChange(ToolbarItem.table)
        }
      },
      {
        key: 'link',
        icon: <BsLink45Deg color="gray" size={24} />,
        ariaLabel: 'Link',
        onClick: () => {
          handleChange(ToolbarItem.link)
        }
      }
    ],
    [handleChange]
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
