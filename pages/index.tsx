// General
import type { NextPage } from "next";

// Styles
import {
  Container,
  TitleContainer,
  Title,
  Flex,
} from "../styles/Global/Global.styles";

import {
  LineContainer,
  CardContainer,
} from "../styles/PagesStyles/index.styles";

// Components
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  return (
    <>
      <LineContainer>
        <div className="line-border">
          <div className="line-absolute">
            <Flex justifyContent="center" alignItems="center">
              <p className="line-title">Work</p>
              <div className="line-arrow"></div>
            </Flex>
          </div>
        </div>

        <Container maxWidth="1024px" padding="4rem">
          <TitleContainer>
            <Title>
              Bonjour, je suis <strong>Robin Blanquart</strong>. Jeune
              développeur passionné par le développement web et l’Ui/Ux Design.
            </Title>
            <ButtonLink txt="En savoir plus sur moi" href="/me" />
          </TitleContainer>

          <CardContainer>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexFlow={true}
              margin="4rem 0 0 0"
            >
              {[...Array(3)].map((_, i) => (
                <Card key={i} id={i} />
              ))}
            </Flex>
          </CardContainer>
        </Container>
      </LineContainer>
    </>
  );
};

export default Home;
