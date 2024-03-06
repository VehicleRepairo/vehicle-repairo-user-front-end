import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import StartPageScreen from './screens/StartPageScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AddVehicleDetailsScreen from './screens/AddVehicleDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import mileage from './screens/mileage';  
import BookingAppointmentScreen from './screens/BookingAppointmentScreen';
import RatingAndReviewScreen from './screens/RatingAndReviewScreen';
import GuidanceScreen from './screens/GuidanceScreen';
import ProfileScreen from './screens/ProfileScreen';
import MechanicsPage from './screens/MechanicsPage';
import MechanicDetailsPage from './screens/MechanicDetailsPage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import EditProfileScreen from './screens/EditProfileScreen';

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();

const TabNavigator=()=>(
  <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === 'Guidance') {
              iconName = focused ? "reader" : "reader-outline";
            } else if (rn === 'Mileage') {
              iconName = focused ? "car" : "car-outline";
            }else if (rn === 'Profile') {
                iconName = focused ? "person-circle" : "person-circle-outline";
              } 

         
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#0073e6",
          inactiveTintColor: "grey",
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}  />
    <Tab.Screen name='Mileage' component={mileage} options={{ headerShown: false }} />
    <Tab.Screen name='Guidance' component={GuidanceScreen}  options={{ headerShown: false }}/>
    <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
       
      </Tab.Navigator>
);
const MainContainer=()=>(
  <NavigationContainer>
     <Stack.Navigator initialRouteName='Start Page' headerMode='none'>
      <Stack.Screen name='Start Page' component={StartPageScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='Add Vehicle Details' component={AddVehicleDetailsScreen} />
      <Stack.Screen name='Mechanics' component={MechanicsPage} />
      <Stack.Screen name='Mechanic Details' component={MechanicDetailsPage} />
      <Stack.Screen name='Book an Appointment' component={BookingAppointmentScreen} />
      <Stack.Screen name='Rate and Reviews' component={RatingAndReviewScreen} />
      <Stack.Screen name="Edit" component={EditProfileScreen}/>
      <Stack.Screen name='TabNav' component={TabNavigator} />
      </Stack.Navigator>
  </NavigationContainer>

);


export default MainContainer;
