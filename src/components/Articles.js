import { Link } from 'react-router-dom';
import { Text, Image, Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Articles = ({articles}) => {
// console.log(articles)

    return (
        <>
            {articles.map((article) => {
                return (
                    <>
                    <Container 
                        className="article" 
                        mb='25px' 
                        p={2}
                        backgroundColor='#def1ff'
                        borderRadius='lg'
                        key={article.sys.id}
                    >
                            <Box >
                                {article.fields.images.map((image) => {
                                    return (
                                        <Image 
                                            width="10%" 
                                            height="10%" 
                                            borderRadius='lg'
                                            src={image.fields.imageFile.fields.file.url} 
                                            alt={image.fields.imageDescription} 
                                            key={image.sys.id} 
                                        />
                                    )
                                })}
                            </Box>
                            <Box>
                                <Text fontSize='xl'>{article.fields.title}</Text>
                                <Text 
                                    fontSize='md' 
                                    mb={2}
                                >{article.fields.summary}
                                </Text>
                                <Link to={`/article/${article.sys.id}`}>Read more...</Link>
                            </Box>
                    </Container>   
                    </>
                )
            })}
        </>
    )

}

export default Articles;