import React, { useState } from "react";
import {View,Text, Image, StyleSheet,useWindowDimensions,ScrollView} from 'react-native'
import login from '../../../assets/Images/Sdgp_Images/login.jpg'
import CustomeInput from "../../components/CustomInput/CustomeInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const LoginScreen = () => {
    
    const [name,setname]= useState('');

    const [password,setpassword]= useState('');

    const {height} = useWindowDimensions();

    const onLoginPressed = () => {
        console.warn('Login')    
    }
    const onForgetpasswordPressed =() =>{
        console.warn('Forgot Password?')
       } 
      const onSignupPressed =() => {
        console.warn ('Sign up')
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

           <CustomeInput placeholder='name/ email address'
           value={name}
           setvalue={setname}   
            />

           <Text
            style={styles.password}> Password
            </Text>

           <Text 
           CustomButton text ="Forgot Password?"  onPress={onForgetpasswordPressed}
           style={styles.FgPassword}> Forgot password?
           </Text>

           <CustomeInput placeholder='enter password' 
            value={password} 
            setvalue={setpassword}
            secureTextEntry={true}        
            />

            <CustomButton text="Login" onPress={onLoginPressed}/>

            <CustomButton text ="Sign up" onPress={onSignupPressed}/>
           
        </View>
        
        </ScrollView>
       
        
      
    );

};
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        padding:1,
         
    },

    Image:{
        width:'100%',
        maxWidth:900,
        height:100,

    },
    LoginTopic:{
        color:'#1D2B78',
        fontWeight:'bold',
        fontSize:23,
        paddingRight:230,
    },
    username:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:109,
        
    },
    password:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:212,
    },
    FgPassword:{ 
        color:'#1D2B78',
        fontSize:12,
        paddingLeft:180,

    },
})

export default LoginScreen;