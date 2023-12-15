import React, { useContext } from "react";
import { EditorContext } from "../../../../../App";
import { useStore } from "zustand";
import { Input, Text } from "@chakra-ui/react";

const NavbarSidebar = () => {
  const mainEditorState = useContext(EditorContext);
  const navbar = mainEditorState?.mainContent[0].header?.header;
  const an = useStore(navbar!.navbar);
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
