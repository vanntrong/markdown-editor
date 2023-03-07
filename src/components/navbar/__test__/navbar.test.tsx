import { render, screen } from '@testing-library/react'

import Navbar from '..'

describe('Navbar', () => {
  it('should render toolbar items correctly', () => {
    render(
      <Navbar
        changeContent={async (va) => {
          console.log(va)
        }}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const folderButton = screen.getByTitle('Folder')
    expect(folderButton).toBeInTheDocument()

    const undoButton = screen.getByTitle('Undo')
    expect(undoButton).toBeInTheDocument()

    const redoButton = screen.getByTitle('Redo')
    expect(redoButton).toBeInTheDocument()

    const boldButton = screen.getByTitle('Bold')
    expect(boldButton).toBeInTheDocument()

    const italicButton = screen.getByTitle('Italic')
    expect(italicButton).toBeInTheDocument()

    const headingButton = screen.getByTitle('Heading')
    expect(headingButton).toBeInTheDocument()

    const strikethroughButton = screen.getByTitle('Strikethrough')
    expect(strikethroughButton).toBeInTheDocument()

    const linkButton = screen.getByTitle('Link')
    expect(linkButton).toBeInTheDocument()

    const codeButton = screen.getByTitle('Code')
    expect(codeButton).toBeInTheDocument()

    const quoteButton = screen.getByTitle('Quote')
    expect(quoteButton).toBeInTheDocument()

    const underscoreListButton = screen.getByTitle('Underscore list')
    expect(underscoreListButton).toBeInTheDocument()

    const numberListButton = screen.getByTitle('Numbered list')
    expect(numberListButton).toBeInTheDocument()

    const checkboxListButton = screen.getByTitle('Check list')
    expect(checkboxListButton).toBeInTheDocument()

    const tableButton = screen.getByTitle('Table')
    expect(tableButton).toBeInTheDocument()
  })
})

describe('Navbar Undo Button', () => {
  it('undo button should disabled when undoStack is empty', () => {
    render(
      <Navbar
        changeContent={async (va) => {
          console.log(va)
        }}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const undoButton = screen.getByTitle('Undo')
    expect(undoButton).toBeDisabled()
  })

  it('undo button should not disabled when undoStack is not empty', () => {
    render(
      <Navbar
        changeContent={async (va) => {
          console.log(va)
        }}
        isDisableUndo={false}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const undoButton = screen.getByTitle('Undo')
    expect(undoButton).not.toBeDisabled()
  })
})

describe('Navbar Redo Button', () => {
  it('redo button should disabled when redoStack is empty', () => {
    render(
      <Navbar
        changeContent={async (va) => {
          console.log(va)
        }}
        isDisableRedo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const redoButton = screen.getByTitle('Redo')
    expect(redoButton).toBeDisabled()
  })

  it('redo button should not disabled when redoStack is not empty', () => {
    render(
      <Navbar
        changeContent={async (va) => {
          console.log(va)
        }}
        isDisableRedo={false}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const redoButton = screen.getByTitle('Redo')
    expect(redoButton).not.toBeDisabled()
  })
})

describe('Navbar Bold Button', () => {
  it('should call changeContent when click bold button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const boldButton = screen.getByTitle('Bold')
    boldButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Italic Button', () => {
  it('should call changeContent when click italic button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const italicButton = screen.getByTitle('Italic')
    italicButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Heading Button', () => {
  it('should call changeContent when click heading button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const headingButton = screen.getByTitle('Heading')
    headingButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Strikethrough Button', () => {
  it('should call changeContent when click strikethrough button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const strikethroughButton = screen.getByTitle('Strikethrough')
    strikethroughButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Link Button', () => {
  it('should call changeContent when click link button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const linkButton = screen.getByTitle('Link')
    linkButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Code Button', () => {
  it('should call changeContent when click code button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const codeButton = screen.getByTitle('Code')
    codeButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Quote Button', () => {
  it('should call changeContent when click quote button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const quoteButton = screen.getByTitle('Quote')
    quoteButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Underscore List Button', () => {
  it('should call changeContent when click underscore list button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const underscoreListButton = screen.getByTitle('Underscore list')
    underscoreListButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Number List Button', () => {
  it('should call changeContent when click number list button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const numberListButton = screen.getByTitle('Numbered list')
    numberListButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Checkbox List Button', () => {
  it('should call changeContent when click checkbox list button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const checkboxListButton = screen.getByTitle('Check list')
    checkboxListButton.click()

    expect(handleChange).toBeCalled()
  })
})

describe('Navbar Table Button', () => {
  it('should call changeContent when click table button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        isDisableUndo={true}
        undo={() => {
          console.log('Undo')
        }}
        redo={() => {
          console.log('Redo')
        }}
      />
    )

    const tableButton = screen.getByTitle('Table')
    tableButton.click()

    expect(handleChange).toBeCalled()
  })
})
