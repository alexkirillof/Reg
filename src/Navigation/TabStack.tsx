import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../screens/Search";
import { Article } from "../screens/Article";
import { Profile } from "../screens/Profile";
import { AuthSvg } from "../assets/svg/AuthSvg";
import { SearchSvg } from "../assets/svg/SearchSvg";
import { ArticleSvg } from "../assets/svg/ArticleSvg";
import { ProfileSvg } from "../assets/svg/ProfileSvg";
import LoginScreen from "../screens/LoginScreen";



const Tab = createBottomTabNavigator();


export const TabStack = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Личный кабинет" component={Profile} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <ProfileSvg color={focused ? "blue" : "#374b4e"} />,

      }} />
      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <SearchSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
      <Tab.Screen name="Article" component={Article} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <ArticleSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <ProfileSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
    </Tab.Navigator>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#cc11"
//
//   }
// });
