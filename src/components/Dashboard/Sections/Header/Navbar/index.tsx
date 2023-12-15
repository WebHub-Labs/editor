import React, { useContext } from "react";
import { EditorContext } from "../../../../../App";
import { useStore } from "zustand";
import { Input, Text } from "@chakra-ui/react";
import AddNavbar from "./AddNavbar";

const NavbarSidebar = () => {
  const mainEditorState = useContext(EditorContext);
  const navbar = mainEditorState?.mainContent[1].element as AddNavbar;
  const an = useStore(navbar.navbar);
  const text = an!.text;
  const isPresent = an!.isPresent;
  const setText = an?.updateHeaderText;

  return (
    <>
      <Text>Navbar</Text>
      <Input
        value={text}
        onChange={(event) => {
          const value = event.target.value;
          setText(value);
        }}
      ></Input>
    </>
  );
};

export default NavbarSidebar;
