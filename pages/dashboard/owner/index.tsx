import { Flex, Text, Button } from "@mantine/core";

export default function OwnerDashboard() {
  return (
    <Flex direction={"column"} pos={"relative"} h={"100%"} w={"100%"} pt={80}>
      <Text
        variant="gradient"
        fw={"800"}
        size={"xl"}
        gradient={{ from: "violet", to: "cyan", deg: 45 }}
        style={{ fontSize: "3rem", textAlign: "center" }}
        p={16}
      >
        Owner Dashboard
      </Text>
      <Flex>
        <Text>Mint Homeowner Badge</Text>
        <Button>Mint</Button>
      </Flex>
    </Flex>
  );
}
