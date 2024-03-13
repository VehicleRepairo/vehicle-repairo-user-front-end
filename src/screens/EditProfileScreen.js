import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


const EditProfileScreen = ({ route }) => {
  const navigation=useNavigation();
  const { userData, onSave, oncancel } = route.params;
  const [userName, setUserName] = useState(userData.userName);
  const [name, setName] = useState(userData.name);
  const [contact, setContact] = useState(userData.contact);
  const [vehicle, setVehicle] = useState(userData.vehicle);
  const [appointmentStatus, setAppointmentStatus] = useState(userData.appointmentStatus);
  const[profilePicture,setProfilePicture]=useState(userData.profilePicture);

  const handleSave = () => {
    navigation.navigate('Profile')
    onSave({ userName, name, contact, vehicle, appointmentStatus,profilePicture });
  };

  const onCancel=()=>{
    navigation.navigate('Profile')
  };


  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{flexDirection:'row'}}>  
        
      <TouchableOpacity style={styles.button1} onPress={onCancel}>
  <Icon name="times" size={25} />
</TouchableOpacity>
       

<Text style={styles.Title}>Edit Profile</Text> 
 
<TouchableOpacity style={styles.button2} onPress={handleSave}>
  <Icon name="check" size={22}  color={'#3493D9'}/>
</TouchableOpacity>

      </View>
      <Text style={styles.label}>Username</Text>
        <TextInput 
        placeholder='Username'
        style={styles.input}
         value={userName}
          onChangeText={setUserName} />

        <Text style={styles.label}>Name</Text>
        <TextInput 
         placeholder='Name'
        style={styles.input}
         value={name}
          onChangeText={setName} />

        <Text style={styles.label}>Contact</Text>
        <TextInput 
         placeholder='Contact'
        style={styles.input} 
        value={contact} 
        onChangeText={setContact} />

        <Text style={styles.label}>Vehicle</Text>
        <TextInput 
         placeholder='Vehicle'
        style={styles.input} 
        value={vehicle} 
        onChangeText={setVehicle} />

        <Text style={styles.label}>Appointment Status</Text>
        <TextInput 
         placeholder='Appointment Status'
        style={styles.input} 
        value={appointmentStatus} 
        onChangeText={setAppointmentStatus} />

       
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  Title:{
    fontSize:20,
    marginVertical: 40,
    fontWeight:'900',
    marginLeft:89,


  },
  button1: {
    marginVertical: 40,
    marginLeft:26,
    
  },

  button2: {
    marginVertical: 40,
    marginLeft:80,
    
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft:30,
    fontWeight:'900'
  },
  input: {
    
    borderBottomColor:'gray',
    padding: 5,
    marginBottom: 20,
    width:'80%',
    borderBottomWidth:1,
    marginLeft:20,
  },

 

});

export default EditProfileScreen;
