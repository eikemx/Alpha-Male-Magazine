import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Link } from 'react-router-dom';

// import Link from "./Link";

const Hero = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:750px)");

  return (
    <>
      <Stack>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? 32 : "0"}
          alignSelf="center"
        >
          <Link to="/">
            <Circle
              position={isNotSmallerScreen ? "relative" : "absolute"}
              bg="blue.100"
              opacity="0.8"
              w="300px"
              h="300px"
            >
              <Box>
                  <Flex direction="column" align={"center"}>
                    <Text
                      fontSize="29"
                      fontWeight="bold"
                      bgGradient="linear(to-r, cyan.400, blue.500,purple.600)"
                      bgClip="text"
                    >
                      Alpha Male Magazine
                    </Text>
                    <Text color={isDark ? "gray.400" : "gray.500"}></Text>

                    {/* <Link /> */}
                  </Flex>
              </Box>
            </Circle>
          </Link>

          <Link to="/">
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "0"}
              borderRadius="full"
              backgroundColor="transparent"
              boxSize="300px"
              src="https://images.unsplash.com/photo-1552820755-733e038f86d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            />
          </Link>
        </Flex>
      </Stack>
    </>
  );
};

export default Hero;
