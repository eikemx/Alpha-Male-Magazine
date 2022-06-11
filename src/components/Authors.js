import { Text, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';

const Authors = ({authors}) => {
    // console.log(authors);

    return (
        <>
            {authors.map((author => {
                return (
                    <>
                        <Container 
                            className='author' 
                            key={author.sys.id}
                        >
                                <Text fontSize='xl'>{author.fields.authorName}</Text>
                                {author.fields.image.map((image) => {
                                    return (
                                        <Image 
                                            src={image.fields.imageFile.fields.file.url} 
                                            alt={image.fields.imageFile.fields.description} 
                                            key={image.sys.id} 
                                        />
                                    )
                                })}
                        </Container>
                    </>
                )
            }))}
        </>
    )
}

export default Authors;