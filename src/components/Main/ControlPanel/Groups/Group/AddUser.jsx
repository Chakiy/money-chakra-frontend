import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
    Button,
    FormControl,
    FormLabel,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
    
    
} from '@chakra-ui/react'




function AddUser(props) {
  // console.log(props.id)
    const [usersEmail, setUsersEmail] = useState([])
    const [groupUser, setGroupUser] = useState({groepId : "/api/groeps/"+props.id,
                                                userId : ""})

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()



   


    useEffect(() => {
    const apiUrl = `http://localhost:8000/api/users`;
    axios.get(apiUrl).then(res => {
    // console.log(res.data['hydra:member'])
    
    const allUsersEmail = res.data['hydra:member'].map(u => [u.email, u.id])

    // console.log(allUsersEmail)
    setUsersEmail(allUsersEmail)
    })

    }, [setUsersEmail])






   
    

    function handleChanges(e){
    //  console.log(e.target.name)
     const {groepId} = groupUser
    //  console.log(groep_id_id)
     console.log(e.target.value)
      setGroupUser({ [e.target.name] : `/api/users/${e.target.value}`,
      groepId})
      console.log(groupUser)
    }
    

    // function capitalizeFirstLetter(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    function submitHandler(e){
      e.preventDefault()
      
      // capitalizeFirstLetter(groupName.groepNaam)

      const apiUrl = `http://localhost:8000/api/members`;
      axios.post(apiUrl, groupUser).then(res => {
      console.log(res)
      }).catch(error => console.log(error))
      
      onClose()
    }



    return (
      <>
        <Button fontSize='9px' variant="outline" ml='10px' mr="-4" p='1'  bg='#fff' _hover={{ boxShadow : 'dark-lg'}} size='xs' onClick={onOpen}>+ member</Button>
        
        
        <Modal
          initialFocusRef={initialRef}
    
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <form onSubmit={submitHandler} >
          
          <ModalOverlay />
          <ModalContent>
            
            <ModalHeader>Add member to group</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
            {/* <FormControl isRequired >
                <FormLabel>Group Naam</FormLabel>
                <Input placeholder="Group naam"  type="text" name="groepNaam" value={groupName.groepNaam} onChange={handleChanges} />
            </FormControl> */}

             <FormControl mt={4} isRequired>
               <FormLabel>Select member</FormLabel>
                  <Select placeholder="Select member" name="userId" onChange={handleChanges}>
                    
                      {usersEmail.map(user => 
                       <option key={user} value={user[1]} >{user[0]  }</option>
                       )}

                  </Select>
              
              </FormControl> 
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button type='submit' colorScheme="blue" mr={3} >
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            
          </ModalContent>
          </form>
        </Modal>
        
      </>
    )
  }

export default AddUser
