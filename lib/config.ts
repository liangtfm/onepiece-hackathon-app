import { type Chain } from "viem";
import { http, createConfig } from "wagmi";

export const campNetwork = {
  id: 325000,
  name: "Camp Network Testnet V2",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.camp-network-testnet.gelato.digital"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.camp-network-testnet.gelato.digital",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const config = createConfig({
  chains: [campNetwork],
  multiInjectedProviderDiscovery: false,
  transports: {
    [campNetwork.id]: http(),
  },
});
