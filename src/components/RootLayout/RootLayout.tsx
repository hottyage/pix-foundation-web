import React from "react";
import * as s from "./styles";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";

const RootLayout = ({
  children,
  connectWeb3,
  account,
}: {
  children: React.ReactNode;
  connectWeb3: any;
  account?: string | undefined | null;
}) => {
  return (
    <div css={s.baseCss}>
      <div css={s.containerCss}>
        <Header connectWeb3={connectWeb3} account={account} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
