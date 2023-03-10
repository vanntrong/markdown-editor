import { type LoginProvider } from '@/modules/auth/services/useLogin'
import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { type FC } from 'react'

import { FacebookIcon, GitHubIcon, GoogleIcon } from '../provider-icon'

interface OAuthButtonGroupProps {
  handleLogin: (provider: LoginProvider) => void
}

export const OAuthButtonGroup: FC<OAuthButtonGroupProps> = ({ handleLogin }): JSX.Element => {
  const providers = [
    {
      name: 'Google',
      icon: <GoogleIcon />,
      onClick: () => {
        handleLogin('google')
      }
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      onClick: () => {
        handleLogin('facebook')
      }
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      onClick: () => {
        handleLogin('github')
      }
    }
  ]
  return (
    <ButtonGroup variant={'outline'} spacing="4" width="full">
      {providers.map(({ name, icon, onClick }) => (
        <Button key={name} width="full" onClick={onClick} gap={4}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  )
}
