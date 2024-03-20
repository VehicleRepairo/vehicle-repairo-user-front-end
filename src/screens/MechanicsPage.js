import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
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
    navigation.navigate("Mechanic Details", {
      mechanicDetails: selectedMechanic,
    });
  };

  return (
   <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg5.jpg')} style={styles.background}>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Mechanics</Text>
        {mechanicsData.map((mechanic) => (
          <TouchableOpacity
            onPress={() => onMechanicPressed(mechanic)}
            style={styles.Button1}
            key={mechanic.mech_id}
          >
            <View style={{ borderBottomWidth: 4, borderColor: "#E2E2E5" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.cardContent}>
                  <Image
                    source={{ uri: mechanic.profilepicurl }}
                    style={styles.profilePicture}
                  />
                </View>
                <View style={styles.textContainer}>
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
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginLeft: 40,
    marginVertical: 60,
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Button1: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default MechanicsPage;
