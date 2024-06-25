import React from "react";
import * as s from "./styles";
import { ReactComponent as Checkmark } from "../../../static/assets/svg/checkmark.svg";

export const CheckBox = ({
  checked,
  setChecked,
  label,
}: {
  checked: boolean;
  setChecked: () => void;
  label: any;
}) => {
  return (
    <label css={s.container}>
      <input
        css={s.input}
        type="checkbox"
        checked={checked}
        onChange={setChecked}
      />
      <span css={s.span}>
        <div className={"checkmark"} style={{ opacity: checked ? 1 : 0 }}>
          <Checkmark />
        </div>
      </span>
      <div css={s.paragraph(checked)}>{label}</div>
    </label>
  );
};
