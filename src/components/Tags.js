import { Box, Flex } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Tags = ({tags}) => {
    console.log(tags)

    return (
        <>
        <Container>
            {tags.map((tag) => {
                return (
                    <>
                        <Container
                            backgroundColor='#def1ff' 
                            key={tag.sys.id}
                            mb={2}
                            p={2}
                            width='25%'
                        >
                            <Box >{tag.fields.tags}</Box>
                        </Container>
                    </>
                )
            })}
        </Container>
        </>
    );
};

export default Tags;