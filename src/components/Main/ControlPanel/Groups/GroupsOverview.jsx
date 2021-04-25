import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"


function GroupsOverview() {
    return (
        <Table variant="simple">
 
  <Thead>
    <Tr>
      <Th>Group Naam</Th>
      <Th>Details</Th>
      <Th >Gemaakt op</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Ibiza</Td>
      <Td>tickets en hotel</Td>
      <Td>04.04.2020</Td>
    </Tr>
    <Tr>
      <Td>Ardennen</Td>
      <Td>Vacantie huisje en eten</Td>
      <Td>10.05.2021</Td>
    </Tr>
    <Tr>
      <Td>Syntra</Td>
      <Td>BBQ bij Denes</Td>
      <Td>20.06.2021</Td>
    </Tr>
  </Tbody>
  
  {/* <AddG/> */}
</Table>
    )
}

export default GroupsOverview
