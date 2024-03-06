import React, { useState } from "react";
import {View,Text, Image, StyleSheet,ScrollView,Pressable,useWindowDimensions,TouchableOpacity,ImageBackground} from 'react-native'
import { useNavigation } from "@react-navigation/native";


const StartPageScreen = () => {

    const navigation=useNavigation();

    const {height} = useWindowDimensions();

    const [Logo, setLogo] = useState({
        logo: require('../../assets/Images/Sdgp_Images/logo.png'),

    })
   
    const onLoginPressed =() =>{
        navigation.navigate('Login')

    }
    const onSignupPressed=()=> {
        navigation.navigate('Signup')
    }
    

    return(
        
             <View style={styles.container}>
             
             <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg4.png')} style={styles.background}>

<Image source={Logo.logo} style={styles.logo} />

        <TouchableOpacity style={styles.button1} onPress={onLoginPressed}>

             <Text style={styles.text1}>Login</Text>

         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button2} onPress={onSignupPressed}>

             <Text style={styles.text2}>Sign up</Text>

         </TouchableOpacity>

         </ImageBackground>
           
        </View>
    
    );

};
const styles=StyleSheet.create({
    
    background:{
        width: '100%',
        height: '100%',
       
    },
    button1:{
        height:43,
        backgroundColor:"white",
        borderColor:"white",
         width: '71%',
         borderWidth:1,
         borderRadius:50,
         padding:8.5,
         alignItems: 'center',
         marginLeft:55,
         borderBottomWidth:4,
        borderColor:'#E2E2E2',
        marginBottom:10,
    },
    text1:{
        fontWeight: '200',
        color: '#1D2B78',
        fontSize:17,

    },
    text2:{
        fontWeight: '200',
        color: '#1D2B78',
        fontSize:17,
    
    },
    button2:{
        height:43,
        backgroundColor:"white",
        borderColor:"white",
        width: '71%',
        borderWidth:1,
        borderRadius:50,
        padding:8.5,
        marginVertical: 20,
        alignItems: 'center',
        marginLeft:55,
        borderBottomWidth:4,
        borderColor:'#E2E2E2',
        marginTop:10,
    },

    logo:{
        marginLeft:105,
        borderRadius:200,
        width:170,
        height:170,
        marginVertical:250,


    },

})

export default StartPageScreen;