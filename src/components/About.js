import { Text } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const About = () => {
    return (
        <>
            <Container 
                mb='25px' 
                mt='10px' 
                // display='flex'
                // flexDirection='column' 
                // justifyContent='center'
            >
                    <Text fontSize='3xl' > This Blog is about male spirituality.</Text>
                    <Text fontSize='md' mt='25px'>
                    Spirituality is a term that is often used to describe a person's connection with their inner self. It can also be defined as one's search for meaning. In the modern world, spirituality has become more popular and more widely accepted among men than it was in the past.
            In today's society, many people are seeking ways to reconnect with themselves and find meaning in life. Spirituality has been a way for many people to do this by connecting with their inner selves and finding meaning in life.
                    </Text>
                </Container>
        </>
    )
}

export default About;