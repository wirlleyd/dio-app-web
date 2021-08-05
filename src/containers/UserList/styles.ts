import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
`;

export const Header = styled.div`
  display: flex;
  background-color: #adb901;
  width: 100%;
  padding: 0.5%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  span {
    color: white;
    font-weight: 600;
  }

  @media (max-width: 860px) {
    padding: 0.7%;
  }
`;

export const UserTec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.5%;
  :nth-child(odd) {
    background-color: #adb90117;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;
