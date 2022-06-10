import { Box, Flex } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Tags = ({tags}) => {
    console.log(tags)

    return (
        <>
        <Container
            display='flex'
            flex-wrap='wrap'
            justifyContent='space-around'
            gap='5px'
        >
            {tags.map((tag) => {
                return (
                    <>
                            <Box 
                                backgroundColor='#def1ff' 
                                key={tag.sys.id}
                                mb={2}
                                p={2}
                            >{tag.fields.tags}</Box>
                    </>
                )
            })}
        </Container>
        </>
    );
};

export default Tags;