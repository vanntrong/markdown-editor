import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { theme } from './configs/theme.config'
import { AppProvider } from './contexts/app.context'
import { AuthProvider } from './contexts/auth.context'
import './index.css'
import { ToastContainer } from './utils'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppProvider>
      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
)
