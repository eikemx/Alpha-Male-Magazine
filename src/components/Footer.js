
import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <Flex alignItems="center" justifyContent="inherit" width="100%">
            <Flex direction="column" alignItems="center" background="#c7e3f8" p={3} width='100%' className='footer'>
                <Heading size='sm' mb={1} >Sign in for the latest dude-content</Heading>
                <Input size='xs' variant='outline' placeholder="youremail@adress.com" variant="filled" mb={1} width='50%' type="email" />
                <Input size='xs' variant='outline' placeholder="Your Name" variant="filled" mb={1} width='50%' type="name" />
                <Box as='button' borderRadius='md' bg='#1b4965' color='white' px={4} h={8} width='25%' onClick={() => navigate("/submitted")}>
                    Submit
                </Box>
            </Flex>
        </Flex>
    )
}

export default Footer;