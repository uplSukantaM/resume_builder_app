import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Signup from '../container/Signup';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Signup}>
        <Stack.Screen
          name="Signup"
          component={Signup}
          mode="card"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
