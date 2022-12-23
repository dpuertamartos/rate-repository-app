import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';

import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-dom";


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white },
  form: {
    padding: 20
  },
  submit: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    marginVertical: 10
  }
});
const initialValues = {
  username: "",
  password: ""
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View>
          <Text style={styles.submit}>Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};



const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory()
  
  
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;