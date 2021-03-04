import React, { Suspense, Fragment } from "react";
import routes from "../../config/routes_config";
import Spin from "antd/lib/spin";
import { Route, Switch } from "react-router-dom";

const Login = React.lazy(() => import("../../views/Login"));

const PublicRoutes = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100%",
              textAlign: "center",
              paddingTop: "calc(50vh - 7px)",
            }}
          >
            <Spin tip="Loading, please wait..."></Spin>
          </div>
        }
      >
        <Switch>
          <Route exact path={routes.login.url} component={Login} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default PublicRoutes;
