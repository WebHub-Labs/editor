import React from "react";
import { Button as KButton } from "@chakra-ui/react";

export default function Button({ text }: { text: string }) {
  return <KButton>{text}</KButton>;
}
