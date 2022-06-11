import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Image, Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const AllArticles = ({articles}) => {
// console.log(articles)

    return (
        <>
            {articles.map((article) => {
                return (
                    <Fragment
                        key={article.sys.id}
                    >
                        <Container 
                            className="article" 
                            display='flex'
                            flexDirection='column'
                            mb='25px' 
                            p={2}
                            backgroundColor='#def1ff'
                            borderRadius='lg'
                        >
                                <Box 
                                    alignSelf='center'
                                    width="50%" 
                                    height="50%" 
                                >
                                    {article.fields.images.map((image) => {
                                        return (
                                            <Image 
                                                mb={5} 
                                                borderRadius='lg'
                                                src={image.fields.imageFile.fields.file.url} 
                                                alt={image.fields.imageDescription} 
                                                key={image.sys.id} 
                                            />
                                        )
                                    })}
                                </Box>
                                <Box>
                                    <Text 
                                        fontSize='xl'
                                        fontWeight='bold'
                                    >{article.fields.title}</Text>
                                    <Text 
                                        fontSize='md' 
                                        mb={2}
                                    >{article.fields.summary}
                                    </Text>
                                    <Link 
                                        to={`/article/${article.sys.id}`}
                                    >Read more...</Link>
                                </Box>
                        </Container>
                    </Fragment>
                )
            })}
        </>
    )

}

export default AllArticles;