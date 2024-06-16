import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Flex, Button } from "@mantine/core";
import { useIsMounted } from "@/lib/hooks";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function Header() {
  const isMounted = useIsMounted();
  const { isAuthenticated } = useDynamicContext();
  const { address } = useAccount();
  return (
    <Flex
      p={16}
      justify={"space-between"}
      w={"100%"}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #d3d3d3",
      }}
      align={"center"}
      h={80}
    >
      <Flex>
        <Link href={"/"}>Logo</Link>
      </Flex>
      <Flex>
        {isAuthenticated && (
          <Flex justify={"center"} align={"center"} gap={8} mr={8}>
            <Link href={"/dashboard/renter"}>
              <Button>Renter</Button>
            </Link>
            <Link href={"/dashboard/owner"}>
              <Button>Owner</Button>
            </Link>
            <Link href={`/profile/${address}`}>
              <Button>Profile</Button>
            </Link>
          </Flex>
        )}
        {isMounted && <DynamicWidget />}
      </Flex>
    </Flex>
  );
}
