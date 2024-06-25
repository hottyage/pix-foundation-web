import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { useWeb3React } from "@web3-react/core";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useUser } from "./api/swr/useUser";
import { injected } from "./helpers/connectors";
import RootLayout from "./components/RootLayout/RootLayout";
import { NoAuthDashboard } from "./components/pages/Dashboard/NoAuthDashboard/NoAuthDashboard";
import DashboardWrapper from "./components/pages/DashboardWrapper/DashboardWrapper";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landmarks from "./components/pages/Landmarks/Landmarks";
import Territories from "./components/pages/Territories/Territories";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [is18Init, setIs18Init] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const { mutate } = useUser();
  const { active, account, activate } = useWeb3React();
  async function connectWeb3() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const walletconnect = new WalletConnectConnector({
    rpc: {
      1: "https://polygon-mumbai.infura.io/v3/efcfd900e2f64994937857c9ba0c1894",
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

  useEffect(() => {
    if (active) {
      mutate(account, false);
    }
  }, [account]);

  useEffect(() => {
    i18n.use(initReactI18next).use(Backend).use(LanguageDetector).init({
      // lng: "en",
      fallbackLng: "en",
      //
      // interpolation: {
      //   escapeValue: false,
      // },
    });
    setIs18Init(true);

    const connect = async (type: string | null) => {
      try {
        await activate(type === "MetaMask" ? injected : walletconnect);
      } catch (e) {
        console.log(e);
      } finally {
        setIsAuth(true);
      }
    };

    if (localStorage.getItem("LAST_WALLET_USED")) {
      connect(localStorage.getItem("LAST_WALLET_USED"));
    } else {
      setIsAuth(true);
    }
  }, []);

  if (!is18Init || !isAuth) {
    return <div>Loading</div>;
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div>
        <ToastContainer />
        <HashRouter>
          <RootLayout connectWeb3={connectWeb3} account={account}>
            <Switch>
              <PrivateRoute
                path={"/"}
                exact
                component={NoAuthDashboard}
                type={"guest"}
              />
              <PrivateRoute
                component={DashboardWrapper}
                path={"/dashboard"}
                type="user"
              />
              <PrivateRoute
                component={Landmarks}
                path={"/landmarks"}
                type="user"
              />
              <PrivateRoute
                component={Territories}
                path={"/territories/:type"}
                type="user"
              />
              <Route path={"/"}>
                <Redirect to={"/"} />
              </Route>
            </Switch>
            <ScrollToTop />
          </RootLayout>
        </HashRouter>
      </div>
    </Suspense>
  );
}

export default App;

declare global {
  interface String {
    capitalize(): string;
  }
}
String.prototype.capitalize = function () {
  return this?.charAt(0)?.toUpperCase() + this?.slice(1);
};
