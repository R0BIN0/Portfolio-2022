// General
import { FC } from "react";
import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";

// Styles
import {
  Container,
  TitleContainer,
  Title,
  Flex,
  LineContainer,
} from "../styles/Global/Global.styles";

import { CardContainer } from "../styles/PagesStyles/index.styles";

// Components
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Card from "../components/Card/Card";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";

// Data
import { projectsHome } from "../data/projects";

// Type

type RenderList = {
  filter: string;
};

const Home: NextPage = () => {
  const RenderItems: FC<RenderList> = ({ filter }): JSX.Element => (
    <>
      {projectsHome
        .filter((item) => item.year.includes(filter))
        .map((item, i) => (
          <Card key={uuidv4()} id={i} {...item} />
        ))}
    </>
  );

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

        <Container maxWidth="1024px" padding="3rem">
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
              <RenderItems filter="2022" />
              <div className="card-separation">
                <RenderItems filter="2021" />
              </div>
            </Flex>
          </CardContainer>

          <Flex justifyContent="center" alignItems="center" margin="2rem 0">
            <ButtonGithub
              txt="Plus de projets"
              href="https://github.com/R0BIN0"
            />
          </Flex>
        </Container>
      </LineContainer>
    </>
  );
};

export default Home;
