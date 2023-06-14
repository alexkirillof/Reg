import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

function Navigation() {

  const { isAuth } = useContext(AuthContext);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (<Stack.Screen name="Home" component={HomeScreen} />) : (
          <>
            <Stack.Screen name="Register"
                          component={RegisterScreen}
                          options={{ headerShown: false }}
            />
          <Stack.Screen name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }} />
          </>
      )}


    </Stack.Navigator>
</NavigationContainer>
)
  ;
}

export default Navigation;
