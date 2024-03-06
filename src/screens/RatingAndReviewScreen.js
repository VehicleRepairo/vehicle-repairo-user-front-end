import React,{useState} from "react";
import {View,Text,TextInput,Pressable,StyleSheet} from 'react-native';
import StarRating from "react-native-star-rating";
import { useNavigation } from "@react-navigation/native";


const RatingAndReviewScreen = () =>{
    const navigation=useNavigation();
    const[rating,setRating]=useState(0);
    const[review,setReview]=useState('');
    
    const CustomButton =({onPress},text) => {
        return(
            < Pressable onPress={onPress} style={styles.button}
            >
                <Text style={styles.text}>Submit</Text>
                </Pressable>   
        )    
    }
    const onSubmitPressed =() => {
        
        navigation.navigate('Start Page');
      }


    const onStarPressed= (rating)=>{
        setRating(rating);
    }



    return(
        <View style={styles.container}>
        <Text style={styles.title1}>Your Session is over !</Text>
        <Text style={styles.title2}>How was your experience?</Text>

       <View style={styles.starRatingContainer}>
        <StarRating 
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={(rating)=>onStarPressed(rating)}
        fullStarColor="#FFC700"
        emptyStarColor="#DFDFDF"
        containerStyle={styles.starRating}
       />

       </View>
       <Text style={styles.title3}>Add review</Text>
       <TextInput 
       style={styles.textReview}
            placeholder='Enter here...' 
            multiline={true}
            numberOfLines={5}
            value={review}
            onChangeText={(text)=> setReview(text)}
            secureTextEntry={true}  
            />    
             <CustomButton text ="Submit" onPress={onSubmitPressed} />  
            
        </View>
       
    )

};
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:50,
        
        

    },

    title1:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom:10,
        paddingTop:100,
    },
    title2:{
        fontSize:25,
    fontWeight:'200',
    marginBottom:20,
    paddingTop:35,
},
title3:{
   
    fontSize:20,
fontWeight:'normal',
marginBottom:10,
paddingTop:45,
paddingRight:140,
paddingVertical:1,

},

starRating:{
    paddingTop:20,
  
},
starRatingContainer:{
    marginVertical:5,
    elevation: 3,

},
textReview:{
    borderWidth: 1,
    borderColor: '#1D2B78',
    borderRadius: 25,
    padding: 10,
    marginVertical:1,
    width: '74%',
    minHeight: 100,
    
},
button:{
    height:50,
    backgroundColor:'#1D2B78',
    width: '60%',
    borderWidth:1,
    borderRadius:53,
    padding:11,
    marginVertical: 15,
    alignItems: 'center',
   marginVertical:80,
   borderBottomWidth:4,
    borderColor:'#E2E2E2'
   
    
    
    
},
text:{
    fontWeight: 'bold',
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
},



})
export default RatingAndReviewScreen;


