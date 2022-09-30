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
import ForLogin from "./hooks";
import text from '../../common/constants/Text.json';
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";

const LoginFormik = () => {
  const { loginValidationSchema } = ForLogin();
  const navigation = useNavigation();
  const [showPass, setShowPass] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const handelPassClick = () => {
    setShowPass(!showPass);
  };
  const handleSignin = (data) => {
    console.log(data, "<<-- data");
    navigation.navigate('Resume');
  };

  return (
    <KeyboardAvoidingView
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSignin}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <VStack width="80%" space={2}>
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

              <Button onPress={handleSubmit} style={styles.buttonStyle}>
                <Text style={styles.signUptxt}>{text.signin}</Text>
              </Button>
              <Button onPress={handleSubmit} style={styles.googelButtonStyle}>
                <HStack space="3" alignItems="center">
                  <FastImage
                    source={require('../../common/assets/images/googleIcon.png')}
                    style={{ height: 35, width: 35 }}
                  />
                  <Text style={styles.signUpGoogletxt}>
                    {text.signinWithGoogle}
                  </Text>
                </HStack>
              </Button>
              <HStack
                space="2"
                alignItems="center"
                justifyContent={"center"}
                marginTop={30}
              >
                <Text style={styles.signUpGoogletxt}>
                  Don't have an account ?
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("Signup")}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.TextRed,
                      fontWeight: "500",
                      fontSize: 16,
                    }}
                  >
                    Sign up
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

export default LoginFormik;
