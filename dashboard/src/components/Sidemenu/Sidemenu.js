import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from 'antd/lib/menu';
import Layout from 'antd/lib/layout';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidemenu = ({ isCollapsed }) => (
  <Fragment>
    <Layout>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  </Fragment>
);
Sidemenu.propTypes = { isCollapsed: PropTypes.any };

export default Sidemenu;
