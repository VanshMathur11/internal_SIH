"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Cards_2 from "../Components/Cards_2";
import Navbar2 from "../Components/Navbar2";

export default function CertificateValidationPage() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState({})

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log("submitted");
    try {
      let res = await fetch("http://localhost:4000/api/v1/cer/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          transactionHash: id,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        alert(resJson.myData["0"] + " " + resJson.myData["1"] + " " + resJson.myData["2"] + " " + resJson.myData["3"] + " " + resJson.myData["4"])
        setPopup(resJson.myData)
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar2  />
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Certificate Validation</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form method="GET" onSubmit={handleSignIn}>
            <Stack spacing={4}>
              <FormControl id="unique-id">
                <FormLabel>Enter unique ID</FormLabel>
                <Input
                  type="text"
                  value={id}
                  onChange={({ target }) => setId(target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
            <Box>
              {message ? (
                <Heading as="h5" size="sm">
                  Directing....
                </Heading>
              ) : null}
            </Box>
          </form>
          {popup ? <Cards_2 obj={popup} /> : null}
        </Box>
      </Stack>
      </Flex>
      </>
  );
}
