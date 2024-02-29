import React, { useState } from "react";
import {View,Text, Image, StyleSheet,useWindowDimensions,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import login from '../../assets/Images/Sdgp_Images/login.jpg'
import { useNavigation } from "@react-navigation/native";



const LoginScreen = () => {
    const navigation=useNavigation();
    
    const [name,setname]= useState('');

    const [password,setpassword]= useState('');

    const {height} = useWindowDimensions();
  
    const onLoginPressed =() =>{
        navigation.navigate('Add Vehicle Details')

    }
    const onSignupPressed=()=> {
        navigation.navigate('Signup')
    }

    
      
   
    return(
        <ScrollView>
         <View style={styles.container}>
        
        <Image
         source={login}  style={[styles.Image,{height:height*0.5}]} resizeMode="contain"
        /> 

        <Text 
        style={styles.LoginTopic}>Login </Text>

        <Text 
        style={styles.username}> Username or email address</Text>
        <TextInput 
        style={styles.textinput1}
        placeholder='name/ email address' 
        multiline={true}
        value={name}
        onChangeText={(text)=> setname(text)}
         />
        

        <Text
         style={styles.password}> Password
         </Text>

       

        <TextInput 
        style={styles.textinput2}
        placeholder='enter password' 
        multiline={true}
        value={password}
        onChangeText={(text)=> setpassword(text)}
         />
         
         <TouchableOpacity style={styles.button1} onPress={onLoginPressed}>
             <Text style={styles.text1}>Login</Text>
         </TouchableOpacity>
         <Text>or</Text>
         <TouchableOpacity style={styles.button2} onPress={onSignupPressed}>
             <Text style={styles.text2}>Sign up</Text>
         </TouchableOpacity>

        
     </View>

         </ScrollView>
      
      
    );

};
const styles=StyleSheet.create({
    container:{
      
        alignItems:'center',
    
        
         
    },
  
    text1:{
        fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
        

    },
    text2:{
        fontWeight: '200',
        color: '#1D2B78',
        
        fontSize:15,
        

    },
    button1:{
        height:45,
        backgroundColor:'#1D2B78',
        width: '70%',
        borderWidth:1,
        borderRadius:50,
        padding:8.5,
        marginVertical: 15,
        alignItems: 'center',
        borderColor:"#1D2B78",
        borderBottomWidth:4,
    borderColor:'#E2E2E2'
    },
    
    button2:{
        height:40,
       borderColor:"#1D2B78",
        width: '70%',
        borderWidth:1,
        borderRadius:50,
        padding:8.5,
        marginVertical: 15,
        alignItems: 'center',
    },
     
    textinput1:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '70%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,

    },
    textinput2:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '70%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,

    },

    Image:{
        width:'100%',
        
        
        

    },
    LoginTopic:{
        color:'#1D2B78',
        fontWeight:'bold',
        fontSize:23,
        paddingRight:230,
        marginVertical: 10,
    },
    username:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:80,
        
    },
    password:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:180,
        
    },
    
})

export default LoginScreen;