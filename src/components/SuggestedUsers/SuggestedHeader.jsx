import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogout from "./../../hooks/useLogout";
import useAuthStore from "../../../store/authStore";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingout } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar name="Programmer" src={authUser.ProfilePicURL} size={"sm"} />
        </Link>
        <Link to={`${authUser.username}`} style={{ textDecoration: "none" }}>
          <Text fontSize={14} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        color={"blue.400"}
        cursor={"pointer"}
        fontSize={12}
        onClick={handleLogout}
        isLoading={isLoggingout}
        pr={0}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
