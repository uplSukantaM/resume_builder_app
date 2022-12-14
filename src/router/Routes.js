import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Signup from '../container/Signup/Signup';
import Login from "../container/Login/Login";
import Resume from "../container/Resume/Resume";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Resume}>
        <Stack.Screen
          name="Resume"
          component={Resume}
          mode="card"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          mode="card"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          mode="card"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
