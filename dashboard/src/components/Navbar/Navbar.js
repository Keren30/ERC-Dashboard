import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout';

const { Header } = Layout;
const Navbar = ({ isCollapsed, toggle }) => (
  <Fragment>
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {isCollapsed ? (
        <MenuUnfoldOutlined onClick={toggle} className="trigger" />
      ) : (
        <MenuFoldOutlined onClick={toggle} className="trigger" />
      )}
    </Header>
  </Fragment>
);
Navbar.propTypes = { isCollapsed: PropTypes.any, toggle: PropTypes.any };

export default Navbar;
