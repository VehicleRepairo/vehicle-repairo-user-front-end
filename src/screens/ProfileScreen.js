import React, { useEffect,useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import EditProfileScreen from './EditProfileScreen';
import { useNavigation } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

const ProfileScreen = ({route}) => {
  const navigation=useNavigation();

  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    userName:'John Doe',
    
    profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
    name: 'John Doe',
    contact: '+94 xxxxxxxxx',
    vehicle: 'Honda Vezel',
    appointmentStatus: 'Scheduled',
  });

  

  const onSaveProfilepressed = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  const onCancelEditpressed = () => {
    setIsEditing(false);
  };

  const onLogoutPressed = () => {
  navigation.navigate('Start Page')
  };
  const onEditButtonPressed = () => {
    setIsEditing(true);
  };

  
  

  ;

  


  return (
    <ScrollView>
    <View style={styles.container}>
   
     
      <Text style={styles.title}> {userData.userName} </Text>

        <Text></Text>
      <Image source={userData.profilePicture} style={styles.profilePicture} />
      
      </View>
      <Text></Text>
      <Text style={styles.title1}>PROFILE PHOTO</Text>
     <Separator/>

     
        <Text style={styles.label}>Name </Text>
        <Text style={styles.label2}> {userData.name}</Text>
        <Text style={styles.label}>Contact </Text>
        <Text style={styles.label2}>{userData.contact}</Text>
        <Text style={styles.label}>Vehicle </Text>
        <Text style={styles.label2}>{userData.vehicle}</Text>
        <Text style={styles.label}>Appointment Status </Text>
        <Text style={styles.label2}>{userData.appointmentStatus}</Text>

        <View style={{flexDirection:'row'}}> 
        <TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
        <Text style={styles.text1}>Logout</Text></TouchableOpacity>
        <TouchableOpacity onPress={onEditButtonPressed} style={styles.editButton}>
        <Text style={styles.editText}>Edit</Text></TouchableOpacity>
</View>
       
      
       
        
   

      {isEditing && (
        <EditProfileScreen
          userData={userData}
          onSave={onSaveProfilepressed}
          onCancel={onCancelEditpressed}
        />
         
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
    marginLeft:162,
    fontSize:20,

  },
  profilePicture: {
    marginLeft:135,
        borderRadius:200,
        width:130,
        height:130,
    
  },
  title1:{
    marginLeft:155,
    fontSize:14,

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
    height: 47,
    backgroundColor: '#1D2B78',
    width: '35%',
    borderWidth:1,
    borderRadius:24,
    paddingHorizontal:20,
    padding:8.5,
    marginVertical: 30,
    marginLeft:40

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
