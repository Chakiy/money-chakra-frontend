import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Text, 
     Flex,
     Box,
     Spacer,
     Heading,
     Divider,
     Table,
     Tbody,
     Tr,
     Td,
     Icon,
    } from '@chakra-ui/react'
// import { AddIcon } from '@chakra-ui/icons'

import style from './groupOverview.module.css'
import AddExpense from './AddExpense'
import GroupDetails from './GroupDetails'

function GroupOverview(props) {
    // console.log(props)

    const [ details, setDetails] = useState([])
    const [users, setUsers] = useState([])

    
    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/payment_logs`;
        axios.get(apiUrl).then(res => {
        // console.log(res.data['hydra:member'])
  
        const data = res.data['hydra:member'].map(logs => [logs.memberId, logs.bedrag, logs.beschrijving, logs.datum.slice(5,10), logs.details])

        console.log(data)
        // const filterdMember = data.filter(item => item[0] === "/api/members/2")
        // console.log(filterdMember)
        setDetails(data)  
        
        })   
        }, [setDetails])
    
    useEffect(() => {

        const apiUrl2 = `http://localhost:8000/api/members`;
        axios.get(apiUrl2).then(res => {
        // console.log(res.data['hydra:member'])
        
        const allUsers = res.data['hydra:member'].map(u => Object.keys(u).map(key => u[key]))
        // console.log(allUsers[0])
        const allUsersTwo = allUsers.map(el => [el[0], el[3], el[4]])
        // console.log(allUsersTwo)

        setUsers(allUsersTwo)
        })
    }, [setUsers])   


    function ren(details, members){
        let cijfers = []

        if(props.groepName){
            cijfers = props.groep.filter(gr => gr[1]===props.groepName)
        }
        // console.log(cijfers[0][0])
        // let a = 1

        const filterGroep = members.filter(m => m[2] === `/api/groeps/${cijfers[0][0]}`)
        // console.log(filterGroep)

        const filterDetails = filterGroep.map(groep => groep[0])
        // details.filter(el => el[0] === groep[0])
        console.log(filterDetails)
        const filterPayment = filterDetails.map(el => details.filter(a => a[0] === el)  )
        console.log(filterPayment)
    
        // const filterAll = filterPayment.filter(el => el[0] !== [])
        // console.log(filterAll)
        // return filterDetails;
      
      }

    const states = ren(details,users)


    return (
        <div className={style.div100}>
            <Flex justify="space-between" align='center' bg='gray.100' w='100%'>
                <Box p="2">
                    <Heading size="md">{props.groepName}</Heading>
                </Box>
                <Spacer />
                <Box ml='auto'>
                    
                <AddExpense/>

                </Box>
                
            </Flex>
            <Divider/>

            <Table variant="simple" size='sm' >
  
               
                <Tbody>
                    {/* {details.map((detail,index) => <GroupDetails key={index} details={detail}/>)} */}
                    {/* {states.map((state,index) => <GroupDetails key={index} details={state[0]}/>)} */}
                    {console.log(states)}
                </Tbody>
            </Table>
        </div>
    )
}

export default GroupOverview
