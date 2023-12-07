import React from "react";
import Sidebar from "./Sidebar";
import { Flex } from "@chakra-ui/react";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <>
      <Flex marginTop={20} justifyContent="start">
        <Sidebar />
        <MainContent />
      </Flex>
    </>
  );
};

export default Dashboard;
