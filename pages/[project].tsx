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
} from "../styles/PagesStyles/project.styles";

// Images
import React from "../assets/images/React.png";

// Components
import TopProject from "../components/TopProject/TopProject";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";

// Data
import { projectsHome } from "../data/projects";

// Types
import { ProjectHome } from "../config/types";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import { IconContainer } from "../styles/PagesStyles/project.styles";

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
