import { FaSun, FaMoon, FaInstagram, FaFacebook } from "react-icons/fa";
import { VStack, Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
// import Link from "./Link";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:750px)");

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <VStack>
          <Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <IconButton
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            ></IconButton>

            <IconButton icon={<FaInstagram />} isRound="true"></IconButton>
            <IconButton icon={<FaFacebook />} isRound="true"></IconButton>
          </Flex>
        </VStack>

        {/* <VStack>
          <Flex>
            <Link />
            <Link />
            <Link />
          </Flex>
        </VStack> */}
      </Flex>
    </>
  );
};

export default Header;
