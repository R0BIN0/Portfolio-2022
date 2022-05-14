// General
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

// Styles
import {
  Container,
  Flex,
  Text,
  TextTitle,
  Title,
  TitleContainer,
} from "../styles/Global/Global.styles";
import {
  TextContainer,
  ButtonContainer,
  BackgroundVideo,
  SwitchProject,
  LinkProject,
} from "../styles/PagesStyles/project.styles";

// Images
import React from "../assets/images/React.png";

// Videos

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const testVideo = require("../assets/videos/testportfolio.mp4");

// Components
import TopProject from "../components/TopProject/TopProject";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";

// Data
import { projectsHome } from "../data/projects";

// Types
import { ProjectHome } from "../config/types";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import { IconContainer } from "../styles/PagesStyles/project.styles";
import Link from "next/link";

type Props = {
  obj: ProjectHome;
};

const project: FC<Props> = ({ obj }) => {
  return (
    <>
      <TopProject />
      <Container maxWidth="1024px" padding="6rem">
        <TitleContainer>
          <Title>
            E-Tech représentait un énorme défi pour moi, n’ayant aucune notion
            de développement “back-end” Je me lançais un peu dans l’inconnu.
          </Title>
        </TitleContainer>
        <TextContainer>
          <div>
            <TextTitle>Mon rôle</TextTitle>
            <Text>
              Le but de ce projet a été d&apos;apprendre à manipuler les
              différents aspects de la programmation web : faire interagir le
              Front-end avec le Back-end et une base de données mais également
              d&apos;améliorer mon autonomie face aux difficultés rencontrées.
            </Text>

            <ButtonContainer>
              <ButtonGithub txt="Code source" href="/" />
              <ButtonLink txt="Visiter le site" href="/" />
            </ButtonContainer>
          </div>
          <div>
            <TextTitle>Déroulement</TextTitle>
            <Text>
              Le but de ce projet a été d&apos;apprendre à manipuler les
              différents aspects de la programmation web : faire interagir le
              Front-end avec le Back-end et une base de données mais également
              d&apos;améliorer mon autonomie face aux difficultés rencontrées.
            </Text>
          </div>
        </TextContainer>
        <TextTitle>Technologies</TextTitle>
        <Flex justifyContent="flex-start" alignItems="center">
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
          <IconContainer>
            <Image src={React} />
          </IconContainer>
        </Flex>
      </Container>
      <Container maxWidth="1500px" padding="0 0 6rem 0">
        <BackgroundVideo>
          <Flex justifyContent="center" alignItems="center">
            <video autoPlay muted loop>
              <source
                type="video/mp4"
                src={
                  "https://res.cloudinary.com/e-tech-test/video/upload/v1652532636/testportfolio_k9rlbw.mp4"
                }
              />
            </video>
          </Flex>
        </BackgroundVideo>
      </Container>
      <Container maxWidth="1500px" padding="6rem 0">
        <Flex justifyContent="center" alignItems="center">
          <LinkProject>
            <Link href="/">
              <a>Visiter le site</a>
            </Link>
          </LinkProject>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <SwitchProject textAlign="left">
              <div>
                <p>PROJET PRECEDENT</p>
                <h4>E-Tech (site e-commerce)</h4>
              </div>
            </SwitchProject>
          </Link>
          <Link href="/">
            <SwitchProject textAlign="right">
              <div>
                <p>PROJET SUIVANT</p>
                <h4>E-Tech (site e-commerce)</h4>
              </div>
            </SwitchProject>
          </Link>
        </Flex>
      </Container>
    </>
  );
};

export default project;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ProjectHome[] = projectsHome;

  const paths = data.map((item) => ({
    params: { project: String(item.href) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.project;
  const data: ProjectHome[] = projectsHome;
  const index: number = data.findIndex((item) => item.href === id);
  const obj = projectsHome[index];

  return {
    props: { obj },
  };
};
