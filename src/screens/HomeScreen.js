import React, { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import { Text, View, StyleSheet,ImageBackground ,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

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
          const response = await fetch('http://192.168.1.4:8000/nearest_mechanics', {
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
     <ImageBackground source={require('../../assets/Images/Sdgp_Images/b1.png')} style={styles.background}>
     
     
      <Text style={styles.Integer}>60000
      /
      10000</Text>
      <Text style={styles.title}>Hello {name || 'Username'} !</Text>
      <TouchableOpacity style={styles.button1}  onPress={() => sendDataToBackendAndNavigate('Vehicle Service')}>
             <Text style={styles.text}>Vehicle Service</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button2}  onPress={() => sendDataToBackendAndNavigate('Vehicle Inspection')}>
             <Text style={styles.text}>Vehicle Inspection</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button3} onPress={() => sendDataToBackendAndNavigate('Tyre Repairs')}>
             <Text style={styles.text}>Tyre Repair</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button4} onPress={() => sendDataToBackendAndNavigate('Vehicle Wash')}>
             <Text style={styles.text}>Vehicle Wash</Text>
         </TouchableOpacity>
      
      </ImageBackground>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop:41,
   
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    

    
  },
 title:{
    fontSize:24,
    paddingLeft:120,
    marginBottom:10,
    color:'black',
    paddingTop:1,
 },
 button1:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
   
},
button2:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
    
},
 button3:{
    height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
     

}, 
button4:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
     width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
    
},
text:{
    fontSize:17,
    paddingVertical:3,
},

Integer:{
    backgroundColor:'#BFBFBF',
    fontSize:12,
    fontWeight:'800',
    height: 75,
    borderColor: '#BFBFBF',
    width: '20%',
    borderWidth:1,
    borderRadius:60,
    paddingHorizontal:15,
    padding:20,
    marginLeft:260,
    marginVertical:35,
  
},




  
});

export default HomeScreen;
