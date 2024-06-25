import React from "react";
import * as s from "./styles";

const BurgerMenuBtn = ({
  setMobileMenuOpen,
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div css={s.burgerMenuCss}>
      <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <div css={s.burgerIconContainerCss}>
          <div className={`burger-container ${isMobileMenuOpen ? "open" : ""}`}>
            <div className={"burger"}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default BurgerMenuBtn;
