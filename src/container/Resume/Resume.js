import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Colors from '../../common/constants/Colors';
import PersonalInfo from './components/PersonalInfo';
import Stepper from 'react-native-stepper-ui';

const content = [<PersonalInfo />, <PersonalInfo />, <PersonalInfo />];

const Resume = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 20, width:"90%" }}>
        <Stepper
          active={active}
          content={content}
          onNext={() => setActive((p) => p + 1)}
          onBack={() => setActive((p) => p - 1)}
					onFinish={() => Alert.alert('Finish')}
					showButton={false}
        />
			</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
		alignItems: "center",
		// justifyContent: "center",
    backgroundColor: Colors.White,
  },
});

export default Resume;
