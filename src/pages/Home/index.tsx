import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

import UserForm from "../../containers/UserForm";
import UserList from "../../containers/UserList";

import { Person } from "../../dtos/person";

const Home: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [shouldReload, setShouldReload] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get("/person");
      setPersons(data);
      setLoading(false);
      setShouldReload(false);
    }
    if (shouldReload) {
      fetchData();
    }
  }, [shouldReload]);

  return (
    <Container>
      <UserForm setShouldReload={setShouldReload} />
      <UserList persons={persons} loading={loading} />
    </Container>
  );
};

export default Home;
