import React from 'react'
import { Flex , Box, Heading } from '@chakra-ui/react'
import Search from '../../components/Search'
import Note from '../../components/Note'
function Main() {
  return (
    <Flex justify="center"align="center" bg="mainColors.200" width="100%"  height="650px">
    <Box width="530px" justifyContent="center"  alignItems="center" bg="mainColors.100" border="1px" borderColor="blackAlpha.700">
          <Box> 
          <Heading textAlign="center" pt="10px"fontFamily="monospace" textDecoration="underline"size="md" color="blackAlpha.700">
            NOTE APP 
           </Heading>
          </Box>
   
       <Box >
       <Search/>
        </Box>
        <Box >
       <Note/>
        </Box>
        
    </Box>
    </Flex>
  )
}

export default Main