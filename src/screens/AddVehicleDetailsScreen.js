import React, { useState } from "react";
import {View,Text, ImageBackground, StyleSheet,ScrollView,Pressable,TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";



const AddVehicleDetailsScreen = () => {
   
    
    const navigation=useNavigation();
    
    
    const [vehicletype,setvehicletype]= useState('');

    const [brand,setbrand]= useState('');

    const [model,setmodel]=useState('');
    
    const [enginetype,setenginetype]=useState('');

    const [mileagedriven,setmileagedriven]=useState('');

   



    const CustomButton =({onPress},text) => {
        return(
            < Pressable onPress={onPress} style={styles.button}
            >
                <Text style={styles.text}>Submit</Text>
                </Pressable>   
        )    
    }
    
    const onSubmitPressed =() => {
        navigation.navigate('Home')
      }
   
    return(
        
        <View style={styles.container}>

        <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg.png')} style={styles.background}>
      <Text 
      style={styles.title}>Add Vehicle Details </Text>
       

      
      <Text 
      style={styles.vehicletype}
      paddingBottom='0.9%'
      paddingTop='0.9%'
      > Vehicle Type</Text>

       <TextInput 
       style={styles.textinput1}
       placeholder='Enter your Vehicle type' 
       multiline={true}
       value={vehicletype}
       onChangeText={(text)=> setvehicletype(text)}
       />

       <Text 
       style={styles.brand}
       paddingBottom='0.9%'
       paddingTop='0.9%'
       > Brand</Text>     

        <TextInput 
       style={styles.textinput2}
       placeholder='Enter your vehicle brand'
       multiline={true}
       value={brand}
       onChangeText={(text)=> setbrand(text)}
       />
           

        <Text 
      style={styles.model}
      paddingBottom='0.9%'
      paddingTop='0.9%'
      > Model</Text>         
      
       <TextInput 
       style={styles.textinput3}
       placeholder='Enter your vehicle model' 
       multiline={true}
       value={model}
       onChangeText={(text)=> setmodel(text)}
       />
           

      <Text 
      style={styles.enginetype}
      paddingBottom='0.9%'
      paddingTop='0.9%'
       > Engine Type</Text> 

   
       <TextInput 
       style={styles.textinput4}
       placeholder='Enter your engine type' 
       multiline={true}
       value={enginetype}
       onChangeText={(text)=> setenginetype(text)}
       />
           
       <Text 
      style={styles.mileagedriven}
      paddingBottom='0.9%'
      paddingTop='0.9%'
      > Mileage Driven</Text> 

       <TextInput 
       style={styles.textinput5}
       placeholder='Enter your mileage driven' 
       multiline={true}
       value={mileagedriven}
       onChangeText={(text)=> setmileagedriven(text)}
       />
           

       <CustomButton text ="Submit" onPress={onSubmitPressed} />
       </ImageBackground>
   </View>
   
  

);

    
       
    }
    
    
const styles=StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:5,

        
      },
    button:{
        height:48,
        backgroundColor:'#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:50,
        padding:9,
        marginVertical: 65,
        alignItems: 'center',
        borderBottomWidth:4,
    borderColor:'#E2E2E2'
        
        
        
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
    },
    container:{
        flex: 1,
       
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
         
    },

    title:{
        marginBottom:1,
        color:'black',
        fontWeight:'bold',
        fontSize:22,
        paddingRight:90,
        paddingBottom:20,
        paddingTop:5,
    },
   

    vehicletype:{
        
        fontWeight:'bold',
        fontSize:15,
        paddingRight:155,
        paddingBottom:20,

    },
    brand:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:190,
        paddingBottom:20,

    },
    model:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:190,
        paddingBottom:20,
    },
    enginetype:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:155,
        paddingBottom:20,
    },
    mileagedriven:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:140,
        paddingBottom:20,
    },
    textinput1:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },
    textinput2:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
        
    },
    textinput3:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },
    textinput4:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },
    textinput5:{
        height: 38.5,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:17,
        paddingHorizontal:20,
        padding:8.5,
        marginVertical: 10,
    },

})

export default AddVehicleDetailsScreen;