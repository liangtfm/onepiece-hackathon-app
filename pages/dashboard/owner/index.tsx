import { Flex, Text, Button } from "@mantine/core";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import {
  HOMEOWNER_CONTRACT_ADDRESS,
  HOMEOWNER_CONTRACT_ABI,
} from "@/lib/constants";

export default function OwnerDashboard() {
  const { address } = useAccount();
  const { data: homeownerData } = useReadContract({
    address: HOMEOWNER_CONTRACT_ADDRESS,
    abi: HOMEOWNER_CONTRACT_ABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const onClickMint = async () => {
    await writeContractAsync({
      address: HOMEOWNER_CONTRACT_ADDRESS,
      abi: HOMEOWNER_CONTRACT_ABI,
      functionName: "mint",
    });
  };

  const isHomeowner = Number(homeownerData ?? 0) > 0;

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
      <Flex justify={"center"}>
        <Flex w={300} direction={"column"}>
          <div>
            <Text>
              Mint your Homeowner Badge to build your reputation and create
              listings
            </Text>
            <Button
              mt={16}
              size={"xl"}
              loading={isPending}
              disabled={isHomeowner}
              onClick={onClickMint}
            >
              Mint
            </Button>
            {hash && (
              <Text pt={8} c={"green"}>
                Transaction hash:{" "}
                <a
                  href={`https://explorer.camp-network-testnet.gelato.digital/tx/${hash}`}
                  target={"_blank"}
                >
                  {hash}
                </a>
              </Text>
            )}
            {isHomeowner && (
              <Text pt={8} c={"darkgreen"}>
                You are a homeowner!
              </Text>
            )}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
