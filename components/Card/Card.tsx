// General
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import { CardBox, CardYear, CardLeft, CardRight } from "./Card.styles";
import { Flex } from "../../styles/Global/Global.styles";

// Images
import testImg from "../../assets/images/Frame1.png";
import react from "../../assets/images/React.png";

// Types

type Props = {
  id: number;
};

const Card: FC<Props> = ({ id }) => {
  return (
    <>
      <Link href="/project/1">
        <CardBox>
          {id === 0 && (
            <CardYear>
              <Flex justifyContent="space-between" alignItems="center">
                <p>2022</p>
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
                <p className="card-top-title">Application mobile</p>
                <h2 className="card-title">Movie App</h2>
              </div>
              <div>
                <p className="technologies-title">Technologies</p>
                <Flex justifyContent="flex-start" alignItems="center">
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                  <div className="icon-container">
                    <Image src={react} />
                  </div>
                </Flex>
              </div>
            </Flex>
          </CardLeft>
          <CardRight>
            <div className="img-container">
              <Image
                src={testImg}
                width="1652"
                height="811"
                layout="fill"
                objectFit="cover"
                quality={50}
              />
            </div>
          </CardRight>
        </CardBox>
      </Link>
    </>
  );
};

export default Card;
