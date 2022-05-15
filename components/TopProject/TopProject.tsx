// General
import { FC, useState } from "react";
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
import ImgLoader from "../ImgLoader/ImgLoader";

// Types

type Props = {
  firstTitle: string;
  site: string;
  description: string;
  image: string;
  backgroundColor: string;
};

const TopProject: FC<Props> = ({
  firstTitle,
  site,
  description,
  image,
  backgroundColor,
}) => {
  const [imgLoad, setImgLoad] = useState(false);

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
        {!imgLoad && <ImgLoader backgroundColor={backgroundColor} />}
        <Image
          src={image}
          alt="pages des différents projets"
          layout="fill"
          objectFit="cover"
          quality={50}
          priority
          onLoadingComplete={() => setImgLoad(true)}
        />
      </ImageContainer>
    </>
  );
};

export default TopProject;
