import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Link,
    
} from '@chakra-ui/react'
import Friend from './Friend/Friend'



function Friends() {
    return (
        <Table variant="simple" mb='50'>
            <Thead>
                <Tr>
                <Th pl='4'>
                    <Link>Friend's</Link>
                    <Link pl='120px'>+add</Link></Th>
                </Tr>
            </Thead>
            <Tbody>
               <Friend name='Khachatur Hovsepyan'/>
               <Friend name='Steven De Ryke'/>
               
            </Tbody>
            
        </Table>
    )
}

export default Friends
