import { Flex, Text } from "@mantine/core";
import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();
  console.log("params = ", params);
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
        Profile
      </Text>
    </Flex>
  );
}
