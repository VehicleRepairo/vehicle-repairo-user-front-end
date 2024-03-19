import React, { useState } from "react";
import {View,Text, ImageBackground, StyleSheet,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import { useNavigation, useRoute} from "@react-navigation/native";
import useAuthStore from '../store/authStore';
import { Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const BookingAppointmentScreen = () => {
    const navigation=useNavigation();
    const route = useRoute();
    const [name,setname]= useState('');
    const [contact,setcontact]= useState('');
    const [problem,setproblem]=useState('');
    const [vehicletype,setvehicletype]=useState('');
    const [date,setdate]=useState('');
    const [time,settime]=useState('');
    const {mechanicUid } = route.params;
    const { user } = useAuthStore.getState();
    const firebase_uid = user ? user.uid : '';
   

  
    const onSubmitPressed = () => {
        const requestData = {
            Name: name,
            contact: contact,
            Service_Required: problem,
            vehicle: vehicletype,
            Date_of_appointment: date,
            Appointments_time: time,
            user_uid: firebase_uid,
            Mech_uid: mechanicUid
        };

        fetch('http://192.168.1.5:8000/create_appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Appointment created:', data);
            Alert.alert(
                "Success",
                "Appointment booked successfully! If the appointment is declinded it will show on your profile",
                [{ text: "OK", onPress: () => navigation.navigate('TabNav') }]
            );
        })
        .catch(error => {

            console.error('Error creating appointment:', error);
        });
    };
    

    return(
        <ScrollView>
            <View style={styles.container}>
            <LinearGradient 
                colors={['#4C617B','#FFFFFF','#FFFFFF']}
                style={styles.gradient}>
            <ImageBackground
            style={{borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            height: 240,
            width: 388,
            overflow: 'hidden',
            marginTop:2,
             
         }}
         source={require('../../assets/Images/Sdgp_Images/img6.jpg')} >
           <Text style={styles.title}>Book an Appointment</Text>
        </ImageBackground>
           <Text 
           style={styles.name}> Name</Text>
          
             <TextInput 
            style={styles.textinput1}
            placeholder='Enter your name'
            multiline={true}
            value={name}
            onChangeText={(text)=> setname(text)}
            />

            <Text 
           style={styles.contact}> Contact</Text> 

             <TextInput 
            style={styles.textinput2}
            placeholder='Enter your contact' 
            multiline={true}
            value={contact}
            onChangeText={(text)=> setcontact(text)}
            />

             <Text 
           style={styles.problem}>Problem</Text>  

           
            <TextInput 
            style={styles.textinput3}
            placeholder='Enter your problem'
            multiline={true}
            value={problem}
            onChangeText={(text)=> setproblem(text)}
            />


           <Text 
           style={styles.vehicletype}> Vehicle and Type</Text>         
            <TextInput 
            style={styles.textinput4}
            placeholder='Enter your vehicle and type'
            multiline={true}
            value={vehicletype}
            onChangeText={(text)=> setvehicletype(text)}
            />
<View style={{flexDirection:'row'}}>   
            <Text 
           style={styles.date}> Date</Text> 
           
           <Text 
           style={styles.time}> Time</Text>
           </View>   
           
<View style={{flexDirection:'row'}}>     
            <TextInput 
            style={styles.textinput5}
            placeholder='DD/MM/YYYY'
            multiline={true}
            value={date}
            onChangeText={(text)=> setdate(text)}
            />
       
         
            <TextInput 
            style={styles.textinput6}
            placeholder='00:00'
            multiline={true}
            value={time}
            onChangeText={(text)=> settime(text)}
            />
</View>

        <TouchableOpacity onPress={onSubmitPressed} style={styles.button}>
        <Text style={styles.text}>Submit</Text></TouchableOpacity>
        </LinearGradient>
        </View>
        </ScrollView>
    
    );

};
const styles=StyleSheet.create({

    button:{
        height:52,
        backgroundColor:"#07305F",
        width: '62%',
        borderWidth:1,
        borderRadius:55,
        padding:12,
        marginVertical: 30,
        alignItems: 'center',
        marginLeft:75,
        borderBottomWidth:4,
    borderColor:'#E2E2E2'
       
    },
   
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
        
    },
    

    title:{
        marginLeft:60,
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        marginTop:190,
        
    },
   

   name:{
        paddingTop:23,
        marginLeft:60,
        fontWeight:'bold',
        fontSize:15,
        marginLeft:85,

    },
   contact:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:165,
        marginLeft:80,

    },
   problem:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:165,
        marginLeft:85,
    },
   vehicletype:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:145,
        marginLeft:80,
    },
   date:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:115,

    },
   time:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:110,
  
    },
    textinput1:{
        height: 42,
        borderColor: "#07305F",
        width: '67%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:65,
    },
    textinput2:{
        height: 42,
        borderColor: "#07305F",
        width: '67%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:65,
    },
    textinput3:{
        height: 42,
        borderColor: "#07305F",
        width: '67%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:65,
    },
    textinput4:{
        height: 42,
        borderColor: "#07305F",
        width: '67%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:65,
    },
    textinput5:{
        height: 44,
        borderColor: "#07305F",
        width: '32%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:25,
        padding:12,
        marginVertical: 10,
       marginLeft:70,
  
    },
    textinput6:{
        height: 44,
        borderColor: "#07305F",
        width: '24%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:30,
        marginLeft:40,
        marginVertical: 10,
        marginLeft:30
      
    },
    gradient:{

        width: '100%',
        height: '100%',
        marginBottom:34,
       
      
      },

})

export default BookingAppointmentScreen;