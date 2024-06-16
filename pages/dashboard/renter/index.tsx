import { Flex, Text, Button } from "@mantine/core";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { RENTER_CONTRACT_ADDRESS, RENTER_CONTRACT_ABI } from "@/lib/constants";

export default function RenterDashboard() {
  const { address } = useAccount();
  const { data: renterData } = useReadContract({
    address: RENTER_CONTRACT_ADDRESS,
    abi: RENTER_CONTRACT_ABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const onClickMint = async () => {
    await writeContractAsync({
      address: RENTER_CONTRACT_ADDRESS,
      abi: RENTER_CONTRACT_ABI,
      functionName: "mint",
    });
  };

  const isRenter = Number(renterData ?? 0) > 0;

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
        Renter Dashboard
      </Text>
      <Flex justify={"center"}>
        <Flex w={300} direction={"column"}>
          <div>
            <Text>
              Mint your Renter Badge to build your reputation and request to
              rent!
            </Text>
            <Button
              mt={16}
              size={"xl"}
              loading={isPending}
              disabled={isRenter}
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
            {isRenter && (
              <Text pt={8} c={"darkgreen"}>
                You are a renter!
              </Text>
            )}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
