import React from "react";
import { Flex, Text, TextInput, Button } from "@mantine/core";
import { useReadContract, useAccount, useWriteContract } from "wagmi";
import {
  HOMEOWNER_CONTRACT_ADDRESS,
  HOMEOWNER_CONTRACT_ABI,
  HOME_LISTING_CONTRACT_ABI,
  HOME_LISTING_CONTRACT_ADDRESS,
} from "@/lib/constants";
import { write } from "fs";

export default function CreateListing() {
  const { address } = useAccount();
  const { data: homeownerData } = useReadContract({
    address: HOMEOWNER_CONTRACT_ADDRESS,
    abi: HOMEOWNER_CONTRACT_ABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const [listingAddress, setListingAddress] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  const onClickCreate = async () => {
    await writeContractAsync({
      address: HOME_LISTING_CONTRACT_ADDRESS,
      abi: HOME_LISTING_CONTRACT_ABI,
      functionName: "mint",
      args: [listingAddress],
    });
    setListingAddress("");
    setVerified(false);
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
        Create listing
      </Text>
      <Flex justify={"center"}>
        <Flex
          w={500}
          direction={"column"}
          gap={24}
          p={16}
          style={{ borderRadius: 8, background: "#fff" }}
        >
          <div>
            <TextInput
              label="Address"
              placeholder="Enter Address"
              value={listingAddress}
              onChange={(event) => setListingAddress(event.currentTarget.value)}
              disabled={verified}
            />
          </div>
          <div>
            <Button disabled={verified} onClick={() => setVerified(true)}>
              Verify Ownership
            </Button>
            {verified && (
              <Text c={"green"} pt={8}>
                Ownership verified successfully!
              </Text>
            )}
          </div>
          <div>
            <Button
              disabled={
                !isHomeowner || listingAddress.length === 0 || !verified
              }
              onClick={onClickCreate}
              loading={isPending}
            >
              Create
            </Button>
          </div>
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
        </Flex>
      </Flex>
    </Flex>
  );
}
