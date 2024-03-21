import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import useAuthStore from "../store/authStore";
import { Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const BookingAppointmentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [problem, setproblem] = useState("");
  const [vehicletype, setvehicletype] = useState("");
  const [date, setdate] = useState(new Date());
  const [time, settime] = useState(new Date());
  const { mechanicUid } = route.params;
  const { user } = useAuthStore.getState();
  const firebase_uid = user ? user.uid : "";


  const onChange = (e, selectedDate) => {
    setdate(selectedDate);
  };
  const onChange2 = (e, selectedTime) => {
    settime(selectedTime);
  };

  const handleContactChange = (text) => {
    // Remove any non-numeric characters from the input
    const cleanedText = text.replace(/[^0-9]/g, '');
    setcontact(cleanedText);
  };

  const onSubmitPressed = () => {
    // Format date and time strings
    const formattedDate = date.toISOString().split('T')[0]; // Extract date part
    const formattedTime = time.toLocaleTimeString('en-US', { hour12: false }); // Format time as HH:MM:SS
    
    const requestData = {
      Name: name,
      contact: contact,
      Service_Required: problem,
      vehicle: vehicletype,
      Date_of_appointment: formattedDate,
      Appointments_time: formattedTime,
      user_uid: firebase_uid,
      Mech_uid: mechanicUid,
    };
  
    fetch("http://172.20.10.3:8000/create_appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointment created:", data);
        Alert.alert(
          "Success",
          "Appointment booked successfully! If the appointment is declined it will show on your profile",
          [{ text: "OK", onPress: () => navigation.navigate("TabNav") }]
        );
      })
      .catch((error) => {
        console.error("Error creating appointment:", error);
      });
  };
  ;

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ImageBackground
      source={require("../../assets/Images/Sdgp_Images/bg3.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Book an Appointment</Text>
        <Text style={styles.name}> Name</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Enter your name"
          multiline={true}
          value={name}
          onChangeText={(text) => setname(text)}
        />
        <Text style={styles.contact}> Contact</Text>
        <TextInput
          style={styles.textinput2}
          placeholder="Enter your contact"
          multiline={true}
          keyboardType="numeric" // Only allow numeric input
          value={contact}
          onChangeText={handleContactChange}
          
        />
        <Text style={styles.problem}>Problem</Text>
        <TextInput
          style={styles.textinput3}
          placeholder="Enter your problem"
          multiline={true}
          value={problem}
          onChangeText={(text) => setproblem(text)}
        />
        <Text style={styles.vehicletype}> Vehicle and Type</Text>
        <TextInput
          style={styles.textinput4}
          placeholder="Enter your vehicle and type"
          multiline={true}
          value={vehicletype}
          onChangeText={(text) => setvehicletype(text)}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.date}> Date</Text>
          <Text style={styles.time}> Time</Text>
        </View>
        <View style={{ flexDirection: "row", gap:50 ,marginTop:10}}>
        <DateTimePicker
        marginLeft={50}
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
      />
         <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange2}
      />
        </View>
        <TouchableOpacity onPress={onSubmitPressed} style={styles.button1}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },

  button1: {
    height: 52,
    backgroundColor: "#1D2B78",
    width: "60%",
    borderWidth: 1,
    borderRadius: 55,
    padding: 12,
    alignItems: "center",
    marginLeft: 75,
    borderBottomWidth: 4,
    borderColor: "#E2E2E2",
    marginVertical: 40,
  },

  text: {
    fontWeight: "bold",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  title: {
    marginLeft: 75,
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    paddingRight: 40,
    paddingBottom: 5,
    paddingTop: 20,
    marginTop: 80,
  },

  name: {
    paddingTop: 23,
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 85,
  },
  contact: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 165,
    marginLeft: 80,
  },
  problem: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 165,
    marginLeft: 85,
  },
  vehicletype: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 145,
    marginLeft: 80,
  },
  date: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 100,
  },
  time: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 125,
  },
  textinput1: {
    height: 47,
    borderRadius: 26,
    borderColor: "#1D2B78",
    width: "68%",
    borderWidth: 1,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 10,
    marginLeft: 60,
  },
  textinput2: {
    height: 47,
    borderColor: "#1D2B78",
    width: "68%",
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 12,
    marginLeft: 60,
  },
  textinput3: {
    height: 47,
    borderColor: "#1D2B78",
    width: "68%",
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 12,
    marginLeft: 60,
  },
  textinput4: {
    height: 47,
    borderColor: "#1D2B78",
    width: "68%",
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 12,
    marginLeft: 60,
  },
  textinput5: {
    height: 47,
    borderColor: "#1D2B78",
    width: "31%",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 18,
    padding: 8.5,
    marginVertical: 10,
    marginLeft: 60,
  },
  textinput6: {
    height: 47,
    borderColor: "#1D2B78",
    width: "24%",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 29,
    marginLeft: 48,
    marginVertical: 10,
  },
});

export default BookingAppointmentScreen;
