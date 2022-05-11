import type { NextPage } from "next";
import { Container, Title } from "../styles/Global/Global.styles";

const Home: NextPage = () => {
  return (
    <Container maxWidth="1250px">
      <Container maxWidth="1024px">
        <Title>
          Bonjour, je suis <strong>Robin Blanquart</strong>. Jeune développeur
          passionné par le développement web et l’Ui/Ux Design.
        </Title>
      </Container>
    </Container>
  );
};

export default Home;
