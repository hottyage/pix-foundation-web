import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import * as s from "./styles";
import { Block } from "../ui/Block/Block";
import { css } from "@emotion/react";
import { useWeb3React } from "@web3-react/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LogoutModal = ({ onClose }: { onClose: () => void }) => {
  const modalContainerRef = useRef(null);
  useOnClickOutside(modalContainerRef, onClose);
  const { deactivate, account } = useWeb3React();

  return (
    <div css={s.mainWrap} ref={modalContainerRef}>
      <Block
        addCss={css`
          padding: 10px;
          background-color: #1d1d20; ;
        `}
      >
        <div>
          <CopyToClipboard text={account || ""}>
            <p
              css={css`
                padding: 10px;
                cursor: pointer;
                border-radius: 5px;
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                }
              `}
            >
              Copy address
            </p>
          </CopyToClipboard>
          <p
            css={css`
              padding: 10px;
              cursor: pointer;
              border-radius: 5px;
              &:hover {
                background: rgba(255, 255, 255, 0.1);
              }
            `}
            onClick={() => {
              localStorage.removeItem("LAST_WALLET_USED");
              deactivate();
              onClose();
            }}
          >
            Logout
          </p>
        </div>
      </Block>
    </div>
  );
};

export default LogoutModal;
