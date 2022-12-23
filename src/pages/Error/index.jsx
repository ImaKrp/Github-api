import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "./styles";

const ErrorPage = () => {
  return (
    <Container>
      <Logo src="/github.svg" />
      <h1>Não encontrado</h1>
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default ErrorPage;
