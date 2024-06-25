import React from "react";
import * as s from "./styles";
import { ReactComponent as ArrowRight } from "../../../static/assets/svg/arrow-right.svg";

type InputPropsTypes = {
  placeholder?: string;
  value: string | number;
  error?: string;
  withPostfix?: boolean;
  addCss?: any;
};

export default function EmailInput({
  placeholder,
  value,
  error,
  withPostfix,
  addCss,
  ...props
}: InputPropsTypes &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) {
  return (
    <form
      action="https://planetix.us5.list-manage.com/subscribe/post?u=a359f75b2ba320af13a76821b&amp;id=7b633ba5af"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div css={[s.base(!!error), addCss]}>
        <input
          id="mce-EMAIL"
          type="email"
          name="EMAIL"
          required
          value={value}
          placeholder={placeholder}
          {...props}
        />
        <button>
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}

//{error && <div className={s.errorCss}>{error}</div>}
