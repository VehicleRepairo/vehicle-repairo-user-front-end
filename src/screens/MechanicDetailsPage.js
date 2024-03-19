import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const MechanicDetailsPage = ({ route }) => {
  const navigation = useNavigation();
  const [reviews, setReviews] = useState([]);
  const [mechanicName, setMechanicName] = useState('');
  const { mechanicDetails } = route.params;

  useEffect(() => {
    // Fetch additional details from the backend based on the mechanic details
    fetch(`http://192.168.1.124:8000/ratings/${mechanicDetails.mech_id}`)
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
      
      <View style={styles.container}>
        <Text style={styles.title}>{mechanicName || 'Username'}</Text>
        <Text style={styles.label2}>Mechanic Id: {mechanicDetails.mech_id}</Text>
        <Image source={{ uri: mechanicDetails.profilepicurl }} style={styles.profilePicture} />
        <Separator/>
        <Text style={styles.label1}>Average Rating: {mechanicDetails.average_rating} Stars</Text>
       
        {reviews.map((rating, index) => (
          <View key={index} style={styles.ratingContainer}>
            <Text style={styles.label}>Rating: {rating.rating}</Text>
            <Text style={styles.label}>Comment: {rating.comment}</Text>
            <Text style={styles.label3}>Timestamp: {rating.timestamp}</Text>
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
    backgroundColor:"#07305F",
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
    borderColor:"#07305F",
    width: '65%',
    borderWidth: 1,
    borderRadius: 55,
    padding: 10,
    alignItems: 'center',
    marginLeft: 75,
    borderBottomWidth: 1.5,
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
    marginVertical:1
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
  label3:{
    fontSize: 14,
    color:'#727272'
    
  },
 
  separator: {
    marginVertical: 8,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth:2
}

});


export default MechanicDetailsPage;
