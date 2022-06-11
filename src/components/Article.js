import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, Image } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Article = ({articles}) => {
    const { articleID } = useParams();

    const targetArticle = articles.find((article) => {
        return article.sys.id === articleID;
    });

    console.log(targetArticle)

    if (!targetArticle) {
        return <Text>This article has been removed!</Text>
    }

    return (
        <Container 
            className="targeted-article" 
            key={targetArticle.sys.id}
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
                <Text 
                    fontSize='2xl'
                    fontWeight='bold'
                    mb='10px'
                >{targetArticle.fields.title}</Text>
                {targetArticle.fields.images.map((image) => {
                                return (
                                    <Image  
                                        borderRadius='lg'    
                                        src={image.fields.imageFile.fields.file.url} 
                                        alt={image.fields.imageDescription} 
                                        key={image.sys.id} />
                                )
                            })}
                <Text 
                    fontSize='2xl' 
                    mt='25px'
                >{targetArticle.fields.subtitle}</Text>
                <Text 
                    mb='25px' 
                    mt='25px' 
                >{documentToReactComponents(targetArticle.fields.articleText)}</Text>
                <Container 
                    mb={2} 
                    className="articles-author"
                    fontSize='sm'

                >
                    <Text>Author: {targetArticle.fields.articleAuthor.fields.authorName}</Text>
                        <Link 
                            className='author-link'
                            to={`/author/${targetArticle.fields.articleAuthor.sys.id}`}
                        >Read about me.</Link>
                </Container>
        </Container>
    );
};

export default Article;