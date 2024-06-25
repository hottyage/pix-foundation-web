import { css } from "@emotion/react";
import React from "react";

const CustomToast = ({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link?: { title: string; href: string };
}) => {
  return (
    <div
      css={css`
        padding: 16px;
      `}
    >
      <p
        css={css`
          font-size: 21px;
          margin-bottom: 8px;
          color: #fff;
        `}
      >
        {title}
      </p>
      <p
        css={css`
          font-size: 16px;
          color: rgba(249, 249, 249, 0.75);
          line-height: 24px;
          font-family: "Inter", sans-serif;
        `}
      >
        {text}
      </p>
      {link && (
        <div
          css={css`
            margin-top: 24px;
          `}
        >
          <a
            href={link.href}
            target={"_blank"}
            rel="noreferrer"
            css={css`
              text-decoration: none;
              color: #ff6647;
              font-size: 16px;
            `}
          >
            {link.title}
          </a>
        </div>
      )}
    </div>
  );
};

export default CustomToast;
