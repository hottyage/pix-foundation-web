import { css } from "@emotion/react";
import { flex } from "../pages/Dashboard/NoAuthDashboard/styles";

export const blockCss = css`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding: 24px 0 0 0;
  overflow: hidden;
`;

export const labelCss = (isLoading: boolean) => css`
  border-bottom: 1px solid rgba(249, 249, 249, 0.08);
  padding: 0;
  height: 100%;
  animation: ${isLoading ? "pulse 2s infinite ease-in-out" : "none"};
  width: ${isLoading ? "350px" : "auto"};
  height: ${isLoading ? "250px" : "auto"};
  & > h4 {
    padding-left: 24px;
    display: ${isLoading ? "none" : "block"};
  }
  & > img {
    display: ${isLoading ? "none" : "block"};
    width: 350px;
    height: 205px;
    object-fit: contain;
  }

  @keyframes pulse {
    0% {
      background-color: #222;
    }

    50% {
      background-color: #333;
    }

    100% {
      background-color: #222;
    }
  }
`;

export const amountWrapperCss = css`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px 24px;
`;

export const amountCss = css`
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 6px;
    height: 20px;
    width: 20px;
  }
`;

export const footerWrapCss = css`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

export const earnBlockCssSkel = (isLoading: boolean) => css`
  height: 26px;
  width: 80px;
  animation: pulse 2s infinite ease-in-out;
  display: ${!isLoading ? "none" : flex};
  border-radius: 5px;
`;

export const StatSkel = (isLoading: boolean) => css`
  height: 26px;
  width: 80px;
  animation: pulse 2s infinite ease-in-out;
  display: ${!isLoading ? "none" : "block"};
  border-radius: 5px;
`;

export const earnBlockCss = (isLoading: boolean) => css`
  align-items: center;
  display: ${isLoading ? "none" : "flex"};
  & > svg {
    margin-left: 6px;
    height: 20px;
    width: 20px;
  }
`;

export const claimBlockCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const statsRowCss = (marginBottom: number, isLoading: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${marginBottom}px;
  & > h4 {
    display: ${isLoading ? "none" : "block"};
    border-radius: ${isLoading ? "5px" : "0px"};
  }
`;

export const navCss = css`
  display: flex;
  & div:first-of-type {
    margin-right: 19px;
  }
`;
