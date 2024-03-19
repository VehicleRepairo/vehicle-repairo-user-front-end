import React, { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import { Text, View, StyleSheet,ImageBackground ,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({route}) => {
      
    const { user } = useAuthStore.getState();
    const name = user ? user.email.split('@')[0] : '';

    const navigation=useNavigation();
    
    const sendDataToBackendAndNavigate = async (selectedValue) => {
      try {
          // Request permission to access the user's location
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
              throw new Error('Permission to access location was denied');
          }

          // Get user's current location
          const location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;

          // Send data to the backend
          const response = await fetch('http://192.168.1.124:8000/nearest_mechanics', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  selectedValue,
                  location: {
                      latitude,
                      longitude
                  }
              })
          });

          if (!response.ok) {
              throw new Error('Failed to fetch data from the server');
          }

          // Parse the response as JSON
          const responseData = await response.json();
          console.log(responseData)

          // Navigate to a new screen and pass the response data as a parameter
          navigation.navigate('Mechanics', { responseData: responseData });
          
      } catch (error) {
          console.error('Error:', error);
          Alert.alert('Error', 'Failed to send data to the server');
      }
  };


  return (
    <View style={styles.container}>
    <ScrollView>
   
    <LinearGradient 
                colors={['#4C617B', '#FFFFFF','#FFFFFF']}
                style={styles.gradient}>

      <Text style={styles.title}>Hello {name || 'Username'} !</Text>

      <TouchableOpacity  onPress={() => sendDataToBackendAndNavigate('Vehicle Service')}>
             <ImageBackground
         style={{ 
            height: 140,
            width: 320,
            marginLeft:35,   
            borderRadius: 10, 
            overflow: 'hidden'       
         }}
         source={require('../../assets/Images/Sdgp_Images/img1.png')} >
             <Text style={styles.text1}>Vehicle Service</Text>
             </ImageBackground>
         </TouchableOpacity>
         
         <TouchableOpacity   onPress={() => sendDataToBackendAndNavigate('Vehicle Inspection')}>
         <ImageBackground
         style={{
            marginTop:20,   
            height: 140,
            width: 320,
            marginLeft:35,
            borderRadius: 10,  
            overflow: 'hidden' 
                      
         }}
         source={require('../../assets/Images/Sdgp_Images/img2.png')} >
         <Text style={styles.text2}>Vehicle Inspection</Text>
         </ImageBackground>

         </TouchableOpacity>

         <TouchableOpacity  onPress={() => sendDataToBackendAndNavigate('Tyre Repairs')}>
         <ImageBackground
         style={{
            marginTop:20,
            height: 140,
            width: 320,
            marginLeft:35,
            borderRadius: 10, 
            overflow: 'hidden' 
                      
         }}
         source={require('../../assets/Images/Sdgp_Images/img3.png')} >
             <Text style={styles.text3}>Tyre Repair</Text>
             </ImageBackground>
         </TouchableOpacity>
         
         <TouchableOpacity onPress={() => sendDataToBackendAndNavigate('Vehicle Wash')}>
         <ImageBackground
         style={{
            marginTop:20,
            height: 140,
            width: 320,
            marginLeft:35,
            borderRadius: 10, 
            overflow: 'hidden'    
         }}
         source={require('../../assets/Images/Sdgp_Images/img4.png')} >
             <Text style={styles.text4}>Vehicle Wash</Text>
             </ImageBackground>
         </TouchableOpacity>
         
       </LinearGradient>
         </ScrollView>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
   
  },
 
 title:{
  fontSize:27,
  marginBottom:10,
  color:'black',
  padding:20,
  marginVertical:15,
  marginLeft:110,
  marginTop:40,
 },
 
text1:{
  color:'white',
  fontSize:20,
  marginTop:55,
  marginLeft:110
},
text2:{
  color:'white',
  fontSize:20,
  marginTop:50,
  marginLeft:95
},
text3:{
  color:'white',
  fontSize:20,
  marginTop:55,
  marginLeft:115
},
text4:{
  color:'white',
  fontSize:20,
  marginTop:60,
  marginLeft:110
},




  
});

export default HomeScreen;
