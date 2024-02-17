import React from 'react'
import { Text, View} from "react-native"

export default function ServiceScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Guidance Screen</Text>
        </View>
    );
}