import { VStack } from "native-base";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../common/constants/Colors";
import text from "../../common/constants/Text.json"
import LoginFormik from "./Formik";
import FastImage from "react-native-fast-image";

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <FastImage
          source={require("../../common/assets/images/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.createAccTxt}>{text.welcomeTxt}</Text>
				<Text style={styles.createAccDesc}>{text.welcomeTxtDesc}</Text>
      </View>
      <VStack width="full" space={4} alignItems="center" marginTop={30}>
				<LoginFormik />
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.White,
  },
  logoImage: {
    height: 50,
    width: 160,
  },
  createAccTxt: {
    color: Colors.TextBlack,
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: 22,
    marginTop: 40,
    textAlign: "center",
  },
  createAccDesc: {
    color: Colors.TextGrey,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 17,
    marginTop: 5,
    textAlign: "center",
  },
});
export default Login;
