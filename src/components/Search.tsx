import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather'; // Import the Feather icon library

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Search Food or Canteen..."
        placeholderTextColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: 370,
    height:50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 20,
    borderRadius: 10,
    color: "#9D9D9D",
    borderColor:"#EFEFEE",
    borderWidth:1,
    marginTop:10,
    marginLeft:20
  },
  icon: {
    position: "absolute",
    top: 24,
    left: 27,
  },
});

export default SearchBar;
