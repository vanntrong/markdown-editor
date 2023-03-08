/* eslint-disable @typescript-eslint/no-misused-promises */
import { OAuthButtonGroup } from '@/components/o-auth-button-group'
import { Box, Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'

// import { Link as RouterLink } from 'react-router-dom'
import useLoginOAuth from '../services/useLogin'

const Login = (): JSX.Element => {
  const { login } = useLoginOAuth()

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  type="submit"
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account yet?{' '}
                  <RouterLink to={ROUTES['sign-up']}>
                    <Link color={'blue.400'}>SignUp</Link>
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </form> */}
          <OAuthButtonGroup
            handleLogin={(provider) => {
              login(provider)
            }}
          />
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login
