import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartPageScreen from './src/screens/StartPageScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from   './src/screens/SignupScreen';
import AddVehicleDetailsScreen from './src/screens/AddVehicleDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import mileage from './src/screens/mileage';
import BookingAppointmentScreen from './src/screens/BookingAppointmentScreen';
import RatingAndReviewScreen from './src/screens/RatingAndReviewScreen';
import GuidanceScreen from './src/screens/GuidanceScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MechanicsPage from './src/screens/MechanicsPage';
import MechanicDetailsPage from './src/screens/MechanicDetailsPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator();
function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Start Page'>
    <Stack.Screen name='Start Page' component={StartPageScreen}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Signup' component={SignupScreen}/>
    <Stack.Screen name='Add Vehicle Details' component={AddVehicleDetailsScreen}/>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Mechanics' component={MechanicsPage}/>
    <Stack.Screen name='Mechanic Details' component={MechanicDetailsPage}/>
    <Stack.Screen name='Tracker' component={ mileage}/>
    <Stack.Screen name='Book an Appointment' component={BookingAppointmentScreen}/>
    <Stack.Screen name='Rate and Reviews' component={RatingAndReviewScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
    <Stack.Screen name='Guidance' component={GuidanceScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default  App;