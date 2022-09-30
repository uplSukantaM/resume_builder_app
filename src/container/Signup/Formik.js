import { Formik } from "formik";
import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Colors from "../../common/constants/Colors";
import TextField from "../../common/formfields/Textfield";
import ForSignUp from "./hooks";
import text from '../../common/constants/Text.json';
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";

const SignupFormik = () => {
  const { signupValidationSchema } = ForSignUp();
  const navigation = useNavigation();
  const [showPass, setShowPass] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const handelPassClick = () => {
    setShowPass(!showPass);
  };
  const handelCnfIconClick = () => {
    setShowCnfPassword(!showCnfPassword);
  };
  const handleSignUp = (data) => {
    console.log(data, "<<-- data");
  };

  return (
    <KeyboardAvoidingView style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Formik
        validateOnMount={true}
        validationSchema={signupValidationSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <VStack width="80%" space={4}>
              <FormControl isRequired isInvalid={errors.name && touched.name}>
                <TextField
                  size="lg"
                  placeholder="Enter name"
                  autoCapitalize="none"
                  onChangeText={handleChange("name")}
                  value={values.name}
                  px={3}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                />
                <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={errors.email && touched.email}>
                <TextField
                  size="lg"
                  placeholder="Enter email id"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  px={3}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                />
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={errors.password && touched.password}
              >
                <TextField
                  size="lg"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                  InputRightElement={
                    <Button
                      onPress={handelPassClick}
                      style={{
                        backgroundColor: Colors.TextFieldBgColor,
                        borderBottomWidth: 1,
                      }}
                      h="full"
                    >
                      {!showPass ? (
                        <Text style={styles.passShowingText}>Show</Text>
                      ) : (
                        <Text style={styles.passShowingText}>Hide</Text>
                      )}
                    </Button>
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={errors.confirmPassword && touched.confirmPassword}
              >
                <TextField
                  size="lg"
                  type={showCnfPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                  InputRightElement={
                    <Button
                      onPress={handelCnfIconClick}
                      style={{
                        backgroundColor: Colors.TextFieldBgColor,
                        borderBottomWidth: 1,
                      }}
                      h="full"
                    >
                      {!showCnfPassword ? (
                        <Text style={styles.passShowingText}>Show</Text>
                      ) : (
                        <Text style={styles.passShowingText}>Hide</Text>
                      )}
                    </Button>
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.confirmPassword}
                </FormControl.ErrorMessage>
              </FormControl>

              <HStack space={6} marginY={3} alignItems={"center"}>
                <Checkbox
                  size="lg"
                  value={check}
                  onChange={() => setCheck(!check)}
                  aria-label="Terms and condition"
                  colorScheme="blue"
                />
                <Text style={styles.termsCond}>
                  I agree to all
                  <Text style={{ color: "#000" }}> Terms, Privacy Policy</Text>
                </Text>
              </HStack>

              <Button
                onPress={handleSubmit}
                style={styles.buttonStyle}
                disabled={!check}
              >
                <Text style={styles.signUptxt}>{text.signup}</Text>
              </Button>
              <Button onPress={handleSubmit} style={styles.googelButtonStyle}>
                <HStack space="3" alignItems="center">
                  <FastImage
                    source={require("../../common/assets/images/googleIcon.png")}
                    style={{ height: 35, width: 35 }}
                  />
                  <Text style={styles.signUpGoogletxt}>
                    {text.signupWithGoogle}
                  </Text>
                </HStack>
              </Button>
              <HStack
                space="2"
                alignItems="center"
                justifyContent={"center"}
                marginTop={30}
              >
                <Text style={styles.signUpGoogletxt}>Have an account ?</Text>
                <Pressable
                  onPress={() => navigation.navigate("Login")}
                  style={{ display: "flex", alignItems: "center", padding: 10 }}
                >
                  <Text
                    style={{
                      color: Colors.TextRed,
                      fontWeight: "500",
                      fontSize: 16,
                    }}
                  >
                    Sign in
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: Colors.TextFieldBgColor,
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TextBlack,
    position: "relative",
  },
  termsCond: {
    color: Colors.TextGrey,
    textAlign: 'center',
    fontSize: 16,
  },
  passShowing: {
    height: "100%",
    backgroundColor: Colors.TextFieldBgColor,
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: Colors.TextBlack,
    display: "flex",
    alignItems: "center",
  },
  passShowingText: {
    color: Colors.TextBlack,
    marginRight: 15,
    backgroundColor: Colors.TextFieldBgColor,
  },
  signUptxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.White,
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: Colors.TextBlack,
    height: 55,
  },
  googelButtonStyle: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    height: 55,
    borderColor: "#000",
  },
  signUpGoogletxt: {
    color: Colors.TextBlack,
    textAlign: "center",
  },
});

export default SignupFormik;
