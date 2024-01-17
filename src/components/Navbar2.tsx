import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const NarrowImage = require("../public/narrow.png");
import { useNavigation } from "@react-navigation/native";

const Navbar2 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('Home');
    
  };
  return (
    <View style={{ backgroundColor: "#0074FF", height: 76 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ width: "20%", marginTop: 23, left: 10 }}
          onPress={goBack}
        >
          <Image source={NarrowImage} />
        </TouchableOpacity>
        <View style={{ width: "80%" }}>
          <Text
            style={{ fontSize: 20, color: "#FFF", marginTop: 20, left: -40 }}
          >
            AI Recommanded Foods
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Navbar2;
