import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Link,
   
    
} from '@chakra-ui/react'
import React from 'react'
import Group from './Group/Group'
import { NavLink } from 'react-router-dom'
import AddGroup from './AddGroup'




function Groups(props) {
    // console.log(props.state)

    if (!props.state || props.state.length === 0) return (
        <>
            <p>create your first group.</p>
            <AddGroup />
        </>
    )
  
    return (
        <Table variant="simple" mb='50px' >
            <Thead>
                <Tr>
                <Th display='flex' alignItems='center' justifyContent='space-between'>
                    <Link ml="-4" as={NavLink} to={props.name}>{props.name}</Link>
                    <AddGroup />
                </Th>
                </Tr>
            </Thead>
            <Tbody>

            {props.state.map(group => 
            <Group key={group[0]} id={group[0]} name={group[1] } />
            
             )}
               
             
            </Tbody>
            
        </Table>
    )
}







export default Groups
