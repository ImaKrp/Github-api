import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGithub } from "../../hooks/useGithub";
import { Container, Form, Logo, Input, Button } from "./styles";

const SearchPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { searchUser } = useGithub();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <Container>
      <Logo src="/github.svg" />
      <h1>Busque por um usuário</h1>
      <Form onSubmit={handleSubmit}>
        <label>Username</label>
        <Input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
