import React, { useState, Fragment } from 'react';
import Layout from 'antd/lib/layout';
// import { Route, Switch } from 'react-router-dom';
import Sidemenu from '../../components/Sidemenu';
import Navbar from '../../components/Navbar';
// import routes from '../../config/routes_config';

const { Header, Footer, Content } = Layout;

// const Analytics = React.lazy(() => import('../../views/Analytics'));
const PrivateRoutes = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Fragment>
      <Layout>
        <Sidemenu isCollapsed={isCollapsed} />
        <Layout className="site-layout">
          <Header>
            <Navbar toggle={toggle} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            Content
          </Content>
          <Layout>
            <span>dashboard</span>
            {/* <Suspense>
              <Switch>
                <Route exact path={routes.analytics.url} component={Analytics} />
              </Switch>
            </Suspense> */}
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default PrivateRoutes;
