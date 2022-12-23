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
  padding-bottom: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 6px;
  padding: 16px;
  background-color: var(--b100);
  border: 1px solid var(--border);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 306px;

  > h1 {
    font-size: 22px;
    font-weight: 400;
    width: 100%;
  }
  > h2 {
    font-size: 20px;
    font-weight: 300;
    color: #8b949e;
    width: 100%;
  }
  > p {
    width: 100%;
    margin: 8px 0;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 110px;
  border: 1px solid var(--border);
`;

export const Info = styled.ul`
  margin-left: 20px;
  margin-top: 12px;
  list-style: none;
  font-weight: 300;
  color: #8b949e;
  width: 100%;
`;

export const Row = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-bottom: 2px solid var(--border);

  > h2 {
    font-size: 16px;
    font-weight: 300;
  }

  > select {
    border: 1px solid var(--border);
    background-color: var(--black);
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
    padding: 5px 12px;
    color: var(--white);
  }
`;

export const Repo = styled.div`
  width: 90%;
  padding: 12px 6px;

  & + & {
    border-top: 1px solid var(--border);
  }

  > div {
    > a {
      color: var(--blue);
      font-size: 16px;
    }
    > a:hover {
      text-decoration: underline;
    }
  }

  .row {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #8b949e;

    > span {
      display: flex;
      align-items: center;
      font-size: 15px;
    }
  }

  > p {
    padding: 3px 0;
  }

  > span {
    padding: 3px 0;
    color: #8b949e;
  }
`;

export const ReposContainer = styled.div`
  width: 100%;
  height: 380px;
  overflow-y: auto;
  box-shadow: inset 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ReturnArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  left: 12px;
  width: 36px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background-color: var(--black);
  color: #8b949e;
  font-size: 18px;
  box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;
