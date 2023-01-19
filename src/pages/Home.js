import React, { useContext } from "react";

import { Container, Header, Image, Label } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user } = context;

  const greeting = user ? (
    <div>
      <Label size="massive" color="teal">
        Welcome, {user.email}
      </Label>
    </div>
  ) : (
    <div>
      <Label basic size="large" color="red" pointing prompt>
        Please login for shopping
      </Label>
    </div>
  );

  return (
    <Container textAlign="center">
      <img
        src="https://icons8.com/icon/8Na1VyvcBemC/buying"
        size="large"
        centered
      />
      <Header as="h1" color="teal">
        E-Commerce Application
      </Header>
      {/* <Header as="h3">
        A simple eCommerce Application made with Spring Boot and React for
        AWS CaseStudy
      </Header> */}
      {greeting}
    </Container>
  );
}
