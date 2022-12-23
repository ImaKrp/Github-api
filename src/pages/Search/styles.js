import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
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
`;

export const Form = styled.form`
  border-radius: 6px;
  padding: 16px;
  background-color: var(--b100);
  border: 1px solid var(--border);
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Logo = styled.img`
  margin: 32px 0;
  width: 48px;
  height: 48px;
`;

export const Input = styled.input`
  border: 1px solid var(--border);
  background-color: var(--black);
  font-size: 14px;
  line-height: 20px;
  border-radius: 6px;
  padding: 5px 12px;
  width: 274px;
  color: var(--white);
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--green);
  transition: background-color 0.3s;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 6px;
  border: 1px solid rgba(240, 246, 252, 0.1);

  &:hover {
    background-color: var(--green-hover);
  }
`;
