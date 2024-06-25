import { css } from "@emotion/react";

export const mainWrapCss = (headerOnTop: boolean) => css`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  backdrop-filter: blur(13px);
  border-bottom: 1px solid
    ${headerOnTop ? "transparent" : "rgba(39, 39, 42, 1)"};
  transition: border-color 0.3s ease-in-out;
  z-index: 500;
`;

export const baseCss = css`
  margin: 0 auto;
  max-width: 1440px;
  padding: 16px 166px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  z-index: 10;
  @media (max-width: 1024px) {
    padding: 16px 83px;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const colCss = css`
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const navColCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
  max-width: 577px;
  margin-left: 25px;
  @media (max-width: 990px) {
    margin-left: auto;
    max-width: 110px;
  }
`;

export const linkCss = css`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  @media (max-width: 990px) {
    height: 40px;
    width: 40px;
    & > svg {
      height: 40px;
      width: 40px;
    }
  }
`;

export const selectContainerCss = css`
  display: block;
  margin-left: 13px;
  width: 127px;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const navLinkCss = css`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(249, 249, 249, 0.5);
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const notificationBtnCss = css`
  height: 19px;
  width: 21px;
  cursor: pointer;
  & > svg {
    height: 19px;
    width: 21px;
  }
`;
export const connectBtn = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  text-transform: none;
  letter-spacing: unset;
  padding: 8px 16px;
  @media (max-width: 1177px) {
    padding: 8px;
  }
  & > svg {
    margin-right: 8px;
    @media (max-width: 1177px) {
      margin-right: 0;
    }
  }
  & > div > svg {
    margin-left: 8px;
    @media (max-width: 1177px) {
      margin-left: 8px;
    }
  }
  & div {
    display: flex;
    align-items: center;
  }
  & p {
    @media (max-width: 1177px) {
      display: none;
    }
  }
`;

export const mobileMenuWrapCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(13px);
  z-index: 60;
`;

export const mobileMenuContainer = css`
  width: 75%;
  height: 100%;
  margin-left: auto;
  padding: 14px 23px;
  background-color: #1d1d20;
  display: flex;
  flex-direction: column;
`;

export const mobileNavHeader = css`
  display: flex;
  justify-content: space-between;
  & > svg {
    height: 40px;
    width: 40px;
  }
  & > button {
    border: none;
    background-color: transparent;
  }
`;

export const mobileNavList = css`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  & > a {
    margin: 0 auto 14px auto;
    width: 100%;
    max-width: 200px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(249, 249, 249, 0.5);
    background-color: transparent;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
  }
`;

export const burgerMenuCss = css`
  display: none;
  z-index: 60;
  & > button {
    border: 0;
    background: transparent;
  }
  @media (max-width: 860px) {
    display: flex;
  }
`;

export const burgerIconContainerCss = css`
  .burger-container {
    margin-left: 8px;
    position: relative;
    width: 24px;
    height: 24px;
  }
  .burger {
    cursor: pointer;
    display: block;
    height: 24px;
    width: 24px;
    padding: 4px 3px;
  }
  .burger span {
    background: #bdbfc2;
    display: block;
    width: 18px;
    height: 1px;
    margin-bottom: 4px;
    position: relative;
    top: 0;
    transition: all ease-in-out 0.4s;
  }
  .burger-container.open span:nth-of-type(2),
  .burger-container.open span:nth-of-type(3) {
    width: 0;
    opacity: 0;
  }
  .burger-container.open span:nth-of-type(1) {
    transform: rotate(-45deg);
    top: 7px;
    height: 2px;
    width: 20px;
  }
  .burger-container.open span:nth-of-type(4) {
    transform: rotate(45deg);
    top: -9px;
    height: 2px;
    width: 20px;
  }
`;
