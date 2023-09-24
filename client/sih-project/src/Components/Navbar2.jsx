import { useState } from "react";
import { Flex, Button, IconButton, Image, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Box boxSize="4rem" m="4">
        <Image
          borderRadius="full"
          src="https://cdn.vectorstock.com/i/preview-1x/88/12/privacy-locker-icon-flat-computer-protect-vector-45328812.jpg"
          alt="Dan Abramov"
        />
      </Box>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to="/">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              More info
            </Button>
          </Link>

          <Link to="/">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact Us
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
