// General
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
import { TopProjectProps } from "../../config/types";

const TopProject: FC<TopProjectProps> = ({
  firstTitle,
  site,
  description,
  image,
  backgroundColor,
  route,
}) => {
  const ease = [0.7, 0, 0.15, 1];

  const animation: Variants = {
    ...(route && {
      hidden: {
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translateY(100vh)",
      },
      exit: {
        transform: "translateY(0vh)",
        transition: {
          duration: 1.5,
          ease: ease,
        },
      },
    }),
  };

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <motion.div
      initial="hidden"
      exit="exit"
      variants={animation}
      style={{ width: "100%", backgroundColor: "#FFF", zIndex: 1000 }}
    >
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
            <ButtonLink external={true} txt="Visiter le site" href={site} />
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
    </motion.div>
  );
};

export default TopProject;
