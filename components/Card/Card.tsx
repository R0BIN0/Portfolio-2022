// General
import Image from "next/image";
import Link from "next/link";

// Styles
import { CardBox, CardLeft, CardRight } from "./Card.styles";
import { Flex } from "../../styles/Global/Global.styles";

// Images
import testImg from "../../assets/images/Frame1.png";
import react from "../../assets/images/React.png";

const Card = () => {
  return (
    <>
      <Link href="/project/1">
        <CardBox>
          <CardLeft>
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              flexFlow={true}
            >
              <div>
                <p className="card-top-title">Site e-commerce</p>
                <h2 className="card-title">Mobile-Movie-App</h2>
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
