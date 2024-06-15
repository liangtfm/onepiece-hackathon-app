import { Flex, Text } from "@mantine/core";

export default function LoggedOut() {
  return (
    <Flex
      direction={"column"}
      pos={"relative"}
      justify={"center"}
      align={"center"}
      h={"100%"}
      w={"100%"}
    >
      <Text
        variant="gradient"
        fw={"800"}
        size={"xl"}
        gradient={{ from: "violet", to: "cyan", deg: 45 }}
        style={{ fontSize: "3rem", textAlign: "center" }}
        p={16}
      >
        Connect Your Wallet
      </Text>
    </Flex>
  );
}
