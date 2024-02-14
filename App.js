import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen copy/SignupScreen';
import AddVehicleDetailsScreen from './src/screens/AddVehicleDetailsScreen/AddVehicleDetailsScreen';
import BookingAppoinmentScreen from './src/screens/BookingAppoinmentScreen/BookingAppointmentScreen';

const App =()=> {
  return (
    <SafeAreaView style= {styles.container}>
    
      <LoginScreen />
      <SignupScreen/>
      <AddVehicleDetailsScreen/>
      <BookingAppoinmentScreen/>
    </SafeAreaView>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;

