import React, { createContext } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import MainEditorState from "./core/statemanagement/core/EditorMainState";

export const EditorContext = createContext<MainEditorState | null>(null);

function App() {
  const content = new MainEditorState();
  return (
    <EditorContext.Provider value={content}>
      <ChakraProvider>
        <Flex position="relative" flexDirection="column">
          <Navbar />
          <Dashboard />
        </Flex>
      </ChakraProvider>
    </EditorContext.Provider>
  );
}

export default App;
