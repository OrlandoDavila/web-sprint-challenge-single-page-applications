import React from "react";
import { Container, Button } from "./styles";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  const history = useHistory();
  return (
    <Container width={"100%"} justify={"space-between"}>
      <h3>Lambdy Pizzy</h3>
      <Container width={"30%"} justify={"flex-end"}>
        <Button onClick={() => history.push("/")} width={"50%"} id={"home"}>
          Home
        </Button>
        <Button width={"20%"}>Help</Button>
      </Container>
    </Container>
  );
}