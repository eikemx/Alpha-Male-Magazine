import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, Box, Image } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";

const Article = ({articles}) => {
    const { articleID } = useParams();

    const targetArticle = articles.find((article) => {
        return article.sys.id === articleID;
    });

    console.log(targetArticle)

    if (!targetArticle) {
        return <h4>This article has been removed!</h4>
    }

    return (
        <Container className="targeted-article" key={targetArticle.sys.id}>
            <Text>{targetArticle.fields.title}</Text>
            {targetArticle.fields.images.map((image) => {
                            return (
                                <Image  
                                    src={image.fields.imageFile.fields.file.url} 
                                    alt={image.fields.imageDescription} 
                                    key={image.sys.id} />
                            )
                        })}
            <Text mt='25px'>{targetArticle.fields.subtitle}</Text>
            <Text mb='25px' mt='25px' >{documentToReactComponents(targetArticle.fields.articleText)}</Text>
            <Container mb={2} className="articles-author">
                <Text>{targetArticle.fields.articleAuthor.fields.authorName}</Text>
                <Link to={`/author/${targetArticle.fields.articleAuthor.fields.tag.sys.id}`}>Read about me.</Link>
                {/* <Box >
                    {targetArticle.fields.articleAuthor.fields.image.map((image) => {
                        console.log(image)
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
                </Box> */}
            </Container>
        </Container>
    );
};

export default Article;