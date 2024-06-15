import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Flex } from "@mantine/core";

export default function Header() {
  return (
    <Flex
      p={16}
      justify={"flex-end"}
      w={"100%"}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #d3d3d3",
      }}
    >
      <DynamicWidget />
    </Flex>
  );
}
