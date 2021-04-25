import React from 'react'
import {Text, 
    Flex,
   
    Tr,
    Td,
    Icon,
   } from '@chakra-ui/react'

   import { MdGroupWork } from "react-icons/md"

function GroupDetails(props) {
    // console.log(props.details)
    // const [...first, ...second] = props.details
    // const a = [ ...second,...first]
    return (
        <>
            <Tr>
                    <Td  p='0' pl='3'>{   }</Td>
                    
                    <Td p='0'><Icon as={MdGroupWork} w={8} h={8} color="red.500" /></Td>
                    
                    <Td p='0'>{  }</Td>
                    <Td>
                        <Flex direction='column' >
                            <Text fontSize='8px' m='-0.5'>you paid</Text>
                            <Text fontSize='10px' m='-0.5'>€{  }</Text>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex direction='column' >
                            <Text fontSize='8px' m='-0.5'  >Detail`s</Text>
                            <Text fontSize='10px' m='-0.5'  >{   }</Text>
                        </Flex>
                    </Td>
                    </Tr>
        </>
    )
}

export default GroupDetails
