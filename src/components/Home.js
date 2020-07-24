
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container } from "./styles";
import pizza from './Assets/Pizza.jpg'
export default function Home() {
  const history = useHistory();
  return (
    <Container direction={"column"}>
      <Container width={"100%"}>
        <img src={pizza} alt="Pizza" />
      </Container>
      <Button fontSize={"2rem"} onClick={() => history.push("/pizza")}>
        Order, you beautiful creature!
      </Button>
    </Container>
  );
}