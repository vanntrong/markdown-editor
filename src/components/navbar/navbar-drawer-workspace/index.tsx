/* eslint-disable @typescript-eslint/naming-convention */
import { useAppContext } from '@/contexts/app.context'
import { useAuthContext } from '@/contexts/auth.context'
import { type Workspace as IWorkspace } from '@/modules/workspace/interfaces/workspace.interface'
import useCreateWorkspace from '@/modules/workspace/services/useCreateWorkspace'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader } from '@chakra-ui/modal'
import { Button, Card, Input, Stack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { type FC, useState } from 'react'

interface INavbarDrawerWorkspaceProps {
  isOpen: boolean
  onClose: () => void
  workspaces: IWorkspace[]
}

interface IWorkspaceProps {
  name: string
  created_at: string | null
  isActive?: boolean
  onSelect?: () => void
}

const NavbarDrawerWorkspace: FC<INavbarDrawerWorkspaceProps> = ({ isOpen, onClose, workspaces }): JSX.Element => {
  const { createWorkspace } = useCreateWorkspace()
  const { user } = useAuthContext()
  const { currentWorkspace, setCurrentWorkspace } = useAppContext()
  const [isCreateNewWorkspace, setIsCreateNewWorkspace] = useState(false)
  const [newWorkspaceName, setNewWorkspaceName] = useState('')

  const handleBlur = (): void => {
    if (newWorkspaceName.trim().length !== 0 && user) {
      createWorkspace(newWorkspaceName, user.id)
    }

    setIsCreateNewWorkspace(false)
  }
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your workspace</DrawerHeader>

        <DrawerBody>
          <Stack justifyContent={'flex-end'} direction="row" marginBottom={2}>
            {isCreateNewWorkspace ? (
              <Input
                placeholder="New workspace name"
                required
                autoFocus
                onBlur={handleBlur}
                value={newWorkspaceName}
                onChange={(e) => {
                  setNewWorkspaceName(e.target.value)
                }}
              />
            ) : (
              <Button
                colorScheme="teal"
                width={'fit-content'}
                onClick={() => {
                  setIsCreateNewWorkspace(true)
                }}
              >
                Create new workspace
              </Button>
            )}
          </Stack>
          <Stack>
            {workspaces.map((workspace: IWorkspace) => (
              <Workspace
                key={workspace.id}
                name={workspace.name}
                created_at={workspace.created_at}
                isActive={currentWorkspace?.id === workspace.id}
                onSelect={() => {
                  setCurrentWorkspace?.(workspace)
                }}
              />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

const Workspace: FC<IWorkspaceProps> = ({ name, created_at, isActive, onSelect }): JSX.Element => {
  return (
    <Card
      padding={5}
      flexDirection="row"
      justifyContent={'space-between'}
      cursor={'pointer'}
      backgroundColor={isActive ? 'teal.600' : 'white'}
      color={isActive ? 'white' : 'black'}
      _hover={{
        backgroundColor: 'teal.600',
        color: 'white'
      }}
      onClick={onSelect}
    >
      <Text>{name}</Text>
      <Text fontSize={'xs'}>{dayjs(created_at).format('DD/MM/YYYY HH:mm:ss')}</Text>
    </Card>
  )
}

export default NavbarDrawerWorkspace
