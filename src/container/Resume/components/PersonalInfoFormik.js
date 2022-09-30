import { Formik } from "formik";
import { Button, Checkbox, FormControl, HStack, VStack } from "native-base";
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Colors from "../../../common/constants/Colors";
import TextAreaField from "../../../common/formfields/TextArea";
import TextField from "../../../common/formfields/Textfield";
import ForResume from "../hooks"

const PersonalInfoFormik = () => {
  const { personalInformationSchema } = ForResume();
  const handleSave = (data) => {
    console.log(data, "<<-- data");
  }
  const handleContinue = (data) => {
    console.log(data, "<<-- data")
  }
  return (
    <Formik
      validateOnMount={true}
      validationSchema={personalInformationSchema}
      initialValues={{
        name: '',
        profession: '',
        city: '',
        country: '',
        pinCode: '',
        phone: '',
        email: '',
        personalInfo: '',
      }}
      onSubmit={handleSave}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <>
          <VStack width="100%" marginTop={19} space={4}>
            <FormControl isRequired isInvalid={errors.name && touched.name}>
              <TextField
                size="lg"
                placeholder="Full Name"
                autoCapitalize="none"
                onChangeText={handleChange('name')}
                value={values.name}
                px={3}
                styleInput={styles.textInputStyle}
                placeholderTextColor={Colors.TextGrey}
              />
              <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={errors.profession && touched.profession}
            >
              <TextField
                size="lg"
                placeholder="Profession"
                autoCapitalize="none"
                onChangeText={handleChange('profession')}
                value={values.profession}
                px={3}
                styleInput={styles.textInputStyle}
                placeholderTextColor={Colors.TextGrey}
              />
              <FormControl.ErrorMessage>
                {errors.profession}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.city && touched.city}>
              <TextField
                size="lg"
                placeholder="city"
                autoCapitalize="none"
                onChangeText={handleChange('city')}
                value={values.city}
                px={3}
                styleInput={styles.textInputStyle}
                placeholderTextColor={Colors.TextGrey}
              />
              <FormControl.ErrorMessage>{errors.city}</FormControl.ErrorMessage>
            </FormControl>
            <HStack space="2" alignItems="center">
              <FormControl
                isRequired
                isInvalid={errors.country && touched.country}
                width="59%"
              >
                <TextField
                  size="lg"
                  placeholder="country"
                  autoCapitalize="none"
                  onChangeText={handleChange('country')}
                  value={values.country}
                  px={3}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                />
                <FormControl.ErrorMessage>
                  {errors.country}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                width="39%"
                isRequired
                isInvalid={errors.pinCode && touched.pinCode}
              >
                <TextField
                  size="lg"
                  placeholder="pinCode"
                  autoCapitalize="none"
                  onChangeText={handleChange("pinCode")}
                  value={values.pinCode}
                  px={3}
                  styleInput={styles.textInputStyle}
                  placeholderTextColor={Colors.TextGrey}
                />
                <FormControl.ErrorMessage>
                  {errors.pinCode}
                </FormControl.ErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isRequired isInvalid={errors.phone && touched.phone}>
              <TextField
                size="lg"
                placeholder="phone"
                autoCapitalize="none"
                onChangeText={handleChange("phone")}
                value={values.phone}
                px={3}
                styleInput={styles.textInputStyle}
                placeholderTextColor={Colors.TextGrey}
              />
              <FormControl.ErrorMessage>
                {errors.phone}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.email && touched.email}>
              <TextField
                size="lg"
                placeholder="email"
                autoCapitalize="none"
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
              isInvalid={errors.personalInfo && touched.personalInfo}
            >
              <TextAreaField
                size="lg"
                placeholder="personal Info"
                autoCapitalize="none"
                onChangeText={handleChange('personalInfo')}
                value={values.personalInfo}
                px={3}
                styleInput={styles.textAreaInputStyle}
                placeholderTextColor={Colors.TextGrey}
                totalLines={4}
              />
              <FormControl.ErrorMessage>
                {errors.personalInfo}
              </FormControl.ErrorMessage>
            </FormControl>
            <Button onPress={handleSubmit} style={styles.saveButtonStyle}>
              <Text style={styles.signUptxt}>Save</Text>
            </Button>
            <Button onPress={handleSubmit} style={styles.continueButtonStyle}>
              <Text style={styles.signUptxt}>Continue</Text>
            </Button>
          </VStack>
        </>
      )}
    </Formik>
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
  textAreaInputStyle: {
    backgroundColor: Colors.TextFieldBgColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TextBlack,
    position: "relative",
  },
  saveButtonStyle: {
    width: '100%',
    backgroundColor: Colors.TextRed,
    height: 55,
  },
  continueButtonStyle: {
    width: '100%',
    backgroundColor: Colors.TextBlack,
    height: 55,
  },
});

export default PersonalInfoFormik;
