import React, {useEffect, useState} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,Pressable,Image,ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";

const MechanicDetailsPage = ({route}) => {
    const navigation=useNavigation();
    const[reviews,setReviews]=useState('');
    const [mechanicName,setMechanicName]=useState('');

    const [mechanicData, setMechanicData] = useState({
        profilePicture: require('../../assets/Images/Sdgp_Images/Mechanic_Profile.png'),
        ratings:4.9,
        ratingPercentage:'85%'
        
        
    })
    
    useEffect(()=>{
      if (route.params && route.params.mechanicName){
          setMechanicName(route.params.mechanicName);
      }
    },
    [route.paramas]);
    useEffect(()=>{
        if (route.params && route.params.reviews){
            setReviews(route.params.reviews);
        }
      },
      [route.paramas]);

  
    const onBookPressed =() =>{
        navigation.navigate('Book an Appointment')
    }
    const CustomButton =({onPress},text) => {
        return(
            
            < Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.text}>Book</Text>
                </Pressable>   
        )    
    }
  
    return (
       <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> {mechanicName || 'Username'} </Text>
            <Text></Text>
            <Image source={mechanicData.profilePicture} style={styles.profilePicture} />
            <Text></Text>
            <Text style={styles.title1}>PROFILE PHOTO</Text>
            
    <Text style={styles.title2}>Ratings</Text>
    <View style={styles.RatingsSection}>
        <StarRating
        disabled={true}
        maxStars={5}
        rating={mechanicData.ratings}
        starSize={28}
        fullStarColor='#FFC700'
        />
        <Text style={styles.title3}>{mechanicData.ratings.toFixed(1)}   {mechanicData.ratingPercentage}</Text>
       
    </View>
    
    

    <Text></Text>
    <Text style={styles.title4}>Reviews</Text>

    <Text style={styles.title5}> {mechanicName || '________________' } </Text> 
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text></Text>
       
        <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
    <Text style={styles.title5}> {mechanicName || '________________' } </Text>
  
       

          <CustomButton text ="Submit" onPress={onBookPressed} />
    </View>
    </ScrollView>
   

   

  
    
   );
    }

const styles=StyleSheet.create({
    container:{
       
        flex:1,
        
       
    },
    RatingsSection:{
        alignItems:'center',
        
        marginRight:210,
    },
    button:{
        height:52,
        backgroundColor:'#1D2B78',
        width: '65%',
        borderWidth:1,
        borderRadius:50,
        padding:11,
        marginVertical: 30,
        alignItems: 'center',
        marginLeft:75,
        borderBottomWidth:4,
        borderColor:'#E2E2E2'
       
    },
    title:{
        marginLeft:155,
        fontSize:20,
        marginVertical:80,
        marginBottom:5,

    },
    title1:{
        marginLeft:155,
        fontSize:14,
        marginBottom:1,

    },
    profilePicture:{
        marginLeft:125,
        borderRadius:200,
        width:150,
        height:150,
       
        
    },
    title2:{
        marginVertical:20,
        marginLeft:30,
        fontSize:16,
        letterSpacing:0.5
    },
    title3:{
        marginEnd:50,
        fontSize:16,
       
    },
    title4:{
        
        marginLeft:30,
        fontSize:16,
        letterSpacing:0.5
    },
    title5:{
        marginLeft:20,
    },


    text:{
        fontWeight: 'bold',
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
    },
})

export default MechanicDetailsPage;
