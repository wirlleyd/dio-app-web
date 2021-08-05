import Home from "./pages/Home";
import Header from "./components/Header";
import { Container, Content } from "./styles";

function App() {
  return (
    <Container>
      <Content>
        <Header />
        <Home />
      </Content>
    </Container>
  );
}

export default App;
