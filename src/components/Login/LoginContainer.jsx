import {
    Flex,
    Input,
    Button,
    Text,
    Heading,
    Image,
    FormControl,
  } from '@chakra-ui/react'


// Containers
const LoginContainer = () => {
    return (
      <Flex w='100%' direction='column' justify='center' align='center' p='3rem'>
        <Image
            boxSize="100px"
            objectFit="cover"
            src="https://images-na.ssl-images-amazon.com/images/I/41zvVU9ZhhL.jpg"
            alt="money manager logo"
            rounded="50px"
          />
        <Heading mb='40px' mt="38px" color='brand.700'>
          Login
        </Heading>
        
        <Text mb='10px' fontSize='14px' fontWeight={300}>
          enter your account
        </Text>
        <form action="login" justify='center' align='center'>
          <FormControl isRequired>
            <Input bg='brand.200' mb='1rem' type="email" placeholder='Email' />
            <Input bg='brand.200' mb='1.5rem' type="password" placeholder='Password' />
            
            <Button color='brand.600' bg='brand.100'  w='200px' borderRadius='100px' boxShadow='lg' _hover={{bg : 'brand.100', boxShadow : 'dark-lg'}}  type="submit">
              LOG IN
            </Button>
          </FormControl>
          </form>
      </Flex>
    )
  }

  export default LoginContainer;