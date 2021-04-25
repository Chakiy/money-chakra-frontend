import { Box, Avatar, Flex, Text, Divider,  Button} from '@chakra-ui/react';



import Groups from './Groups/Groups';


function ControlPanel(props) {
    // console.log(props.state)
    return (
        <Box borderRadius='10px 0 0 10px' bg='brand.400' w='30%'>
            <Flex justify="center" align='center' direction='column'>
                <Avatar mt='10' mb='10px' src="https://bit.ly/broken-link" />
                <Text  color='white'> Denes Van Roy</Text>
            </Flex>
            <Divider my='10' />
            <Flex h='65vh' justify='space-between' align='center' direction='column'>
                <Groups name='Groups' state={props.state}/>
                <Button >Log uit</Button>
            </Flex>
            
        </Box>
    )
}


export default ControlPanel
