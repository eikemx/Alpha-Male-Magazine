import { Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Tags = ({tags}) => {
    // console.log(tags)

    return (
        <>
        <Container
            display='flex'
            flex-wrap='wrap'
            justifyContent='space-around'
            gap='5px'
        >
            {tags.items.map((tag) => {
                return (
                    <>
                            <Box 
                                backgroundColor='#def1ff' 
                                key={tag.sys.id}
                                borderRadius='lg'
                                mb={2}
                                p={2}
                            >{tag.name}</Box>
                    </>
                )
            })}
        </Container>
        </>
    );
};

export default Tags;