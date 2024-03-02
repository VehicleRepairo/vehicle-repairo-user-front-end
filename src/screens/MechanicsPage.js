import React, {useState} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,ScrollView,Image} from "react-native"
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";


const MechanicsPage = ({route}) => {
    const navigation=useNavigation();
    
  const onMechanicPressed=() => {
    navigation.navigate('Mechanic Details')
  }

  ;

    const [mechanicName,setMechanicName]=useState('');
   
    const mechanicData = [
        {
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        name: '',
        contact: '+94 xxxxxxxxx',
        Location:'Location1',
        ratings:4.9,
        
    },
    {
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        name: '',
        contact: '+94 xxxxxxxxx',
        Location:'Location2',
        ratings:4.9,
        
    },
    {
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        name: '',
        contact: '+94 xxxxxxxxx',
        Location:'Location3',
        ratings:4.9,
        
    },
    {
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        name: '',
        contact: '+94 xxxxxxxxx',
        Location:'Location4',
        ratings:4.9,
        
    },
    {
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        name: '',
        contact: '+94 xxxxxxxxx',
        Location:'Location5',
        ratings:4.9,
        
    },
]

       
    

  
   return(
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>Mechanics</Text>
    {mechanicData.map((mechanicData,index)=>(
        <TouchableOpacity onPress={onMechanicPressed} style={styles.Button1}>
        <View key={index}>
        <View style={{flexDirection:'row',alignItems:"center"}}>
       
         
        
   
        <Image source={mechanicData.profilePicture} style={styles.profilePicture} /> 
        <View style={{marginLeft:10}}>
        <Text style={styles.label}>Name : {mechanicData.name} </Text>
        <Text style={styles.label}>Contact :{mechanicData.contact} </Text>
        <Text style={styles.label}>Location :{mechanicData.Location} </Text>
       
        <View style={styles.RatingsSection}>
        <StarRating
        disabled={true}
        maxStars={5}
        rating={mechanicData.ratings}
        starSize={20}
        fullStarColor='#FFC700'
        ></StarRating>
       
        </View>
       
            
        </View>
       
        </View>
        </View>
        </TouchableOpacity>
    )
    )
    }

      
        </View>
        </ScrollView>
   
   )
}    

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
   
    },
    title:{
        marginLeft:40,
        marginVertical:60,
        fontSize:24,
        marginBottom:20,
        fontWeight:'bold'

    },
    profilePicture:{
        borderRadius:0,
        width:100,
        height:100,
        marginLeft:180,
        marginVertical:20,
    },
    RatingsSection:{
        alignItems:'center',
        marginVertical:5,
        marginRight:250,
    },
    label:{
        fontSize:16,
        
    },
   Button1:{
    
    borderColor:'#E2E2E2',
    borderBottomWidth:4,
    backgroundColor:'white',
    height:140,
    width: '90%',
    borderWidth:1,
    marginVertical:10,
    marginLeft:10,
    
    
    
    alignItems: 'center',
   
   },
    
})

export default MechanicsPage;