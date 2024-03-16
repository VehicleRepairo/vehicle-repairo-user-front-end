import React, { useState } from "react";
import { ScrollView, Text, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import useAuthStore from '../store/authStore';
import { Alert } from 'react-native';


const AddVehicleDetailsScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuthStore.getState();
    const firebase_uid = user ? user.uid : '';

    const [vehicle_type, setVehicletype] = useState('');
    const [Brand, setBrand] = useState('');
    const [Model, setModel] = useState('');
    const [ Engine_type, setEnginetype] = useState('');
    const [mileage, setMileagedriven] = useState('');

    const onSubmitPressed = () => {
        // Gather all the input values
        const formData = {
            vehicle_type,
            Brand,
            Model,
            Engine_type,
            mileage,
            firebase_uid 
        };
        
        fetch(`http://192.168.1.124:8000/vehicle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                Alert.alert(
                    "Success",
                    "Vehicle details added successfully!",
                    "Please make sure to go and create your profile"
                    [{ text: "OK", onPress: () => navigation.navigate('TabNav') }]
                );
            } else {
                throw new Error('Failed to add vehicle details'+Error);
                print(firebase_uid)
            }
        })
        .catch(error => {
            console.error('Error:', error);
           
        });
    };

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../../assets/Images/Sdgp_Images/bg.png')} style={styles.background}>
                <Text style={styles.title}>Add Vehicle Details</Text>

                <Text style={styles.label}>Vehicle Type</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your Vehicle type'
                    value={vehicle_type}
                    onChangeText={text => setVehicletype(text)}
                />

                <Text style={styles.label}>Brand</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your vehicle brand'
                    value={Brand}
                    onChangeText={text => setBrand(text)}
                />

                <Text style={styles.label}>Model</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your vehicle model'
                    value={Model}
                    onChangeText={text => setModel(text)}
                />

                <Text style={styles.label}>Engine Type</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your engine type'
                    value={Engine_type}
                    onChangeText={text => setEnginetype(text)}
                />

                <Text style={styles.label}>Mileage Driven</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your mileage driven'
                    value={mileage}
                    onChangeText={text => setMileagedriven(text)}
                />

                <Pressable onPress={onSubmitPressed} style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    button: {
        height: 48,
        backgroundColor: '#1D2B78',
        width: '65%',
        borderWidth: 1,
        borderRadius: 50,
        padding: 9,
        marginVertical: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5,
        paddingTop: 9,
    },
    input: {
        height: 45,
        borderColor: '#1D2B78',
        width: '65%',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 20,
        padding: 8.5,
        marginVertical: 10,
    },
    title: {
        marginBottom: 1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        paddingRight: 90,
        paddingBottom: 20,
        paddingTop: 80,
    },
});

export default AddVehicleDetailsScreen;
