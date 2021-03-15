import React, { Fragment } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';
import { Formik } from 'formik';
import Form from 'formik-antd/lib/form';
import Input from 'formik-antd/lib/input';
import Text from 'antd/lib/typography/Text';
import Button from 'antd/lib/button';
import { initialValues, validationSchema } from './validation';

const ForgotPassword = () => (
  <Fragment>
    <Layout>
      <Row style={{ height: '100vh' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="bg_white">
          <Text>Forgot Password</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={({ email }) => {
              // eslint-disable-next-line no-console
              console.log(email);
            }}
          >
            {({ errors, touched }) => (
              <Form name="forgotPassword">
                <Form.Item
                  name="email"
                  validateStatus={errors.email && touched.email ? 'error' : ''}
                  help={touched.email && errors.email && errors.email}
                >
                  <Text>Email</Text>
                  <Input type="email" name="email" placeholder="abcd@domain.com" />
                </Form.Item>

                <Form.Item name="forgotButton">
                  <Button size="large" htmlType="submit" className="snap_primary_btn snap_btn_full">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Layout>
  </Fragment>
);

export default ForgotPassword;
