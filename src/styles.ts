import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  height: 90%;

  @media (max-width: 860px) {
    width: 90%;
  }
`;
