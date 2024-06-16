import { Flex, Text, TextInput } from "@mantine/core";

export default function CreateListing() {
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
        Create listing
      </Text>
      <Flex>
        <TextInput label="Address" placeholder="Enter Address" />
      </Flex>
    </Flex>
  );
}
