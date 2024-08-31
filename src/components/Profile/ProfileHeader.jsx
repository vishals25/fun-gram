import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignItems={"flex-start"}
          mx={"auto"}
        >
          <Avatar src="/profilepic.png"></Avatar>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "small", md: "lg" }}>Vishal</Text>
            <Flex
              gap={4}
              justifyContent={{ base: "center", sm: "flex-start" }}
              alignItems={"center"}
            >
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Edit Profile
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                159
              </Text>
              Posts
            </Text>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                519
              </Text>
              Followers
            </Text>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                69
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"small"} fontWeight={"bold"}>
              VISHAL 👓
            </Text>
          </Flex>
          <Text fontSize={"small"}>
            <Text>A wanderer Child 🫀</Text>
            <Text> 🕵️‍♀️ meet me in Nebula 🌌🪐💫☄️ </Text>
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
