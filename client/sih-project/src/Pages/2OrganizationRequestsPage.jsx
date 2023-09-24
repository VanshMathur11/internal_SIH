"use client";

// import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

export default function OrganizationRequestsPage() {
  //map values from the api
  return (
    <>
      <Center py={6}>
        <Box
          w="xs"
          rounded={"sm"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        >
          <Box p={4}>
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                User Name:
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              ABCD
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              Request ID:
            </Text>
          </Box>
        </Box>
      </Center>
      <Center py={6}>
        <Box
          w="xs"
          rounded={"sm"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        >
        </Box>
      </Center>
    </>
  );
}
