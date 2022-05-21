// General
import { FC, useState } from "react";
import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

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
import TopProject from "../components/TopProject/TopProject";

// Type
import { TopProjectProps } from "../config/types";

type RenderList = {
  filter: string;
};

const Home: NextPage = () => {
  const { pathname } = useRouter();

  const [clickedProject, setClickedProject] = useState<TopProjectProps>();

  const RenderItems: FC<RenderList> = ({ filter }): JSX.Element => {
    const clickedProjectFunc = (obj: TopProjectProps): void => {
      setClickedProject(obj);
    };

    return (
      <>
        {projectsHome
          .filter((item) => item.year.includes(filter))

          .map((item, i) => (
            <div
              key={uuidv4()}
              onClick={() =>
                clickedProjectFunc({
                  firstTitle: item.firstTitle,
                  site: item.site,
                  description: item.description,
                  backgroundColor: item.backgroundColor,
                  image: item.image,
                })
              }
              style={{ width: "100%" }}
            >
              <Card
                id={i}
                href={item.href}
                year={item.year}
                type={item.type}
                title={item.title}
                technologies={item.technologies}
                image={item.image}
                backgroundColor={item.backgroundColor}
              />
            </div>
          ))}
      </>
    );
  };

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

      {clickedProject && <TopProject {...clickedProject} route={pathname} />}
    </>
  );
};

export default Home;
