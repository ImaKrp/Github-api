import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--white);

  > h1 {
    font-size: 22px;
    font-weight: 300;
  }
  > a {
    color: var(--blue);
    font-size: 16px;
    margin: 12px 0;
  }
  > a:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  margin: 32px 0;
  width: 48px;
  height: 48px;
`;
