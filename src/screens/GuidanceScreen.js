import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const GuidanceScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null); // State to hold error

  const handleSearch = async () => {
    try {
      const response = await fetch('https://vehicle-repairo-back-end-95880a9904c7.herokuapp.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchText }), // Sending searchText as per Flask backend
      });
      const data = await response.json();
      if (data.results.length === 0) {
        setError("No results found");
      } else {
        setSearchResults(data.results);
        setError(null); // Clear error if results are found
      }
    } catch (error) {
      console.error('Error searching:', error);
      setError("An error occurred while searching"); // Set error if fetch fails
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.problem}</Text>
      <Text style={{ marginTop: 5 }}>{item.guideline}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{fontWeight:"bold" ,marginTop:120, textAlign: 'center', fontSize: 24 }}>Guidance</Text>
      <TextInput
        style={{ height: 45, borderColor: "#07305F", borderWidth: 1, margin: 10, padding: 13,borderRadius:35,marginVertical:20,width:320,  marginLeft:40}}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
        onSubmitEditing={handleSearch}
      />
      {error ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>{error}</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default GuidanceScreen;