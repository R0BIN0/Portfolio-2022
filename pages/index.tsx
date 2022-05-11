import type { NextPage } from "next";
import {
  Container,
  TitleContainer,
  Title,
  Flex,
} from "../styles/Global/Global.styles";

// Components
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  return (
    <Container maxWidth="1250px">
      <Container maxWidth="1024px">
        <TitleContainer margin="4rem 0 0 0">
          <Title>
            Bonjour, je suis <strong>Robin Blanquart</strong>. Jeune développeur
            passionné par le développement web et l’Ui/Ux Design.
          </Title>
          <ButtonLink txt="En savoir plus sur moi" href="/me" />
        </TitleContainer>
      </Container>
      <Container maxWidth="1024px">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexFlow={true}
          margin="4rem 0"
        >
          {[...Array(3)].map((_, i) => (
            <Card key={i} />
          ))}
        </Flex>
      </Container>
    </Container>
  );
};

export default Home;
