import React, { useState } from "react";
import {View,Text, ImageBackground, StyleSheet,ScrollView,Pressable,TextInput} from 'react-native'

import { useNavigation } from "@react-navigation/native";


const BookingAppointmentScreen = () => {
    const navigation=useNavigation();
    const [name,setname]= useState('');

    const [contact,setcontact]= useState('');

    const [problem,setproblem]=useState('');
    
    const [vehicletype,setvehicletype]=useState('');

    const [date,setdate]=useState('');

    const [time,settime]=useState('');
    const CustomButton =({onPress},text) => {
        return(
            < Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.text}>Submit</Text>
                </Pressable>   
        )    
    }

    const onSubmitPressed =() => {
       navigation.navigate('Tracker')
      }
    

    return(

            <View style={styles.container}>
            
             <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg3.png')} style={styles.background}>
             <Text style={styles.title}>Book an Appointment</Text>
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
           style={styles.vehicletype}> Vehicle Type</Text>         
            <TextInput 
            style={styles.textinput4}
            placeholder='Enter your vehicle type'
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

            <CustomButton text ="Submit" onPress={onSubmitPressed}/>
           
            </ImageBackground>
        </View>
     
    
    );

};
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    background:{
        width: '100%',
        height: '100%',
    },
   
    button:{
        height:52,
        backgroundColor:'#1D2B78',
        width: '59%',
        borderWidth:1,
        borderRadius:55,
        padding:12,
        marginVertical: 40,
        alignItems: 'center',
        marginLeft:70,
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
        color:'black',
        fontWeight:'bold',
        fontSize:22,
        paddingRight:40,
        paddingBottom:25,
        paddingTop:20,
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
        marginLeft:110,
        
        
    },
   time:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:110,
        
        
        
        
    },

    textinput1:{
        height: 47,
        borderRadius:24,
        borderColor: '#1D2B78',
        width: '63%',
        borderWidth:1,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
        marginLeft:70
    },
    textinput2:{
        height: 47,
        borderColor: '#1D2B78',
        width: '63%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:70
    },
    textinput3:{
        height: 47,
        borderColor: '#1D2B78',
        width: '63%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:70
    },
    textinput4:{
        height: 47,
        borderColor: '#1D2B78',
        width: '63%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 12,
        marginLeft:70,
        flexDirection:'row'

    },
    textinput5:{
        height: 47,
        borderColor: '#1D2B78',
        width: '31%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:18,
        padding:8.5,
        marginVertical: 10,
       marginLeft:70,
        
        
    },
    textinput6:{
        height: 47,
        borderColor: '#1D2B78',
        width: '19%',
        borderWidth:1,
        borderRadius:24,
        paddingHorizontal:19,
     marginLeft:40,
        marginVertical: 10,
      
    },

})

export default BookingAppointmentScreen;