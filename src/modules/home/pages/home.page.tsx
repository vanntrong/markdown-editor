import { toast } from '@/utils'
import React from 'react'

const Home = (): JSX.Element => {
  return (
    <button
      onClick={() =>
        toast({
          title: 'Error',
          description: 'ashjdiahsdih',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      }
    >
      Show Toast
    </button>
  )
}

export default Home
