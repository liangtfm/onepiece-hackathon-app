import { Divider, Flex, Text, Button, List } from "@mantine/core";
import { useParams } from "next/navigation";

export default function Rental() {
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
        Rental Listing
      </Text>
      <Flex align={"center"} direction={"column"}>
        <Text>Address: 340 E Middlefield Rd, Mountain View, CA 94043</Text>
        <Text>Requests:</Text>
        <Divider w={"100%"} my={"lg"} />
        <Flex justify={"center"} gap={16} wrap={"wrap"}>
          <Flex
            direction={"column"}
            p={16}
            style={{ border: "1px solid #333", borderRadius: 6 }}
          >
            <Text>
              Wallet Address: 0x893f0b9599E3e06fe33cdb96c651cA3bf7d625c6
            </Text>
            <Text>Reputation: Level 3</Text>
            <Text>Fun facts:</Text>
            <List>
              <List.Item>You both follow Elon Musk on X</List.Item>
              <List.Item>You both listen to Taylor Swift</List.Item>
            </List>
            <Button mt={16}>Approve</Button>
            <Button mt={16} variant={"outline"}>
              Deny
            </Button>
          </Flex>
          <Flex
            direction={"column"}
            p={16}
            style={{ border: "1px solid #333", borderRadius: 6 }}
          >
            <Text>
              Wallet Address: 0xdB6C01f93EeFD6D43c535c519978faD9359876B3
            </Text>
            <Text>Reputation: Level 1</Text>
            <Text>Fun facts:</Text>
            <List>
              <List.Item>You both have work experience at Google</List.Item>
              <List.Item>You both have been homeowners</List.Item>
            </List>
            <Button mt={16}>Approve</Button>
            <Button mt={16} variant={"outline"}>
              Deny
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
