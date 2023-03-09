import { ROUTES } from '@/constants'
import { useAuthContext } from '@/contexts/auth.context'
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface INavbarMenuProps {
  onLogout?: () => void
}

const NavbarMenu: FC<INavbarMenuProps> = ({ onLogout }): JSX.Element => {
  const { user } = useAuthContext()
  return (
    <>
      {user ? (
        <Menu>
          <MenuButton>
            <Avatar name={user.full_name ?? ''} src={user.avatar_url ?? ''} size={'sm'} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link to={ROUTES.login}>
          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
        </Link>
      )}
    </>
  )
}

export default NavbarMenu
