import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { theme } from './configs/theme.config'
import { AppProvider } from './contexts/app.context'
import { AuthProvider } from './contexts/auth.context'
import './index.css'
import { ToastContainer } from './utils'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
)
