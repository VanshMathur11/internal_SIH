"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Cards_2(props) {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        border={"1px"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"6xl"} fontWeight={800}>
              Your Details
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={10} py={20}>
          <List spacing={8}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Student ID : {props.obj["0"]}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Student Name : {props.obj["1"]}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Course Name : {props.obj["2"]}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Start Date : {props.obj["3"]}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              End Date : {props.obj["4"]}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
