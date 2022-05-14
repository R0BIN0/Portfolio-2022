// General
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

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

// Components
import TopProject from "../components/TopProject/TopProject";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";

// Data
import projects from "../data/projects";

// Types
import { Project } from "../config/types";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import { IconContainer } from "../styles/PagesStyles/project.styles";
import Link from "next/link";

type Props = {
  obj: Project;
};

const project: FC<Props> = ({ obj }) => {
  return (
    <>
      <TopProject
        firstTitle={obj.firstTitle}
        site={obj.site}
        description={obj.description}
        image={obj.image}
      />
      <Container maxWidth="1024px" padding="6rem">
        <TitleContainer>
          <Title>{obj.firstTitle}</Title>
        </TitleContainer>
        <TextContainer>
          <div>
            <TextTitle>Mon rôle</TextTitle>
            <Text>{obj.role}</Text>

            <ButtonContainer>
              <ButtonGithub txt="Code source" href={obj.github} />
              <ButtonLink txt="Visiter le site" href={obj.site} />
            </ButtonContainer>
          </div>
          <div>
            <TextTitle>Déroulement</TextTitle>
            <Text>{obj.process}</Text>
          </div>
        </TextContainer>
        <TextTitle>Technologies</TextTitle>
        <Flex justifyContent="flex-start" alignItems="center">
          {obj.technologies.map((item) => (
            <IconContainer key={uuidv4()}>
              <Image src={item} width={item.width} height={item.height} />
            </IconContainer>
          ))}
        </Flex>
      </Container>
      <Container maxWidth="1500px" padding="0 0 6rem 0">
        <BackgroundVideo backgroundColor={obj.backgroundColor}>
          <Flex justifyContent="center" alignItems="center">
            <video autoPlay muted loop>
              <source type="video/mp4" src={obj.video} />
            </video>
          </Flex>
        </BackgroundVideo>
      </Container>
      <Container maxWidth="1500px" padding="6rem 0">
        <Flex justifyContent="center" alignItems="center">
          <LinkProject>
            <Link href={obj.site}>
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
  const data: Project[] = projects;

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
  const data: Project[] = projects;
  const index: number = data.findIndex((item) => item.href === id);
  const obj = projects[index];

  return {
    props: { obj },
  };
};
