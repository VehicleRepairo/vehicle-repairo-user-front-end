import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import useAuthStore from '../store/authStore';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuthStore.getState();
  const firebase_uid = user ? user.uid : '';
  const name = user ? user.email.split('@')[0] : '';

  const [userData, setUserData] = useState({
    profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
    userName: 'John',
    appointmentStatus: 'Scheduled',
    vehicleServiceReminder: ''
  });

  const [reload, setReload] = useState(false);
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setReload(false);
  }, []);

  const onPredictPressed = async () => {
  try {
    const response = await fetch(`https://vehicle-repairo-back-end-95880a9904c7.herokuapp.com/predict_service/${firebase_uid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from backend:', errorData);
      throw new Error(errorData.error);
    }
    const data = await response.json();
    setPredictions(data);
    setError(null); // Clear the error state
  } catch (error) {
    console.error('Error while predicting service:', error);
    setError(error.message);
  }
};

// Function to render predictions
const renderPredictions = () => {
  if (predictions) {
    return (
      <View>
        <Text style={styles.label}>General and Mandatory Services:</Text>
        <Text key="oil_filter" style={styles.label}>Oil Filter</Text>
        <Text key="engine_oil" style={styles.label}>Engine Oil</Text>
        <Text style={styles.label}>Predictions:</Text>
        {Object.entries(predictions).map(([service, prediction]) => (
          prediction ?
            <Text key={service} style={styles.label}>{service.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</Text>
            : null
        ))}
      </View>
    );
  }
  else {
    return null;
  }
};


  const AppointmentStatus = () => {
    const [appointmentStatus, setAppointmentStatus] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://vehicle-repairo-back-end-95880a9904c7.herokuapp.com/get_appointment_status/${firebase_uid}`);
          if (!response.ok) {
            throw new Error('No appointment status');
          }
          const data = await response.json();
          setAppointmentStatus(data.appointment_status);
        } catch (error) {
          console.error('Error fetching appointment status:', error);
          setAppointmentStatus('');
        }
      };

      fetchData();
    }, [reload]); // Reload when reload state changes

    const deleteAppointmentStatus = async () => {
      try {
        const response = await fetch(`https://vehicle-repairo-back-end-95880a9904c7.herokuapp.com/delete_status/${firebase_uid}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete appointment status');
        }
        // If deletion is successful, update the UI accordingly
        setReload(true); // Set reload state to trigger reload
      } catch (error) {
        console.error('Error deleting appointment status:', error);
      }
    };

    // Render appointment status and buttons if it exists
    if (appointmentStatus) {
      return (
        <View>
          <Text style={styles.label}>Appointment Status: {appointmentStatus}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={deleteAppointmentStatus}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const onLogoutPressed = async () => {
    useAuthStore.getState().logout();
    navigation.navigate('Start Page');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg5.jpg')} style={styles.background}>
          <Text style={styles.title}>Account Info </Text>
          <Image source={userData.profilePicture} style={styles.profilePicture} />
          <Text style={styles.title1}>Basic Info </Text>
          <Text style={styles.label}>Username: {name}</Text>
          <AppointmentStatus />
          <Text style={styles.label}>Vehicle Service Reminder: {userData.vehicleServiceReminder}</Text>
          <TouchableOpacity onPress={onPredictPressed} style={styles.predictButton}>
            <Text style={styles.buttonText}>Predict Service</Text>
          </TouchableOpacity>
            {renderPredictions()}
            {error && (
              <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
          <TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );

};



const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    marginBottom: 300,
  },
  profilePicture: {
    marginLeft: 55,
    borderRadius: 200,
    width: 110,
    height: 110,
    marginVertical: 8
  },
  title: {
    marginLeft: 60,
    fontSize: 26,
    marginTop: 130,
    marginVertical: 10
  },
  title1: {
    marginLeft: 55,
    fontSize: 22,
    marginVertical: 8
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 55,
    fontWeight: '500'
  },
  logoutButton: {
    height: 50,
    backgroundColor: '#1D2B78',
    width: '38%',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 29,
    padding: 10,
    marginVertical: 30,
    marginLeft: 45,
    borderColor: '#1D2B78',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 25,
    paddingVertical: 2.5,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap:10,
    marginVertical: 10,
    marginLeft: 55
  },
  button: {
    backgroundColor: '#800000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  
  },
  predictButton: {
    height: 50,
    backgroundColor: '#1D2B78',
    width: '64%',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#1D2B78',
    marginLeft: 45,
    padding: 10,
    paddingLeft: 50
  }
});

export default ProfileScreen;