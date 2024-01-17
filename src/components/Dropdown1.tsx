import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
const countries = ["Paneer (Indian Cottage Cheese)", "Marinade", "Marinade"];

const Dropdown1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Text style={{ fontSize: 16, color: "#202020", left: 17 }}>
          Ingredients
        </Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={require("../public/narr.jpg")}
            style={{ left: 255, width: 18, height: 18 }} // Adds space between the image and the text
          />
        </TouchableOpacity>
      </View>
      {isDropdownOpen && (
        <View>
          {countries.map((country, index) => (
            <TouchableOpacity
              style={{ top: 10, left: 20 }}
              key={index}
              onPress={() => console.log(country, index)}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "5%", padding:2 }}>
                  <Text style={{ marginRight: 5 }}>•</Text>
                </View>
                <View style={{ width: "95%", padding:2 }}>
                  <Text>{country}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown1;
