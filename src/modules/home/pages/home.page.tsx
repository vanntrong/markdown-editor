import Navbar from '@/components/navbar'
import { useState } from 'react'

import Editor from '../components/editor'
import Preview from '../components/preview'
import { HomeWrapper } from '../styles/home.styles'

const Home = (): JSX.Element => {
  const [markdownContent, setMarkdownContent] = useState('')

  return (
    <div>
      <Navbar />

      <HomeWrapper>
        <Editor
          content={markdownContent}
          onChange={(e) => {
            setMarkdownContent(e.target.value)
          }}
        />
        <Preview content={markdownContent} />
      </HomeWrapper>
    </div>
  )
}

export default Home
