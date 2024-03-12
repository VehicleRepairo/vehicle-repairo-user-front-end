import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";

const MechanicsPage = ({ route }) => {
  const navigation = useNavigation();
  const [mechanicsData, setMechanicsData] = useState([]);

  useEffect(() => {
    // Fetch mechanics data from the backend or use route.params.mechanicsData if passed from previous screen
    const fetchedMechanicsData = route.params.responseData || [];
    setMechanicsData(fetchedMechanicsData);
  }, [route.params.responseData]);

  const onMechanicPressed = (selectedMechanic) => {
    navigation.navigate('Mechanic Details', { mechanicDetails: selectedMechanic });
   
  };



  return (
    <ScrollView>
      <View style={styles.container}>
      <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg5.jpg')} style={styles.background}>
        <Text style={styles.title}>Mechanics</Text>
        {mechanicsData.map((mechanic) => (
          <TouchableOpacity
           onPress={() => onMechanicPressed(mechanic)}
            style={styles.Button1}
            key={mechanic.mech_id}
          >
            <View >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={{ uri: mechanic.profilepicurl }}
                    style={styles.profilePicture}
                  />
                </View>
                <View style={{ marginLeft: 30 }}>
                  <Text style={styles.label}> {mechanic.name} </Text>
                  <Text style={styles.label}>{mechanic.contact} </Text>
                  <Text style={styles.label}>{mechanic.location} </Text>
                  <Text style={styles.label}>
                    Ratings : {mechanic.average_rating}{" "}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        marginLeft:2,
        width: 100,
        height: 100,
       
    },
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    marginLeft: 40,
    marginVertical: 60,
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  profilePicture: {
    borderRadius: 60,
    width: 100,
    height: 100,
    marginTop: 10,
    //marginVertical: 20,
  },
  RatingsSection: {
    alignItems: "center",
    marginVertical: 5,
    marginRight: 250,
  },
  label: {
    fontSize: 16,
  },
  Button1: {
    borderColor: "#E2E2E2",
    borderEndWidth:4,
    backgroundColor: "white",
    height: 140,
    width: "90%",
    borderWidth: 1,
    marginVertical: 10,
    marginLeft: 10,

    alignItems: "center",
  },
  background:{
    width: '100%',
    height: '100%',

  }

  
});

export default MechanicsPage;
