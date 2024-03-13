import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Screens/home";
import ProfileScreen from "./Screens/profile";
import ServiceScreen from "./Screens/service";
import Mileage from "./Screens/mileage/mileage"

const homeName = "Home";
const detailsName = "Profile";
const settingsName = "Guidance";
const mileage = "Tracker ";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "reader" : "reader-outline";
            } else if (rn === mileage) {
              iconName = focused ? "car" : "car-outline";
            }else if (rn === detailsName) {
                iconName = focused ? "person-circle" : "person-circle-outline";
              } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#0073e6",
          inactiveTintColor: "grey",
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={mileage} component={Mileage} />
        <Tab.Screen name={settingsName} component={ServiceScreen} />
        <Tab.Screen name={detailsName} component={ProfileScreen} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;