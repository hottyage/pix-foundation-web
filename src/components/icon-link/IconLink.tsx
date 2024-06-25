import React from "react";
import { css } from "@emotion/react";

const IconLink = ({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: any;
  label: string;
}) => {
  return (
    <a
      href={href}
      css={css`
        font-family: Inter;
        margin-right: 25px;
        font-style: normal;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: rgba(249, 249, 249, 0.75);
      `}
    >
      <span
        css={css`
          margin-right: 10px;
        `}
      >
        {label}
      </span>
      <Icon
        css={css`
          opacity: 0.75;
        `}
      />
    </a>
  );
};

export default IconLink;
