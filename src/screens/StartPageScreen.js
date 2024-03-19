import React, { useState } from "react";
import {View,Text, StyleSheet,useWindowDimensions,TouchableOpacity,Image} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


const StartPageScreen = () => {

    const navigation=useNavigation();

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
             <LinearGradient 
                colors={['#FFFFFF','#FFFFFF','#95A2B1','#223C5C','#223C5C','#223C5C']}
                style={styles.gradient}>

<Image source={Logo.logo} style={styles.logo} />

        <TouchableOpacity style={styles.button1} onPress={onLoginPressed}>

             <Text style={styles.text1}>Login</Text>

         </TouchableOpacity>
         <TouchableOpacity style={styles.button2} onPress={onSignupPressed}>
             <Text style={styles.text2}>Sign up</Text>
         </TouchableOpacity>
        </LinearGradient> 
        </View>
    
    );

};
const styles=StyleSheet.create({
    gradient:{
        width: '100%',
        height: '100%',
        marginBottom:215,
       
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
        fontWeight: '600',
        color: '#07305F',
        fontSize:17,

    },
    text2:{
        fontWeight: '200',
        color: '#07305F',
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