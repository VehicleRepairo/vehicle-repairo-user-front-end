import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MechanicDetailsPage = ({ route }) => {
  const navigation = useNavigation();
  const [reviews, setReviews] = useState([]);
  const [mechanicName, setMechanicName] = useState('');
  const { mechanicDetails } = route.params;

  useEffect(() => {
    // Fetch additional details from the backend based on the mechanic details
    fetch(`http://192.168.1.4:8000/ratings/${mechanicDetails.mech_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error fetching mechanic details:', error);
      });

    // Set mechanic name if available
    if (mechanicDetails.name) {
      setMechanicName(mechanicDetails.name);
    }
  }, []);

  const onBookPressed = () => {
    navigation.navigate('Book an Appointment', { mechanicUid: mechanicDetails.uid });
};


  const onRatePressed = () => {
    navigation.navigate('Rate and Reviews',{ mechanicUid: mechanicDetails.mech_id });
  };

  return (
    <ScrollView>
       <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg5.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{mechanicName || 'Username'}</Text>
        <Text style={styles.label2}>Mechanic Id: {mechanicDetails.mech_id}</Text>
        <Image source={{ uri: mechanicDetails.profilepicurl }} style={styles.profilePicture} />
        <Text style={styles.label1}>Average Rating: {mechanicDetails.average_rating} Stars</Text>
       
        {reviews.map((rating, index) => (
          <View key={index} style={styles.ratingContainer}>
            <Text style={styles.label}>Rating: {rating.rating}</Text>
            <Text style={styles.label}>Comment: {rating.comment}</Text>
            <Text style={styles.label}>Timestamp: {rating.timestamp}</Text>
            <Text></Text>
          </View>
        ))}
        
        <TouchableOpacity style={styles.button} onPress={onBookPressed}>
          <Text style={styles.text}>Book</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={onRatePressed}>
          <Text style={styles.text1}>Rate Mechanics</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop:40,
    height: 52,
    backgroundColor: '#1D2B78',
    width: '65%',
    borderWidth: 1,
    borderRadius: 50,
    padding: 11,
    marginVertical: 25,
    alignItems: 'center',
    marginLeft: 75,
    borderBottomWidth: 4,
    borderColor: '#E2E2E2',
  },
  button2: {
    height: 47,
    borderColor: '#1D2B78',
    width: '65%',
    borderWidth: 1,
    borderRadius: 55,
    padding: 10,
    alignItems: 'center',
    marginLeft: 75,
    borderBottomWidth: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 60,
    marginBottom: 5,
    textAlign: 'center',
  },
  profilePicture: {
    marginLeft: 125,
    marginTop:30,
    borderRadius: 200,
    width: 150,
    height: 150,
  },
  label: {
    fontSize: 16,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  text1: {
    color: '#1D2B78',
    fontSize: 15,
  },
  ratingContainer: {
    marginTop:20,
    marginLeft:20,
    borderColor: "#E2E2E2",
    borderBottomWidth:4,
    padding: 10,
    borderRadius: 5,
    //alignItems: 'center',
  },
  label: {
    fontSize: 16,
    //textAlign: 'center', // Align text to center
  },
  label1:{
    marginTop:30,
    marginLeft:30,
    fontSize: 18,
    fontWeight:"bold"
  },
  label2:{
    fontSize: 16,
    marginLeft:132
  },
  background:{
    width: '100%',
    height: '100%',

  }

});


export default MechanicDetailsPage;
