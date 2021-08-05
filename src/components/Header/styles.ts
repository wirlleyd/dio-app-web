import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 15%;
  height: 100%;
  @media (max-width: 860px) {
    width: 25%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
