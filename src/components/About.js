import { Text, Divider } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const About = () => {
    return (
        <>
            <Container mb='25px' mt='25px' >
                <Text fontSize='3xl' display='flex' justifyContent='center'> This Blog is about male spirituality.</Text>
                <Text fontSize='md' mt='25px'>
                Spirituality is a term that is often used to describe a person's connection with their inner self. It can also be defined as one's search for meaning. In the modern world, spirituality has become more popular and more widely accepted among men than it was in the past.
        In today's society, many people are seeking ways to reconnect with themselves and find meaning in life. Spirituality has been a way for many people to do this by connecting with their inner selves and finding meaning in life.
                </Text>
            </Container>
            <Divider 
                className="about-divider" 
                orientation='horizontal' 
                mb='25px'  
                borderColor='#1b4965'
                opacity='1'
                display='flex'
                justifyContent='center'
            />
        </>
    )
}

export default About;