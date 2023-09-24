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

export default function UserCertificateRequestPage() {
  const [studentid, setStudentId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [organization,setOrganization] = useState("");
  const [message,setMessage]=useState('');

//coursename organization
//student id course name
  const handleCertificateRequest= async(event)=>{
    event.preventDefault()
    console.log("submitted")
    try {
      let res = await fetch("http://localhost:4000/api/v1/usr/requestCertificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({
          studentid:studentid,
          courseName: courseName,
          organization: organization,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        setStudentId("");
        setCourseName("");
        setOrganization("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Certificate Request</Heading>
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
          <form method="POST" onSubmit={handleCertificateRequest}>
            <Stack spacing={4}>
              <FormControl id="s-id">
                <FormLabel>Enter student ID</FormLabel>
                <Input type="text" value={studentid} onChange={({target})=>setStudentId(target.value)} />
              </FormControl>
              <FormControl id="s-id">
                <FormLabel>Enter Course Name</FormLabel>
                <Input type="text" value={courseName} onChange={({target})=>setCourseName(target.value)} />
              </FormControl>
              <FormControl id="s-id">
                <FormLabel>Enter Organization Name</FormLabel>
                <Input type="text" value={organization} onChange={({target})=>setOrganization(target.value)} />
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
              {message? <Heading as="h5" size="sm">
                Directing....
              </Heading>:null}
            </Box>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
