import React from "react";
import Countdown from "react-countdown";
import * as s from "./styles";
import { Trans } from "react-i18next";

export const Timer = ({ date }: any) => {
  const options = { month: "long", day: "numeric" };
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, completed }) => {
        if (completed) {
          return null;
        } else {
          return (
            <div>
              <div css={s.containerCss}>
                {days}d {hours}h {minutes}m
              </div>
              <div css={s.labelsCss}>
                <Trans
                  i18nKey="dashboard.rewards.timer.label"
                  values={{
                    date: date.toLocaleString("en-US", options),
                  }}
                  components={{ span: <span /> }}
                />
              </div>
            </div>
          );
        }
      }}
    />
  );
};
