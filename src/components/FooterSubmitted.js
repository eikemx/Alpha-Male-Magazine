
import { Flex, Heading } from '@chakra-ui/react'

const Submitted = () => (
    <Flex width="100%">
        <Flex 
            background="#c7e3f8" 
            p={3} 
            width='100%' 
            className='footer' 
            justifyContent='center'>
            <Heading 
                fontSize="29"
                      fontWeight="bold"
                      bgGradient="linear(to-r, cyan.400, blue.500,purple.600)"
                      bgClip="text"
            >Hell Yeah!</Heading>
        </Flex>
    </Flex>
)

export default Submitted;