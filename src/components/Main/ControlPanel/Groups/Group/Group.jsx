import {Link, Td, Tr,} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import AddUser from './AddUser'


function Group(props) {
    // console.log(props)
    return (
        <Tr >
            <Td display='flex' alignItems='center' justifyContent='space-between' pl='4'  py='1'  fontSize='14px'  >
                <Link ml='-2' as={NavLink} to={props.name}>{props.name}</Link>
                <AddUser id={props.id} groepNaam={props.name} />
            </Td>
        
     </Tr>
    )
}

export default Group
