import React, { useState } from "react";
import {View,Text, ImageBackground, StyleSheet,ScrollView} from 'react-native'
import system from '../../../assets/Images/Sdgp_Images/system.png'
import CustomeInput from "../../components/CustomInput/CustomeInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const AddVehicleDetailsScreen = () => {

    
    
    const [vehicletype,setvehicletype]= useState('');

    const [brand,setbrand]= useState('');

    const [model,setmodel]=useState('');
    
    const [enginetype,setenginetype]=useState('');

    const [mileagedriven,setmileagedriven]=useState('');
   

    const onSubmitPressed =() => {
        console.warn ('Submit')
      }
    return(
        <ScrollView>
             <View style={styles.container}>

          
           <Text 
           style={styles.title}>Add Vehicle Details </Text>

           
           <Text 
           style={styles.vehicletype}> Vehicle Type</Text>

           <CustomeInput placeholder='Enter your Vehicle type'
           value={vehicletype}
           setvalue={setvehicletype}   
            />

            <Text 
           style={styles.brand}> Brand</Text>         
           <CustomeInput placeholder='Enter your vehicle brand' 
            value={brand} 
            setvalue={setbrand}
            secureTextEntry={true}        
            />
             <Text 
           style={styles.model}> Model</Text>         
           <CustomeInput placeholder='Enter your vehicle model' 
            value={model} 
            setvalue={setmodel}
            secureTextEntry={true}        
            />

           <Text 
           style={styles.enginetype}> Engine Type</Text>         
           <CustomeInput placeholder='Enter your engine type' 
            value={enginetype} 
            setvalue={setenginetype}
            secureTextEntry={true}        
            />
            <Text 
           style={styles.mileagedriven}> Mileage Driven</Text>         
           <CustomeInput placeholder='Enter your mileage driven' 
            value={mileagedriven} 
            setvalue={setmileagedriven}
            secureTextEntry={true}        
            />

            <CustomButton text ="Submit" onPress={onSubmitPressed}/>
           
        </View>
        
        </ScrollView>
    
    );

};
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        padding:30,
      
         
    },

    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:22,
        paddingRight:90,
        paddingBottom:20,
        paddingTop:20,
    },
   

    vehicletype:{
        
        fontWeight:'bold',
        fontSize:15,
        paddingRight:150,

    },
    brand:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:180,

    },
    model:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:180,
    },
    enginetype:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:145,
    },
    mileagedriven:{
        fontWeight:'bold',
        fontSize:15,
        paddingRight:130,
    },

})

export default AddVehicleDetailsScreen;