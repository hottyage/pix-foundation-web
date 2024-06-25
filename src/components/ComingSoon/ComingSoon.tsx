import React from "react";
import { Block } from "../ui/Block/Block";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Block addCss={css(`padding: 20px 24px;`)}>
        <p>{t("dashboard.coming-soon")}</p>
      </Block>
    </div>
  );
};

export default ComingSoon;
