import React, { useState } from "react";
import {View,Text, Image, StyleSheet,useWindowDimensions,ScrollView,Pressable,TextInput} from 'react-native'
import login from '../../assets/Images/Sdgp_Images/login.jpg'

import { useNavigation } from "@react-navigation/native";


const SignupScreen = () => {
    
      
    const navigation=useNavigation();
    const [name,setname]= useState('');

    const [email,setemail]= useState('');

    const [password,setpassword]=useState('');
    
    const [confirmpassword,setconfirmpassword]=useState('');

    const {height} = useWindowDimensions();
    const onLoginPressed =() =>{
        navigation.navigate('Login')

    }
    const CustomButton =({onPress},text) => {
        return(
            < Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.text}>Sign up</Text>
                </Pressable>   
        )    
    }

    

    const onSignupPressed =() => {
        navigation.navigate('Add Vehicle Details')
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
            style={styles.h1}> Already have an account?
             <Text 
        CustomButton text ="Login"  onPress={onLoginPressed}
        style={styles.LoginButton}> Log in
        </Text>
        </Text>

           <Text 
           style={styles.username}> Name</Text>

           
             <TextInput 
                style={styles.textinput1}
                placeholder='first name' 
                multiline={true}
                value={name}
                onChangeText={(text)=> setname(text)}
             />

            <Text 
           style={styles.email}> Email Address</Text>         
          
              <TextInput 
                style={styles.textinput2}
                placeholder='email address'
                multiline={true}
                value={email}
                onChangeText={(text)=> setemail(text)}
             />

            
             <Text 
           style={styles.password}> Password</Text> 

            <TextInput 
                style={styles.textinput3}
                placeholder='Enter password' 
                multiline={true}
                value={password}
                onChangeText={(text)=> setpassword(text)}
             />


           <Text 
           style={styles.confirmpassword}> Confirm Password</Text>         
           
             <TextInput 
                style={styles.textinput4}
                placeholder='Confirm password'
                multiline={true}
                value={confirmpassword}
                onChangeText={(text)=> setconfirmpassword(text)}
             />

            <CustomButton text ="Sign up" onPress={onSignupPressed}/>
           
        </View>
        
        </ScrollView>
    
    );

};
const styles=StyleSheet.create({
    button:{
        height:40,
        backgroundColor:'#1D2B78',
        width: '75%',
        borderWidth:1,
        borderRadius:50,
        padding:8.5,
        marginVertical: 15,
        alignItems: 'center',
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
    },
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
        fontSize:14,
        marginVertical:7.5,
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
    LoginButton:{ 
        color:'#1D2B78',
        fontSize:14,
        paddingLeft:180,

   

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
    textinput3:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '70%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },
    textinput4:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '70%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },

})

export default SignupScreen;