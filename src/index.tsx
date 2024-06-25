import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
//"https://polygon-mumbai.infura.io/v3/efcfd900e2f64994937857c9ba0c1894"
function getLibrary(provider: any) {
  return new Web3(provider);
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
