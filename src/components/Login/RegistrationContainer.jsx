import {
    Flex,
    Input,
    Button,
    Text,
    Heading,
    FormControl,
 
  } from '@chakra-ui/react'



const RegistrationContainer = () => {
    return (
      <Flex w='100%' direction='column' justify='center' align='center' p='3rem'>
        <Heading mb='25px' color='brand.700'>
          Register
        </Heading>
        
        <Text mb='5px' fontSize='14px' fontWeight={300}>
          create new account
        </Text>
        <form action="register" justify='center' align='center' >
            <FormControl isRequired >
                <Input bg='brand.200' mb='1rem' type="naam" placeholder='Naam' />
                <Input bg='brand.200' mb='1rem' type="voornaam" placeholder='Voornaam' />
                <Input bg='brand.200' mb='1rem' type="email" placeholder='Email' />
                <Input bg='brand.200' mb='1rem' type="password" placeholder='Password' />
                <Input bg='brand.200' mb='1.5rem' type="bankrekening" placeholder='Bankrekening' />
                
                <Button color='brand.600' bg='brand.100' w='200px' borderRadius='100px' boxShadow='lg' _hover={{bg : 'brand.100', boxShadow : 'dark-lg'}}  type="submit">
                REGISTER
                </Button>
            </FormControl>
        </form>
      </Flex>
    )
  }

export default RegistrationContainer;