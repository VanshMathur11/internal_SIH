"use client";

import {
  Box,
  Heading,
  Text,
  Center,
  // useColorModeValue,
} from "@chakra-ui/react";
// import dummyData from "../assets/DummyData";
import { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";

export default function OrganizationRequestsPage() {
  //map values from the api

  // const url = "http://localhost:4000/api/v1/org/getRequests";
  const [data, setData] = useState([]);

  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };

  // const dummydata = dummyData;
  // console.log(dummyData);


  const handleCertificateRequest = async (event) => {
    // event.preventDefault();
    console.log("submitted");
    try {
      let res = await fetch("http://localhost:4000/api/v1/org/getRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
        setData(resJson.allRequests);
      } else {
        // setMessage([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    handleCertificateRequest();
  }, []);

  return (
    <>
      <Navbar2 />
    <div>
      <Center>
        <Heading my={5}>Pending user requests</Heading>
      </Center>
      {/* use data array when fetching from api */}
      {data.length === 0 ? <Heading>No pending requests</Heading> : null}
      {data.map((dataObj, index) => {
        return (
          <div key={index}>
            <Center py={4}>
              <Box
                w="xs"
                rounded={"sm"}
                // my={5}
                // mx={[0, 5]}
                overflow={"hidden"}
                bg="white"
                border={"1px"}
                borderColor="black"
              >
                <Box p={4}>
                  <Box
                    // bg="black"
                    display={"inline-block"}
                    px={2}
                    py={1}
                    // color="white"
                    mb={2}
                  >
                    <Heading fontSize={"xs"} fontWeight="medium">
                      Student Name: {dataObj.studentId}
                    </Heading>
                  </Box>
                  {/* <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                    Course Name : {dataObj.courseName}
                  </Heading> */}
                  <Text color={"gray.500"} noOfLines={2}>
                    Course Name : {dataObj.courseName}
                  </Text>
                  <Text color={"gray.500"} noOfLines={2}>
                    Organization Name : {dataObj.organisationName}
                  </Text>
                </Box>
              </Box>
            </Center>
            <Center py={4}>
              <Box
                w="xs"
                rounded={"sm"}
                // my={5}
                // mx={[0, 5]}
                overflow={"hidden"}
                bg="white"
                // border={"1px"}
                // borderColor="black"
              ></Box>
            </Center>
          </div>
        );
      })}

      {/* <Center py={6}>
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
      </Center> */}
    </div>
    </>
  );
}
