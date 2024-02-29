import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet,ImageBackground, SafeAreaView,Alert} from "react-native"
import * as Location from "expo-location";
import styles from "./mileageStyles";

export default function Mileage(navigation) {
  const [location, setLocation] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    let intervalId; // Declare intervalId variable outside useEffect
  
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== "granted") {
          console.log("Please grant permission");
          return;
        }
  
        const updateLocation2 = async () => {
          try {
            if (isTracking) {
              let currentLocation = await Location.getCurrentPositionAsync({});
              console.log(currentLocation);
              setLocation((prevLocation) => {
                calculateAndPrintMileage(currentLocation, prevLocation);
                setPreviousLocation(currentLocation);
                return currentLocation;
              });
            }
          } catch (error) {
            console.error("Error getting location:", error);
          }
        };
  
        updateLocation2();
        // Store the interval ID in intervalId variable
        intervalId = setInterval(updateLocation2, 30000); // 60 seconds in milliseconds
      } catch (error) {
        console.error("Error requesting permission:", error);
      }
    };
  
    getLocation();
  
    // Clear the interval when component unmounts or when tracking is stopped
    return () => clearInterval(intervalId);
  }, [isTracking]);
  

  const startTracking = () => {
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  const handleChangeMileage = () => {
    Alert.prompt(
      "Change Mileage",
      "Enter new mileage in km:",
      (newMileage) => {
    
        if (newMileage !== null && !isNaN(newMileage)) {
          handlePress2(parseFloat(newMileage));
          console.log(newMileage)
        }
      },
      "plain-text",
      "", 
      "numeric" 
    );
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

  const handlePress = async () => {
    try {
      const req = await fetch("http://127.0.0.1:8000/mileage/65awgvcydec", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mileage: totalDistance,
        }),
      });
      console.log('Mileage updated successfully');
    } catch (error) {
      console.error("Error updating mileage:", error);
    }
  };
  const handlePress2 = async (newMileage) => {
    try {
      const req = await fetch("http://127.0.0.1:8000:8000/vehicle/65awgvcydec", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mileage: newMileage,
        }),
      });
      if (!req.ok) {
        throw new Error(`Failed to update mileage: ${req.status} ${req.statusText}`);
      }
      console.log('Mileage updated successfully');
    } catch (error) {
      console.error("Error updating mileage:", error);
    }
  };
  
  
  return (
    <SafeAreaView style={styles.container}>
       <Text onPress={() => navigation.navigate('Home')}></Text>
      <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
        <Text style={styles.text}>
          Current Mileage {totalDistance.toFixed(2)} km
        </Text>
        {!isTracking ? (
          <TouchableOpacity style={styles.buttonContainer} onPress={startTracking}>
            <Text style={styles.buttonText}>Start Tracking</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonContainer} onPress={() => { stopTracking(); handlePress(); }}>
            <Text style={styles.buttonText}>Stop Tracking</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button2} onPress={handleChangeMileage}>
            <Text style={styles.buttonText2}>Change Mileage</Text>
          </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
  
  
}
