import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useUser } from "../../api/swr/useUser";
import { useWeb3React } from "@web3-react/core";

type PrivateRouteType = {
  component: any;
  path: string;
  type?: "user" | "guest";
  componentProps?: any;
};

const PrivateRoute = (props: PrivateRouteType & RouteProps) => {
  const {
    path,
    component: Component,
    location,
    type,
    componentProps,
    ...rest
  } = props;

  const { User } = useUser();
  const { active } = useWeb3React();

  const isAuth = !!User && !!active;

  if (type === "guest" && isAuth) {
    return <Redirect to="/dashboard" />;
  }

  if (type === "user" && !isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location?.pathname },
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        //   <div className={"h-full"}>
        //     <Helmet>
        //       <title>Hajpy / {titleRender(location?.pathname || "")}</title>
        // <meta name="description" content="Nested component" />
        //   </Helmet>
        <Component {...routeProps} {...componentProps} />
        // </div>
      )}
    />
  );
};

export default PrivateRoute;
