import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            TrustLink: Empowering Credentials
            <br />
            <Text as={"span"} color={"green.400"}>
              with Blockchain Trust
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            A cutting-edge solution for certificate generation and validation.
            Leveraging blockchain technology, it ensures the security and
            immutability of digital credentials, reducing fraud risks. This
            user-friendly platform streamlines administrative processes for
            issuers while simplifying verification for recipients, ushering in a
            new era of trust and efficiency in credential management. TrustLink
            is the future of secure and transparent certification.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/user-login">
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >Get Started</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
