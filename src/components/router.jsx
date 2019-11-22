import React from "react";
import {
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import * as PATHS from "../assets/constants/pathnames";
import { useAuthDataContext } from "./context/authDataProvider";

import Homepage from "../containers/homepage";
import ExampleUseEffect from "../containers/example_useEffect";
import ExampleUseRef from "../containers/example_useRef";
import MySetting from "../containers/setting";
import Page404 from "../containers/404page";

const PrivateRoute = ({ component, ...options }) => {
  const { authData } = useAuthDataContext();
  const finalComponent = !authData ? Homepage : component;

  return <Route {...options} component={finalComponent} />;
};

const Router = () => (
  <Switch>
    {/* <Redirect from={PATHS.HOME} to={PATHS.USE_EFFECT} /> */}
    <Route exact path={PATHS.HOME} component={Homepage} />
    <Route path={PATHS.USE_EFFECT} component={ExampleUseEffect} />
    <Route path={PATHS.USE_REF} component={ExampleUseRef} />

    <PrivateRoute path={PATHS.SETTING} component={MySetting} />

    <Route component={Page404} />
  </Switch>
);

export default Router;
