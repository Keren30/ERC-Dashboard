import React, { Suspense, Fragment } from 'react';
import Spin from 'antd/lib/spin';
import { Route, Switch } from 'react-router-dom';
import routes from '../../config/routes_config';

const Login = React.lazy(() => import('../../views/Login'));
const ForgotPassword = React.lazy(() => import('../../views/ForgotPassword'));
const PrivateRoutes = React.lazy(() => import('../PrivateRoutes'));

const PublicRoutes = () => (
  <Fragment>
    <Suspense
      fallback={
        <div
          style={{
            height: '100vh',
            width: '100%',
            textAlign: 'center',
            paddingTop: 'calc(50vh - 7px)'
          }}
        >
          <Spin tip="Loading, please wait..."></Spin>
        </div>
      }
    >
      <Switch>
        <Route exact path={routes.login.url} component={Login} />
        <Route exact path={routes.forgetPassword.url} component={ForgotPassword} />
        <Route exact path={routes.dashboard.url} component={PrivateRoutes} />
      </Switch>
    </Suspense>
  </Fragment>
);

export default PublicRoutes;
