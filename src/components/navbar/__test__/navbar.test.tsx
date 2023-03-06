import { render, screen } from '@testing-library/react'

import Navbar from '..'

describe('Navbar', () => {
  it('should render toolbar items correctly', () => {
    render(
      <Navbar
        changeContent={(va) => {
          console.log(va)
        }}
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        changeContent={(va) => {
          console.log(va)
        }}
        undoStack={[]}
        undo={() => {
          console.log('Undo')
        }}
      />
    )

    const undoButton = screen.getByTitle('Undo')
    expect(undoButton).toBeDisabled()
  })

  it('undo button should not disabled when undoStack is not empty', () => {
    render(
      <Navbar
        changeContent={(va) => {
          console.log(va)
        }}
        undoStack={['test']}
        undo={() => {
          console.log('Undo')
        }}
      />
    )

    const undoButton = screen.getByTitle('Undo')
    expect(undoButton).not.toBeDisabled()
  })
})

describe('Navbar Bold Button', () => {
  it('should call changeContent when click bold button', () => {
    const handleChange = jest.fn()

    render(
      <Navbar
        changeContent={handleChange}
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
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
        undoStack={[]}
        undo={() => {
          console.log('Undo')
        }}
      />
    )

    const tableButton = screen.getByTitle('Table')
    tableButton.click()

    expect(handleChange).toBeCalled()
  })
})
