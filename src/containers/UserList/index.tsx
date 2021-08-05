import React from "react";

import { Container, Header, UserTec, SpinContainer } from "./styles";

import Spin from "../../components/Spin";

import { Person } from "../../dtos/person";

interface IProps {
  persons: Person[];
  loading: boolean;
}

const UserList: React.FC<IProps> = ({ persons, loading }) => {
  return (
    <>
      {loading ? (
        <SpinContainer>
          <Spin width={"50px"} height={"50px"} />
        </SpinContainer>
      ) : (
        <Container>
          <Header>
            <div>
              <span>Nome</span>
            </div>
            <div>
              <span>Tecnologia</span>
            </div>
          </Header>
          {persons.map((person) => (
            <UserTec key={person.id}>
              <div>
                <span>{person.name}</span>
              </div>
              <div>
                <span>{person.tecnology}</span>
              </div>
            </UserTec>
          ))}
        </Container>
      )}
    </>
  );
};

export default UserList;
