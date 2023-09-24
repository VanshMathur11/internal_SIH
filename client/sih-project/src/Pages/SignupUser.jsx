"use client";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar2 from "../Components/Navbar2";

export default function SignupUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [message, setMessage] = useState("");

  const handleSignUp=async(event)=>{
    event.preventDefault()
    console.log("submitted")
    try {
      console.log(userName, email, password)
      let res = await fetch("http://localhost:4000/api/v1/usr/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setUserName("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        console.log(resJson);
        localStorage.setItem("token", resJson.token);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar2 />
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            if you are a user
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form method="POST" onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={userName} onChange={(target)=>setUserName(target.value)}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(target)=>setEmail(target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} value={password} onChange={(target)=>setPassword(target.value)}/>
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link to="/user-login" color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
            <Box>
              {message? <Heading as="h5" size="sm">
                Sign up successful
              </Heading>:null}
            </Box>
          </form>
        </Box>
      </Stack>
      </Flex>
      </>
  );
}
