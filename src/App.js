import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'


import ControlPanel from './components/Main/ControlPanel/ControlPanel'


import LoginContainer from './components/Login/LoginContainer';
import RegistrationContainer from './components/Login/RegistrationContainer'
import axios from 'axios'

import { Route } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
// import Group from './components/Main/ControlPanel/Groups/Group/Group';
import GroupOverview from './components/Main/ControlPanel/Groups/Group/GroupOverview';
// import GroupsOverview from './components/Main/ControlPanel/Groups/GroupsOverview';
import React, { useState, useEffect } from 'react'



// Customized theme
const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      100: '#ff4b2b',
      200: '#eeeeee',
      300: '#333333',
      400: '#ff4457',
      500: '#f3e0e2',
      600: '#FFFFFF',
      700: '#000000',
      800: '#FFF4C2',
    },
  },
})






const App = () => {

const [groups, setGroups] = useState([])
const [users, setUsers] = useState([])

useEffect(() => {
  
    const apiUrl = `http://localhost:8000/api/groeps`;
    axios.get(apiUrl).then(res => {
    // console.log(res.data['hydra:member'])
    const allGroups = res.data['hydra:member'].map(g => [g.id, g.groepNaam])
  
    // console.log(allGroups)

    setGroups(allGroups)
})
}, [setGroups])


useEffect(() => {
  
  const apiUrl2 = `http://localhost:8000/api/members`;
  axios.get(apiUrl2).then(res => {
  // console.log(res.data['hydra:member'])
  
  const allUsers = res.data['hydra:member'].map(u => [u.userId, u.groepId])
  // console.log(allUsers)
  const filterUser = allUsers.filter(us => us[0] === "/api/users/1")
  // console.log(filterUser)

  setUsers(filterUser)
})
}, [setUsers])

function ren(groups, users){
  const userGroups = users.map(user => user[1].slice(12))
  // console.log(userGroups)
  const groupNames = userGroups.map(element => groups.filter(group => group[0] == element ) )
  // console.log(groupNames)
  const groepNamesUpgraded = groupNames.map(el => el[0])
  // console.log(groepNamesUpgraded)

  return groepNamesUpgraded;

}

const checkingForRightGroups = ren(groups, users)
// console.log(testArr)


  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      
      <Flex justify='center' align='center' bg='brand.500' minHeight='100vh'>
      
        <Flex
          bg='brand.600'
          w='90%'
          h='900px'
          borderRadius='10px'
          boxShadow='0px 32px 70px -40px rgba(0, 0, 0, 1)'>
          <ControlPanel  state={checkingForRightGroups} />

          {groups.map((group) => <Route key={group[0]} path={`/${group[1]}`} component={() =>
           <GroupOverview state={groups} groepName={group[1]}  groep={checkingForRightGroups}/>} /> )}

          
        </Flex>
      </Flex>
    </ChakraProvider>
    </BrowserRouter>
   
  )
}




// const App = () => {
//   return (
//     <ChakraProvider theme={theme}>
      
//       <Flex justify='center' align='center' bg='brand.500' minHeight='100vh'>
      
//         <Flex
//           bg='brand.600'
//           w='800px'
//           h='500px'
//           borderRadius='10px'
//           boxShadow='0px 32px 70px -40px rgba(0, 0, 0, 1)'>
//           <LoginContainer />
//           <Box bg="brand.500" w="1px"></Box>
//           <RegistrationContainer />
//         </Flex>
//       </Flex>
//     </ChakraProvider>
//   )
// }


export default App