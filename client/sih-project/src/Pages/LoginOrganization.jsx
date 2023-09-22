"use client";
import {Link} from "react-router-dom"
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

export default function LoginOrganization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/api/v1/org/login", {
        method: "POST",
        // credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log(res.token)
        localStorage.setItem('token',res.token)
        setEmail("");
        setPassword("");
        setMessage("User login successful");
      } else {
        // setMessage("Some error occured");
        console.log("something went wrong")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form method="POST" onSubmit={handleSignIn}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/* <Checkbox>Remember me</Checkbox> */}
                  {/* <Text color={"blue.400"}>Forgot password?</Text> */}
                </Stack>
                {/* <Link to="/organization-requests"> */}
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                {/* </Link> */}
              </Stack>
            </Stack>
            <Box>
              {message ? (
                <Heading as="h5" size="sm">
                  Sign in successful
                </Heading>
              ) : null}
            </Box>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
