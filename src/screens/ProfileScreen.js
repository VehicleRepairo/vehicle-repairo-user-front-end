import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker'; // Import the image picker library

import { useNavigation } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    userName: 'John Doe',
    profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
    name: 'John Doe',
    contact: '+94 xxxxxxxxx',
    vehicle: 'Honda Vezel',
    appointmentStatus: 'Scheduled',
  });

  const onSaveProfilePressed = (updatedUserData) => {
    setUserData({ ...userData, ...updatedUserData });
    setIsEditing(false);
  };

 

  const onLogoutPressed = () => {
    navigation.navigate('Start Page');
  };
 
  
  const onEditButtonPressed = () => {
    navigation.navigate('Edit', { userData, onSave: onSaveProfilePressed, onCancel: onEditButtonPressed });
  };
  

  const handleProfilePictureUpload = () => {
    // Use the image picker library to open the image selection modal
    ImagePicker.showImagePicker({ title: 'Select Profile Picture' }, (response) => {
      if (!response.didCancel && !response.error) {
        // Update the profile picture when a new image is selected
        setUserData({ ...userData, profilePicture: { uri: response.uri } });
    
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>YOUR PROFILE </Text>
        
        <Image source={userData.profilePicture} style={styles.profilePicture} />
       
        <Text></Text>
        <Text style={styles.title1}>{userData.userName}</Text>
        <Separator />

        <Text style={styles.label}>Name </Text>
        <Text style={styles.label2}> {userData.name}</Text>
        <Text style={styles.label}>Contact </Text>
        <Text style={styles.label2}>{userData.contact}</Text>
        <Text style={styles.label}>Vehicle </Text>
        <Text style={styles.label2}>{userData.vehicle}</Text>
        <Text style={styles.label}>Appointment Status </Text>
        <Text style={styles.label2}>{userData.appointmentStatus}</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
            <Text style={styles.text1}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onEditButtonPressed} style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isEditing && (
        <EditProfileScreen userData={userData} onSave={onSaveProfilePressed} onCancel={onCancelEditPressed} />
      )}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    
},
 
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title:{
    marginLeft:155,
    fontSize:16,
    marginTop:80,
    marginVertical:20

  },
  profilePicture: {
    marginLeft:135,
        borderRadius:200,
        width:130,
        height:130,
    
  },
  title1:{
    marginLeft:165,
    fontSize:20,

},
  
 
  label: {
    marginVertical:4,
    fontSize: 16,
    marginBottom: 10,
    marginLeft:55,
    fontWeight:'900'

  },
  label2:{
    fontSize: 16,
    marginBottom: 10,
    marginLeft:55,
    marginVertical:4,
    
    
  },
  editButton:{
    height: 47,
    borderColor: 'black',
    width: '35%',
    borderWidth:1,
    borderRadius:24,
    paddingHorizontal:20,
    padding:8.5,
    marginVertical: 30,
    marginLeft:30

  
  },
  logoutButton:{
    height: 52,
    backgroundColor: '#1D2B78',
    width: '35%',
    borderWidth:1,
    borderRadius:30,
    paddingHorizontal:20,
    padding:8.5,
    marginVertical: 30,
    marginLeft:40,
    borderColor: '#1D2B78',
    borderBottomWidth:4,
    borderColor:'#E2E2E2'

  },
  editText:{
    fontWeight:'bold',
    fontSize:15,
    marginLeft:34,
    paddingVertical:2.5
    
    


  },

  text1:{
    fontWeight:'bold',
    fontSize:15,
    marginLeft:25,
    paddingVertical:2.5,
    color:'white'
    
    
    

  },
  
});

export default ProfileScreen;
