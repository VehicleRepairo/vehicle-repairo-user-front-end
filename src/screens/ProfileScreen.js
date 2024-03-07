import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView , ImageBackground} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
    userName: 'John',
    appointmentStatus: 'Scheduled',
    vehicleServiceReminder: ''
  });

  const onSaveProfilePressed = (updatedUserData) => {
    setUserData({ ...userData, ...updatedUserData });
    setIsEditing(false);
  };

  const onLogoutPressed = () => {
    navigation.navigate('Start Page');
  };


  return (
    <ScrollView>
      <View style={styles.container}>
          
      <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg5.png')} style={styles.background}>

      <Text style={styles.title}>Account Info </Text>
      <Image source={userData.profilePicture} style={styles.profilePicture} />
      <Text style={styles.title1}>Basic Info </Text>
        
      <Text style={styles.label}>Username: {userData.userName}</Text>
        <Text style={styles.label}>Appointment Status: {userData.appointmentStatus}</Text>
        <Text style={styles.label}>Vehicle Service Reminder: {userData.vehicleServiceReminder}</Text>
        

        
          <TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
    
          </ImageBackground>
          
        </View>
   

     
    </ScrollView>
  );
};



const styles = StyleSheet.create({
background:{
  width: '100%',
  height: '100%',
  marginBottom:300,
 
},
profilePicture: {
  marginLeft:55,
      borderRadius:200,
      width:110,
      height:110,
      marginVertical:8
  
},

  title:{
    marginLeft:60,
    fontSize:26,
    marginTop:130,
    marginVertical:10

  },
  
  title1:{
    marginLeft:55,
    fontSize:22,
    marginVertical:8
  },
 
  label: {
    marginVertical:8,
    fontSize: 16,
    marginBottom: 10,
    marginLeft:55,
    fontWeight:'500'

  },

  logoutButton:{
    height: 50,
    backgroundColor: '#1D2B78',
    width: '38%',
    borderWidth:1,
    borderRadius:50,
    paddingHorizontal:29,
    padding:10,
    marginVertical: 30,
    marginLeft:45,
    borderColor: '#1D2B78',
  
  },

  text:{
    fontWeight:'bold',
    fontSize:15,
    marginLeft:25,
    paddingVertical:2.5,
    color:'white'
  
  },
  
});

export default ProfileScreen;
