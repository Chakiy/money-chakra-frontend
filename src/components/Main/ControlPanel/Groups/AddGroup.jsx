import React, { useState } from 'react'
import axios from 'axios'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,    
} from '@chakra-ui/react'




function AddGroup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()

    const [groupName, setGroupName] = useState({groepNaam : ""})
    

    function handleChanges(e){
     
      setGroupName({[e.target.name]: capitalizeFirstLetter(e.target.value)})
      console.log(groupName)
    }
    

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function submitHandler(e){
      e.preventDefault()
      
      capitalizeFirstLetter(groupName.groepNaam)

      const apiUrl = `http://localhost:8000/api/groeps`;
      axios.post(apiUrl, groupName).then(res => {
      console.log(res)
      }).catch(error => console.log(error))
      
      onClose()
    }



    return (
      <>
        <Button variant="outline" ml='10px' mr="-4" bg='#fff' _hover={{ boxShadow : 'dark-lg'}} size='xs' onClick={onOpen}>+add</Button>
        
        
        <Modal
          initialFocusRef={initialRef}
    
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <form onSubmit={submitHandler}>
          <ModalOverlay />
          <ModalContent>
            
            <ModalHeader>Create your Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
            <FormControl isRequired >
                <FormLabel>Group Naam</FormLabel>
                <Input placeholder="Group naam"  type="text" name="groepNaam" value={groupName.groepNaam} onChange={handleChanges} />
            </FormControl>

             {/* <FormControl mt={4}>
                <FormLabel>Add Friend</FormLabel>
                <Input mb='3' ref={initialRef} placeholder="Add Friend" />
                <Input mb='3' ref={initialRef} placeholder="Add Friend" />
                <Input mb='3' ref={initialRef} placeholder="Add Friend" /> 
             
             
               <FormLabel>Add Friend</FormLabel>
              <Select placeholder="Select Friend">
                  <option value="option1">Steven De Ryke</option>
                  <option value="option2">Khachatur Hovsepyan</option>
                  
              </Select>
              
              </FormControl>  */}
  
             
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

export default AddGroup
