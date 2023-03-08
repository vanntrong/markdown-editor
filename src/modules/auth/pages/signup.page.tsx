/* eslint-disable @typescript-eslint/no-misused-promises */
import { ROUTES } from '@/constants'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import * as yup from 'yup'

import useSignUp from '../services/useSignUp'

const SignUpSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().default(''),
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
})

export type SignUpInput = yup.InferType<typeof SignUpSchema>

const SignUp = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const { signUp } = useSignUp()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpInput>({
    resolver: yupResolver(SignUpSchema)
  })

  const onSubmit: SubmitHandler<SignUpInput> = (data) => {
    // login(data)
    signUp(data)
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired isInvalid={!!errors.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" {...register('firstName')} />
                    <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isInvalid={!!errors.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" {...register('lastName')} />
                    <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => {
                        setShowPassword((showPassword) => !showPassword)
                      }}
                    >
                      {showPassword ? <BiShow /> : <BiHide />}
                    </Button>
                  </InputRightElement>
                  <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <RouterLink to={ROUTES.login}>
                    <Link color={'blue.400'}>Login</Link>
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUp
