// EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

const EditProfileScreen = ({ userData, onSave, onCancel }) => {
 const [userName,setUserName]=useState(userData.userName)
  const [name, setName] = useState(userData.name);
  const [contact, setContact] = useState(userData.contact);
  const [vehicle, setVehicle] = useState(userData.vehicle);
  const [appointmentStatus, setAppointmentStatus] = useState(userData.appointmentStatus);

  const handleSave = () => {
    onSave({ name, contact, vehicle, appointmentStatus });
  };

  return (
    <ScrollView>
    
   
    <View style={styles.container}>
    <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      />
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Contact</Text>
      <TextInput
        style={styles.input}
        value={contact}
        onChangeText={setContact}
      />
      <Text style={styles.label}>Vehicle</Text>
      <TextInput
        style={styles.input}
        value={vehicle}
        onChangeText={setVehicle}
      />
      <Text style={styles.label}>Appointment Status</Text>
      <TextInput
        style={styles.input}
        value={appointmentStatus}
        onChangeText={setAppointmentStatus}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft:15,
    fontWeight:'900'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height:45,
    backgroundColor:'#1D2B78',
    width: '60%',
    borderWidth:1,
    borderRadius:50,
    padding:8.5,
    marginVertical: 10,
    alignItems: 'center',
    marginLeft:70,
    borderBottomWidth:4,
    borderColor:'#E2E2E2'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
});

export default EditProfileScreen;
