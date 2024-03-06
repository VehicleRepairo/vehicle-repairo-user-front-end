import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Text, View, StyleSheet,ImageBackground ,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({route}) => {
    const navigation=useNavigation();
    
    const onVehicleServicePressed =() =>{
        navigation.navigate('Mechanics')
    }

    const onVehicleInspectionPressed=()=>{
        
        navigation.navigate('Mechanics')

    }

    const onTyreRepairPressed=()=>{
        navigation.navigate('Mechanics')
    }

    const onVehicleWashPressed=() =>{
        navigation.navigate('Mechanics')
    }

  const [selectedValue, setSelectedValue] = useState('option1');

  const [userName,setUserName]=useState('');

  useEffect(()=>{//The user's name is passed as a parameter when navigating from login page to home page
    if (route.params && route.params.userName){
        setUserName(route.params.userName);
    }
  },[route.paramas]);

  return (
    <View style={styles.container}>
     <ImageBackground source={require('../../assets/Images/Sdgp_Images/b1.png')} style={styles.background}>
     
     
      <Text style={styles.Integer}>60000
      /
      10000</Text>
      <Text style={styles.title}>Hello {userName || 'Username'} !</Text>
      <TouchableOpacity style={styles.button1} onPress={onVehicleServicePressed}>
             <Text style={styles.text}>Vehicle Service</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button2} onPress={onVehicleInspectionPressed}>
             <Text style={styles.text}>Vehicle Inspection</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button3} onPress={onTyreRepairPressed}>
             <Text style={styles.text}>Tyre Replacement, Repairs</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button4} onPress={onVehicleWashPressed}>
             <Text style={styles.text}>Vehicle Wash</Text>
         </TouchableOpacity>
      
      </ImageBackground>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop:41,
   
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    

    
  },
 title:{
    fontSize:24,
    paddingLeft:120,
    marginBottom:10,
    color:'black',
    paddingTop:1,
 },
 button1:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
   
},
button2:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
    
},
 button3:{
    height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
     

}, 
button4:{
  height:58,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
     width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:65,
     marginVertical:25,
     borderBottomWidth:3,
    
},
text:{
    fontSize:17,
    paddingVertical:3,
},

Integer:{
    backgroundColor:'#BFBFBF',
    fontSize:12,
    fontWeight:'800',
    height: 75,
    borderColor: '#BFBFBF',
    width: '20%',
    borderWidth:1,
    borderRadius:60,
    paddingHorizontal:15,
    padding:20,
    marginLeft:260,
    marginVertical:35,
  
},




  
});

export default HomeScreen;
