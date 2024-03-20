import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from "../store/authStore";

const LoginScreen = () => {
  const navigation = useNavigation();

  const auth = FIREBASE_AUTH;

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const { height } = useWindowDimensions();

  const [loading, setloading] = useState("");

  const onSignupPressed = () => {
    navigation.navigate("Signup");
  };
  const logIn = async () => {
    setloading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      useAuthStore.setState({ user: response.user });
      navigation.navigate("TabNav");
    } catch (error) {
      console.log(error);
      alert("Login failed.");
    } finally {
      setloading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{
            borderBottomRightRadius: 29,
            borderBottomLeftRadius: 25,
            height: 280,
            width: 420,
          }}
          source={require("../../assets/Images/Sdgp_Images/img5.png")}
        ></Image>

        <Text style={styles.LoginTopic}>Login </Text>

        <Text style={styles.username}> Email address</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Email address"
          multiline={true}
          value={email}
          onChangeText={(text) => setemail(text)}
        />

        <Text style={styles.password}> Password</Text>

        <TextInput
          style={styles.textinput2}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button1} onPress={logIn}>
          <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>or</Text>
        <TouchableOpacity style={styles.button2} onPress={onSignupPressed}>
          <Text style={styles.text2}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  text2: {
    fontWeight: "200",
    color: "#101966",
    fontSize: 15,
  },
  text3: {
    marginLeft: 180,
    fontSize: 16,
    marginBottom: 2,
  },

  button1: {
    height: 50,
    backgroundColor: "#07305F",
    width: "70%",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginVertical: 15,
    alignItems: "center",
    borderColor: "#07305F",
    borderBottomWidth: 4,
    borderColor: "#E2E2E2",
    marginLeft: 50,
    marginTop: 30,
  },

  button2: {
    height: 45,
    borderColor: "#07305F",
    width: "70%",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginVertical: 15,
    alignItems: "center",
    marginLeft: 50,
  },

  textinput1: {
    height: 42,
    borderColor: "#07305F",
    width: "70%",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 10,
    marginLeft: 50,
  },
  textinput2: {
    height: 42,
    borderColor: "#07305F",
    width: "70%",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    padding: 8.5,
    marginVertical: 10,
    marginLeft: 50,
    marginTop: 8,
  },

  LoginTopic: {
    color: "#07305F",
    fontWeight: "bold",
    fontSize: 25,
    paddingRight: 230,
    marginLeft: 60,
    marginTop: 30,
  },
  username: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 80,
    marginLeft: 60,
    marginTop: 10,
  },
  password: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 180,
    marginLeft: 60,
    marginTop: 10,
  },
});

export default LoginScreen;
