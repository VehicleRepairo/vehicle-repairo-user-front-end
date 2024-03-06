import React, { useState } from 'react';
import { View, TextInput, FlatList, Text,StyleSheet } from 'react-native';

const GuidanceScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word_to_find: searchText }), // Updated key to match backend
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const renderItem = ({ item }) => (
    <Text>{item.name}</Text>
  );

  return (
    <View>
    <Text style={styles.title} >Guidance</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles= StyleSheet.create({
   textinput: { height: 45,
    borderColor: 'gray',
    borderWidth: 1.1,
    margin: 10, 
    padding: 13,
    borderRadius:35,
    marginVertical:20,
    width:300,
    marginLeft:45, 
    },
    title:{
    marginLeft:155,
    marginTop:120,
    fontSize:22,
    fontWeight:'bold'
    

    }
})
export default GuidanceScreen