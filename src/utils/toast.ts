import { createStandaloneToast } from '@chakra-ui/react'

export const { ToastContainer, toast } = createStandaloneToast()

export const toastError = (message = 'Something went wrong'): void => {
  toast({
    title: 'Error',
    description: message,
    status: 'error',
    duration: 5000,
    isClosable: true
  })
}
