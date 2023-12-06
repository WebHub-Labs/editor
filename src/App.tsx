import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <Flex flexDirection="column">
        <Navbar />

        <Dashboard />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
