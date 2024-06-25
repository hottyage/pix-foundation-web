import React from "react";
import * as s from "./styles";
import { Heading } from "../../ui/Heading/Heading";
import { Subtitle } from "../../ui/Subtitle/Subtitle";
import { useTranslation } from "react-i18next";
import Landmark from "./Landmark/Landmark";

const Landmarks = () => {
  const { t } = useTranslation();
  return (
    <div css={s.mainWrapCss}>
      <Heading
        label={t("landmarks.heading").capitalize()}
        variant={"large"}
        marginBottom={5}
      />
      <Subtitle
        label={t("landmarks.subtitle").capitalize()}
        variant={"large"}
        marginBottom={34}
      />
      <div css={s.landmarksWrapCss}>
        <Landmark />
      </div>
    </div>
  );
};

export default Landmarks;
