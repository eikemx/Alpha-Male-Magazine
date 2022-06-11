import {Fragment} from "react"
import { Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom"

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
            {tags.items.map((tag) => {
                return (
                    <Fragment key={tag.sys.id}>
                            <Box 
                                // backgroundColor='#def1ff' 
                                bgGradient="linear(to-r, cyan.400, blue.500,purple.600)"
                                borderRadius='lg'
                                mb={8}
                                p={2}
                            ><Link 
                                to={`/topic/${tag.sys.id}`}
                                className="tagName"
                            >{tag.name}</Link></Box>
                    </Fragment>
                )
            })}
        </Container>
        </>
    );
};

export default Tags;