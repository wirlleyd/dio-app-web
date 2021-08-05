import React, { Dispatch, SetStateAction, useState } from "react";

import Spin from "../../components/Spin";
import api from "../../services/api";

import { Container, InputContainer, Button, ButtonContainer } from "./styles";

interface IProps {
  setShouldReload: Dispatch<SetStateAction<boolean>>;
}

const UserForm: React.FC<IProps> = ({ setShouldReload }) => {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<{
    name?: string;
    tecnology?: string;
  }>({
    name: "",
    tecnology: "",
  });

  const handleState = (prop: string, value: string): void => {
    setPerson((oldValues) => ({ ...oldValues, [prop]: value || "" }));
  };

  const handleSubmit = async () => {
    if (!person.name || !person.tecnology) {
      return;
    }
    try {
      setLoading(true);
      await api.post("/person", person);
      setPerson({
        name: "",
        tecnology: "",
      });
      setShouldReload(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          value={person.name}
          required
          onChange={({ target: { value } }) => handleState("name", value)}
        />
        <label>Nome</label>
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          value={person.tecnology}
          required
          onChange={({ target: { value } }) => handleState("tecnology", value)}
        />
        <label>Tecnologia</label>
      </InputContainer>
      <ButtonContainer>
        {loading ? (
          <Spin width={"25px"} height={"25px"} />
        ) : (
          <Button onClick={() => handleSubmit()}>Enviar</Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default UserForm;
