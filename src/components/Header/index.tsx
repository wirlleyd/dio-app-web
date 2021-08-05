import React from "react";

import { Container, ImageContainer, Image } from "./styles";
import EverisLogo from "../../assets/images/everis-logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={EverisLogo} />
      </ImageContainer>
    </Container>
  );
};

export default Header;
