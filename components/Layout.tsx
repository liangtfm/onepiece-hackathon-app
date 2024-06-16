import Header from "./Header";
import React from "react";
import { Flex } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction={"column"} w={"100%"} h={"100vh"}>
      <Header />
      {children}
    </Flex>
  );
}
