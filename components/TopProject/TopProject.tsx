// General
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import {
  LineContainer,
  Flex,
  Container,
  TitleContainer,
  Title,
  Text,
} from "../../styles/Global/Global.styles";
import { ButtonBack, ImageContainer } from "./TopProject.styles";

// Images
import photoTest from "../../assets/images/Frame2.png";

// Components
import ButtonLink from "../ButtonLink/ButtonLink";

const TopProject: FC = () => {
  return (
    <>
      <LineContainer>
        <div className="line-border">
          <div className="line-absolute">
            <Flex justifyContent="center" alignItems="center">
              <p className="line-title">Project</p>
              <div className="line-arrow"></div>
            </Flex>
          </div>
        </div>

        <Link href="/">
          <ButtonBack>Retour</ButtonBack>
        </Link>

        <Container maxWidth="1024px" padding="6rem">
          <TitleContainer>
            <Title>
              E-Tech est un site e-commerce fictif de ventes de produits et
              périphériques d’ordinateur.
            </Title>
            <ButtonLink txt="Visiter le site" href="/me" />
          </TitleContainer>
          <Text margin="2.5rem 0 0 0" maxWidth="525px">
            Le but de ce projet a été d&apos;apprendre à manipuler les
            différents aspects de la programmation web : faire interagir le
            Front-end avec le Back-end et une base de données mais également
            d&apos;améliorer mon autonomie face aux difficultés rencontrées.
          </Text>
        </Container>
      </LineContainer>
      <ImageContainer>
        <Image
          src={photoTest}
          width={photoTest.width}
          height={photoTest.height}
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={true}
          placeholder="blur"
        />
      </ImageContainer>
      <Container padding="20rem"></Container>
    </>
  );
};

export default TopProject;
