import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: 'Name',
  email: 'E-Mail-Adresse',
  message: 'hier bitte die Nachricht eintragen',
};

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

const handleSubmit = async (values, { setSubmitting }) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false);
};
const MyForm = ({ isSubmitting }) => (
  <Form style={{ display: 'flex', flexDirection: 'column'}}>
    <Field type="text" name="name" />
    <ErrorMessage name="name" component="div" />
    <Field type="email" name="email" />
    <ErrorMessage name="email" component="div" />
    <Field component="textarea" name="message" />
    <ErrorMessage name="message" component="div" />
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const Kontakt = () => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => <MyForm isSubmitting={isSubmitting} />}
  </Formik>
);


export default Kontakt;
