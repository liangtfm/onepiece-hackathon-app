import Head from "next/head";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";
import { Flex } from "@mantine/core";
import { useIsMounted } from "@/lib/hooks";

export default function Home() {
  const isMounted = useIsMounted();
  const { address, isConnected, chain } = useAccount();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isMounted && (
          <>
            <Flex p={16} justify={"flex-end"}>
              <DynamicWidget />
            </Flex>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <p>wagmi connected: {isConnected ? "true" : "false"}</p>
              <p>wagmi address: {address}</p>
              <p>wagmi network: {chain?.id}</p>
            </Flex>
          </>
        )}
      </main>
    </>
  );
}
