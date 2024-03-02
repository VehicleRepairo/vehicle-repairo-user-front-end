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
     
      <RNPickerSelect
      style={styles.Dropdown}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' },
          { label: 'Option 5', value: 'option5' },
          { label: 'Option 6', value: 'option6' },
          { label: 'Option 7', value: 'option8' },
          { label: 'Option 9', value: 'option9' },
          { label: 'Option 10', value: 'option10' },
        ]}
        value={selectedValue}
      />
      <Text style={styles.Integer}>60000
      /
      10000</Text>
      <Text style={styles.title}>Hello {userName || 'Username'} !</Text>
      <TouchableOpacity style={styles.button1} onPress={onVehicleServicePressed}>
             <Text style={styles.text1}>Vehicle Service</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button2} onPress={onVehicleInspectionPressed}>
             <Text style={styles.text2}>Vehicle Inspection</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button3} onPress={onTyreRepairPressed}>
             <Text style={styles.text3}>Tyre Replacement, Repairs</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.button4} onPress={onVehicleWashPressed}>
             <Text style={styles.text4}>Vehicle Wash</Text>
         </TouchableOpacity>
      
      </ImageBackground>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop:43,
   
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    

    
  },
 title:{
    fontSize:24,
   paddingLeft:90,
    marginBottom:10,
    color:'black',
    paddingTop:1,
 },
 button1:{
    height:50,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',

     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:50,
     marginVertical:25,
     borderBottomWidth:4,
   
},
button2:{
    height:50,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:50,
     marginVertical:25,
     borderBottomWidth:4,
    
},
 button3:{
    height:50,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
    width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:50,
     marginVertical:25,
     borderBottomWidth:4,
     

}, 
button4:{
    height:50,
    backgroundColor:'white',
    borderColor:'#E4E2E2',
     width: '65%',
     borderWidth:1,
     borderRadius:50,
     padding:12,
     marginVertical: 15,
     alignItems: 'center',
     marginHorizontal:50,
     marginVertical:25,
     borderBottomWidth:4,
    
},
text1:{
    fontSize:16
},
text2:{
    fontSize:16
},
text3:{
    fontSize:16
},
text4:{
    fontSize:16
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
  
},




  
});

export default HomeScreen;
