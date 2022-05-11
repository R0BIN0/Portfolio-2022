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
};

const ButtonLink: FC<Props> = ({ txt, href }) => {
  return (
    <Link href={href}>
      <CustomLink>
        <Flex justifyContent="center" alignItems="center">
          {txt}
          <div className="link-arrow"></div>
        </Flex>
      </CustomLink>
    </Link>
  );
};

export default ButtonLink;
