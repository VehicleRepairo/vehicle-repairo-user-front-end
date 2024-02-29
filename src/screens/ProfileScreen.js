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

  const onEditButtonPressed = () => {
    setIsEditing(true);
  };

  const onSaveProfilepressed = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  const onCancelEditpressed = () => {
    setIsEditing(false);
  };

  const onAddVehiclePressed = () => {
   
   console.warn('Add a Vehicle')
  };

  const onDeleteAccountPressed = () => {
    Alert.alert(
      'Delete Account',
      'Do you want to delete your account permantetly?',
       
      [
        {text:'Cancel',style:'cancel',},
        {text:'Delete', onPress:()=>deleteAccount()},
      ],
        {cancelable:false}
      
    );
  };

  const deleteAccount=() => {
    console.warn('Account deleted!')
  }

  ;

  


  return (
    <ScrollView>
    <View style={styles.container}>
    <TouchableOpacity onPress={onEditButtonPressed} style={styles.editButton}><Text>Edit</Text></TouchableOpacity>
     
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

        <TouchableOpacity onPress={onAddVehiclePressed} style={styles.addButton}>
        
          <Text style={styles.text1}>+ Add a Vehicle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteAccountPressed} style={styles.deleteButton}>
          <Text style={styles.text2}>Delete Account</Text>
        </TouchableOpacity>
   

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
 editButton:{
  padding:1,
    backgroundColor: '#eee',
    borderRadius: 5,
    height:40,
    width: '12%',
    borderWidth:1,
    borderRadius:10,
    padding:8.5,
    
    alignItems: 'center',
    marginLeft:320,
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
  
  bottomSection: {
    marginTop: 20,
  },
  label: {
    marginVertical:2,
    fontSize: 16,
    marginBottom: 10,
    marginLeft:55,
    fontWeight:'900'

  },
  label2:{
    fontSize: 16,
    marginBottom: 10,
    marginLeft:55,
    
  },
  addButton: {
    height:44,
    backgroundColor:'#1D2B78',
    width: '65%',
    borderWidth:1,
    borderRadius:50,
    padding:8.5,
    marginVertical: 7,
    alignItems: 'center',
    marginLeft:65,
    borderBottomWidth:4,
    borderColor:'#E2E2E2'
  },
  deleteButton: {
    height:40,
    borderColor:'red',
    width: '65%',
    borderWidth:1,
    borderRadius:50,
    padding:8.5,
    marginVertical: 5,
    alignItems: 'center',
    marginLeft:65,
    
  },
  text1:{
    fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
  },
  text2:{
    fontWeight: 'bold',
        color: 'red',
        fontWeight:'bold',
        fontSize:15,
  },
});

export default ProfileScreen;
