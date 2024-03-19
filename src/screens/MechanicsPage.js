import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient 
                colors={['#4C617B','#FFFFFF','#FFFFFF']}
                style={styles.gradient}>

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
                <Text style={styles.label1}>Name : {mechanic.name} </Text>
                <Text style={styles.label2}>Contact :{mechanic.contact} </Text>
                <Text style={styles.label2}>Location :{mechanic.Location} </Text>
                  <Text style={styles.label2}>
                    Ratings : {mechanic.average_rating}{" "}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        </LinearGradient>
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
    marginLeft: 42,
    marginVertical: 60,
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
  },
  profilePicture: {
    borderRadius:50,
    width:100,
    height:100,
    marginRight:10,
    marginVertical:20,
  
  },

  label1:{
    fontSize:16,
    fontWeight:'bold',
    marginVertical:2.5,
},
  label2: {
    fontSize: 16,
    marginVertical:2.5,
  },

  Button1: {
    borderColor:'#E2E2E2',
    borderBottomWidth:4,
    backgroundColor:'white',
    height:140,
    width: '80%',
    borderWidth:1,
    marginVertical:10,
    marginLeft:35,
    alignItems: 'center',
  },
 

  
});

export default MechanicsPage;
