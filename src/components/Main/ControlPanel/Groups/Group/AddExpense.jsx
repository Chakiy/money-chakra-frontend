import React, { useState } from 'react'
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    useDisclosure,
    IconButton,
    ButtonGroup,
    Icon,
    Box,
    Select,
    Text,
    Textarea,
  } from "@chakra-ui/react"


  import { AddIcon } from '@chakra-ui/icons'
  import { MdReceipt} from "react-icons/md"

function AddExpense() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    
    const today = new Date();
      const date = today.getDate() +'-'+ (today.getMonth()+1) +'-'+ today.getFullYear();



    const [payment, setPayment] = useState({
      "bedrag": 0,
      "beschrijving": "",
      "details": "",
      "datum": date,
      "foto": null,
      "calculated": 0,
      "memberId": "/api/members/23",
      "afrekeningId": "/api/afrekenings/1"
    })
    

    function handleChanges(e){
      console.log(e)
      const newPayment = { ...payment}
      newPayment[e.target.name] =  e.target.value
      setPayment(newPayment)
      console.log(payment)
      
      // console.log(date)
    }
  
    

      // function capitalizeFirstLetter(string) {
      //   return string.charAt(0).toUpperCase() + string.slice(1);
      // }

    function submitHandler(e){
      e.preventDefault()

      console.log(payment)
      
      // capitalizeFirstLetter(groupName.groepNaam)

      const apiUrl = `http://localhost:8000/api/payment_logs`;
      axios.post(apiUrl, payment).then(res => {
      console.log(res)
      }).catch(error => console.log(error))
      
      onClose()
    }












  
    return (
      <>
        <ButtonGroup onClick={onOpen} size="sm" isAttached variant="outline" ml='50px'>
            <Button bg="orange" >
            Add Expense
            </Button>
            <IconButton bg="orange" aria-label="Add to friends" icon={<AddIcon />} />
        </ButtonGroup>
 
  
        <Modal
          initialFocusRef={initialRef}
          
          isOpen={isOpen}
          onClose={onClose}
        >
          <form onSubmit={submitHandler}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add an Expense</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl display='flex'  align='center' flexDirection='column' justifyContent='center'>
              <Box display='flex'  align='center' justifyContent='center'>
                <Icon as={MdReceipt} w={16} h={16} color="red.500" />
                <Box display='flex' flexDirection='column' align='center' justifyContent='center'>
                    <Input w='200px' h='30px' mb='10px'  placeholder="Enter a description" type="text" name="beschrijving" value={payment.beschrijving} onChange={handleChanges} />
                    <Input w='200px' h='30px'  placeholder="€...." type="number" name="bedrag" value={payment.bedrag} onChange={handleChanges} />
                </Box>
              </Box> 
              <Box mt='10px'>
                <Text>Paid by</Text>
                <Select  placeholder="Select Friend" fontSize="10px" w='120px' h='20px' name="memberId" value={payment.memberId} onChange={handleChanges} >
                    <option value="option1">Steven De Ryke</option>
                    <option value="option2">Khachatur Hovsepyan</option>
                    
                </Select>
                <Textarea placeholder="Enter details..." mt="10px" w='300px' h='50px' name="details" value={payment.details} onChange={handleChanges}/>
              </Box>
              
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
          </form>
        </Modal>
      </>
    )
  }

  export default AddExpense;