import React from "react";
import Sidebar from "./Sidebar";
import { Flex } from "@chakra-ui/react";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <>
      <Flex
        // position="relative"
        // height="100%"
        // top="0"
        // bottom="0"
        justifyContent="start"
      >
        <Sidebar />
        <MainContent />
      </Flex>
    </>
  );
};

export default Dashboard;
