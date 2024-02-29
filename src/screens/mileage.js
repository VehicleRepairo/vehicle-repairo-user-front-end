import React, {} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,} from "react-native"
import { useNavigation } from "@react-navigation/native";

const mileage = ({route}) => {
    const navigation=useNavigation();

    const onTrackerPressed =() =>{
        navigation.navigate('Guidance')
    }
   return(
<View>
<TouchableOpacity  onPress={onTrackerPressed}>
             <Text style={styles.text1}>Tracker</Text>
         </TouchableOpacity>
</View>
    
   );
};
const styles=StyleSheet.create({
    text1:{
        textAlign:'center',
        fontSize:20,
        paddingTop:300,
        
    }
})

export default mileage;