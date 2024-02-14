import React, { useState } from "react";
import {View,Text, Image, StyleSheet,useWindowDimensions,ScrollView} from 'react-native'
import login from '../../../assets/Images/Sdgp_Images/login.jpg'
import CustomeInput from "../../components/CustomInput/CustomeInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignupScreen = () => {
    const [name,setname]= useState('');

    const [email,setemail]= useState('');

    const [password,setpassword]=useState('');
    
    const [confirmpassword,setconfirmpassword]=useState('');

    const {height} = useWindowDimensions();

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
           style={styles.title}>Sign up </Text>

            <Text
            style={styles.h1}> Already have an account? Log in</Text>
           <Text 
           style={styles.username}> Name</Text>

           <CustomeInput placeholder='first name'
           value={name}
           setvalue={setname}   
            />

            <Text 
           style={styles.email}> Email Address</Text>         
           <CustomeInput placeholder='email address' 
            value={email} 
            setvalue={setemail}
            secureTextEntry={true}        
            />
             <Text 
           style={styles.password}> Password</Text>         
           <CustomeInput placeholder='Enter password' 
            value={password} 
            setvalue={setpassword}
            secureTextEntry={true}        
            />

           <Text 
           style={styles.confirmpassword}> Confirm Password</Text>         
           <CustomeInput placeholder='Confirm password' 
            value={confirmpassword} 
            setvalue={setconfirmpassword}
            secureTextEntry={true}        
            />

            <CustomButton text ="Sign up" onPress={onSignupPressed}/>
           
        </View>
        
        </ScrollView>
    
    );

};
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        padding:0.5,
         
    },

    Image:{
        width:'100%',
        maxWidth:900,
        height:100,

    },
    title:{
        color:'#1D2B78',
        fontWeight:'bold',
        fontSize:24,
        paddingRight:220,

    },
    h1:{
        paddingRight:80,
    },

    username:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:225,

    },
    email:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:180,

    },
    password:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:205,
    },
    confirmpassword:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:150,
    },

})

export default SignupScreen;