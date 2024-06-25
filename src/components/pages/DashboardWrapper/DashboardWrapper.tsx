import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Territories from "../Territories/Territories";
import Trade from "../Trade/Trade";
import { AuthDashboard } from "../Dashboard/AuthDashboard/AuthDashboard";

// const web3 = new Web3(
//   "https://polygon-mumbai.infura.io/v3/efcfd900e2f64994937857c9ba0c1894"
// );
//
// const Contract = web3.eth.Contract;
const DashboardWrapper = () => {
  return (
    <Switch>
      <PrivateRoute
        component={AuthDashboard}
        path={"/dashboard"}
        exact
        type={"user"}
      />
      <PrivateRoute
        component={Territories}
        exact
        path={"/dashboard/territories/:type"}
        type="user"
      />
      <PrivateRoute
        component={Trade}
        exact
        path={"/dashboard/trade"}
        type="user"
      />
      <Route path={"/dashboard"}>
        <Redirect to={"/dashboard"} />
      </Route>
    </Switch>
  );
};

export default DashboardWrapper;
