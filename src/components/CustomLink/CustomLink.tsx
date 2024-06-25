import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";

type CustomLinkProps = {
  label: string;
  href: string;
  underline?: boolean;
  children?: React.ReactNode;
};

const CustomLink = ({ label, href, underline, children }: CustomLinkProps) => {
  return href.slice(0, 4) === "http" ? (
    <a
      href={href}
      css={s.linkCss(underline)}
      target={"_blank"}
      rel="noreferrer"
    >
      {label}
    </a>
  ) : (
    <Link to={href} css={s.linkCss(underline)}>
      {label || children}
    </Link>
  );
};

export default CustomLink;
