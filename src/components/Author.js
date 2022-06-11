import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Text, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';

const Author = ({authors}) => {
    // console.log(authors)
    const {authorID} = useParams();
    
    const targetAuthor = authors.find((author) => {
        return author.sys.id === authorID
    });
    // console.log(targetAuthor)

    if (!targetAuthor) {
        return <Text>This Author has been removed!</Text>
    }

    return (
        <Container 
            className="targeted-author" 
            key={targetAuthor.sys.id}
            mt='25px'
            mb='25px'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Text
                fontSize='2xl'
                fontWeight='bold'
                mb='10px'
            >{targetAuthor.fields.authorName}</Text>
            {targetAuthor.fields.image.map((image) => {
                return (
                    <Image 
                        borderRadius='lg'
                        src={image.fields.imageFile.fields.file.url}
                        alt={image.fields.imageFile.fields.description}
                        key={image.sys.id}
                    />
                )
            })}
            <Text
                mt='25px'
                mb='25px'
            >{documentToReactComponents(targetAuthor.fields.authorBio)}</Text>
        </Container>
    )
}

export default Author;