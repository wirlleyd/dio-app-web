import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 40%;
  margin: 0px 5px;

  input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #757575;
    width: 90%;
    :focus {
      outline: none;
    }
    :focus ~ label,
    :valid ~ label {
      top: -20px;
      font-size: 14px;
      color: #5264ae;
    }

    @media (max-width: 860px) {
      width: 100%;
    }
  }

  label {
    left: 5px;
    top: 10px;
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  @media (max-width: 860px) {
    margin: 15px;
    width: 100%;
  }
`;

export const Button = styled.button`
  color: white;
  background: #adb901;
  border: none;
  font-weight: 600;
  padding: 1.2%;
  margin: 0px 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  height: 35px;
  :hover {
    filter: brightness(0.95);
  }

  @media (max-width: 860px) {
    margin: 10px;
    width: 100%;
    padding: 2%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 860px) {
    width: 75%;
  }
`;
