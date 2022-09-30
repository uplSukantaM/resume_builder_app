import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import PersonalInfoFormik from "./PersonalInfoFormik";

const PersonalInfo = () => {
	return (
		<View style={{ marginTop: 50, display: "flex", alignItems: "center", width: "100%" }}>
			<FastImage
				source={require("../../../common/assets/images/defaultImage.png")}
				style={{ height: 191, width: 152 }}
			/>
			<PersonalInfoFormik />
		</View>
	);
};

const styles = StyleSheet.create({});

export default PersonalInfo;
