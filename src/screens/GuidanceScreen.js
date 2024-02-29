import React, {} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,} from "react-native"
import { useNavigation } from "@react-navigation/native";

const GuidanceScreen = ({route}) => {
    const navigation=useNavigation();

    const onGuidancePressed =() =>{
        navigation.navigate('Rate and Reviews')
    }
   return(
<View>
<TouchableOpacity  onPress={onGuidancePressed}>
             <Text style={styles.text1}>Guidance</Text>
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

export default GuidanceScreen;