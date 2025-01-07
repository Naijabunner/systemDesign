import React from "react";
import styled from "styled-components";
import { useNavApi, useNavData } from "../context/nav-controller";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { toggle } = useNavApi();
  const { collapsed } = useNavData();
  console.log("button - rendered");
  return <ToggleButton onClick={toggle}>{collapsed ? "➤" : "⮜"}</ToggleButton>;
};

export const CloseButton = () => {
  const { close } = useNavApi();
  console.log("close button - rendered");
  return <ToggleButton onClick={close}>close sidebar</ToggleButton>;
};

export default Button;
