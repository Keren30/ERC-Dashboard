import React, { Fragment } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';
import { Formik } from 'formik';
import Form from 'formik-antd/lib/form';
import Input from 'formik-antd/lib/input';
import Text from 'antd/lib/typography/Text';
// import Button from 'antd/lib/button';
import { initialValues, validationSchema } from './validations';
import routes from '../../config/routes_config';

/**
 * Component representing Login page
 * @author Gladys INABEZA
 * @since March 2021
 */

const Login = () => (
  <Fragment>
    <Layout>
      <Row style={{ height: '100vh' }}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} className="bg_dark_gray">
          Yes
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="bg_white">
          <Text>Login to system</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={({ email, password }) => {
              // eslint-disable-next-line no-console
              console.log(email, password);
            }}
          >
            {({ errors, touched }) => (
              <Form name="login">
                <Form.Item
                  name="email"
                  validateStatus={errors.email && touched.email ? 'error' : ''}
                  help={touched.email && errors.email && errors.email}
                >
                  <Text>Email</Text>
                  <Input type="email" name="email" placeholder="abcd@domain.com" />
                </Form.Item>
                <Form.Item
                  name="password"
                  validateStatus={errors.password && touched.password ? 'error' : ''}
                  help={touched.password && errors.password && errors.password}
                >
                  <Text>Password</Text>
                  <Input type="password" name="password" placeholder="........" />
                </Form.Item>
                <Form.Item name="loginButton">
                  <a
                    size="large"
                    htmlType="submit"
                    className="snap_primary_btn snap_btn_full"
                    href={routes.dashboard.url}
                  >
                    Login
                  </a>
                </Form.Item>
                <Form.Item name="forgotButton" className="mabo16">
                  <a className="snap_link_btn" href={routes.forgetPassword.url}>
                    Forgot password?
                  </a>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Layout>
  </Fragment>
);

export default Login;
