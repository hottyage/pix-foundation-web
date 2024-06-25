import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { TERRITORIES_TYPES } from "../../../constants/constants";
import Territory from "./Territory/Territory";

const Territories = () => {
  const { type } = useParams<{ type: string }>();

  if (!TERRITORIES_TYPES[type]) {
    return <Redirect to={"/territories/outliers"} />;
  }

  return <Territory territory={type} />;
};

export default Territories;
