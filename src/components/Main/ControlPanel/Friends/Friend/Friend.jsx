import {Avatar, Link, Td, Tr,} from '@chakra-ui/react'

function Friend(props) {
    return (
        <Tr>
           <Td pl='4' py='1' fontSize='14px' >
               <Avatar mr='3' w='25px' h='25px'/>
               <Link>{props.name}</Link>
           </Td>
           
        </Tr>
    )
}

export default Friend
