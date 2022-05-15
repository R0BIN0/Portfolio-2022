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

// Components
import ButtonLink from "../ButtonLink/ButtonLink";

// Types

type Props = {
  firstTitle: string;
  site: string;
  description: string;
  image: string;
};

const TopProject: FC<Props> = ({ firstTitle, site, description, image }) => {
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
            <Title>{firstTitle}</Title>
            <ButtonLink txt="Visiter le site" href={site} />
          </TitleContainer>
          <Text margin="2.5rem 0 0 0" maxWidth="525px">
            {description}
          </Text>
        </Container>
      </LineContainer>
      <ImageContainer>
        <Image
          src={image}
          width={1920}
          height={1080}
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={true}
          placeholder="blur"
          blurDataURL="red"
        />
      </ImageContainer>
    </>
  );
};

export default TopProject;
