// General
import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

// Styles
import { CardBox, CardYear, CardLeft, CardRight } from "./Card.styles";
import { Flex } from "../../styles/Global/Global.styles";
import ImgLoader from "../ImgLoader/ImgLoader";

// Types

type Props = {
  id: number;
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image: string;
  backgroundColor: string;
};

const Card: FC<Props> = ({
  id,
  href,
  year,
  type,
  title,
  technologies,
  image,
  backgroundColor,
}) => {
  const [imgLoad, setImgLoad] = useState(false);

  return (
    <>
      <Link href={`/${href}`}>
        <CardBox backgroundColor={backgroundColor}>
          {id === 0 && (
            <CardYear>
              <Flex justifyContent="space-between" alignItems="center">
                <p>{year}</p>
                <div className="line"></div>
              </Flex>
            </CardYear>
          )}
          <CardLeft>
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              flexFlow={true}
            >
              <div>
                <p className="card-top-title">{type}</p>
                <h2 className="card-title">{title}</h2>
              </div>
              <div>
                <p className="technologies-title">Technologies</p>
                <Flex justifyContent="flex-start" alignItems="center">
                  {technologies.map((item) => (
                    <div key={uuidv4()} className="icon-container">
                      <Image src={item} />
                    </div>
                  ))}
                </Flex>
              </div>
            </Flex>
          </CardLeft>
          <CardRight>
            <div className="img-container">
              {imgLoad && <ImgLoader backgroundColor={backgroundColor} />}
              {image && (
                <Image
                  src={image}
                  alt="pages des différents projets"
                  layout="fill"
                  objectFit="cover"
                  quality={20}
                  onLoadingComplete={() => setImgLoad(true)}
                />
              )}
            </div>
          </CardRight>
        </CardBox>
      </Link>
    </>
  );
};

export default Card;
