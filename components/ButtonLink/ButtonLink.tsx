// General
import { FC } from "react";
import Link from "next/link";

// Styles
import { CustomLink } from "./ButtonLink.styles";
import { Flex } from "../../styles/Global/Global.styles";

// Types

type Props = {
  txt: string;
  href: string;
  external?: boolean;
  action?: () => void;
};

const ButtonLink: FC<Props> = ({ txt, href, external, action }) => {
  return (
    <>
      {external ? (
        <CustomLink href={href} target="_blank">
          <Flex justifyContent="center" alignItems="center">
            {txt}
            <div className="link-arrow"></div>
          </Flex>
        </CustomLink>
      ) : (
        <Link href={href}>
          <CustomLink onClick={action}>
            <Flex justifyContent="center" alignItems="center">
              {txt}
              <div className="link-arrow"></div>
            </Flex>
          </CustomLink>
        </Link>
      )}
    </>
  );
};

export default ButtonLink;
