import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet,ImageBackground} from "react-native"
import * as Location from "expo-location";

export default function Mileage() {
  const [location, setLocation] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Please grant permission");
          return;
        }

        const updateLocation2 = async () => {
          try {
            let currentLocation = await Location.getCurrentPositionAsync({});
            console.log(currentLocation);
            setLocation((prevLocation) => {
              if (isTracking) {
                calculateAndPrintMileage(currentLocation, prevLocation);
              }
              setPreviousLocation(currentLocation);
              return currentLocation;
            });
          } catch (error) {
            console.error("Error getting location:", error);
          }
        };

        updateLocation2();
        // Initial call to get location
        setInterval(updateLocation2, 30000); // 60 seconds in milliseconds
      } catch (error) {
        console.error("Error requesting permission:", error);
      }
    };

    getLocation();
  }, [isTracking]);

  const startTracking = () => {
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  const calculateAndPrintMileage = (current, previous) => {
    //console.log("Debug: current", current);
    //console.log("Debug: previous", previous);
    if (current && previous && current.coords && previous.coords) {
      const currentCoords = current.coords;
      const previousCoords = previous.coords;
      //console.log("1st condition");
      if (
        currentCoords.latitude !== undefined &&
        currentCoords.longitude !== undefined &&
        previousCoords.latitude !== undefined &&
        previousCoords.longitude !== undefined
      ) {
        if (
          currentCoords.latitude !== previousCoords.latitude ||
          currentCoords.longitude !== previousCoords.longitude
        )
         {
          const distance = calculateDistance(
            previousCoords.latitude,
            previousCoords.longitude,
            currentCoords.latitude,
            currentCoords.longitude
          );
          
          // Update total distance
          setTotalDistance((prevDistance) => {
            const newDistance = prevDistance + distance;
            console.log("Mileage:", newDistance.toFixed(2), "km");
            return newDistance;
          });
          console.log("4st condition");
        }
       else {
        console.log("In the same place");
      }
    }
    } else {
      console.warn("Invalid current or previous location:", current, previous);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Adjust opacity here (0.5 for 50% opacity)
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // or 'stretch' or 'contain'
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24, // Adjust the font size as needed
      fontWeight: "bold",
      marginBottom: 30, // Move text up by reducing marginBottom
      color: 'black', // Adjust text color if needed
      textAlign: 'center',
      position: 'absolute', // Position the text absolutely
      top: '20%', // Move text up by setting top position
    },
    buttonContainer: {
      width: 180,
      height: 170,
      borderRadius: 200, // Keep the border radius the same
      backgroundColor: "#8B0000",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0, // Adjust this value to move the button up
      position: 'absolute', // Position the button absolutely
      top: '30%', // Move button up by setting top position
    },
    buttonText: {
      color: "white",
      fontSize: 20,
    },
  });
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/mileage.png')} style={styles.background}>
        <Text style={styles.text}>
          Current Mileage {totalDistance.toFixed(2)} km
        </Text>
        {!isTracking ? (
          <TouchableOpacity style={styles.buttonContainer} onPress={startTracking}>
            <Text style={styles.buttonText}>Start Tracking</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonContainer} onPress={stopTracking}>
            <Text style={styles.buttonText}>Stop Tracking</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
  
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
}
