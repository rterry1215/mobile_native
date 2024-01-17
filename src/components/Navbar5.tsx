import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const NarrowImage = require("../public/narrow.png");
import { useNavigation } from "@react-navigation/native";

const Navbar5 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("EditPro");
  };
  return (
    <View style={{ backgroundColor: "#0074FF", height: 96 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ width: "20%", marginTop: 50, left: 10 }}
          onPress={goBack}
        >
          <Image source={NarrowImage} />
        </TouchableOpacity>
        <View style={{ width: "25%" }}>
          <Text
            style={{ fontSize: 20, color: "#FFF", marginTop:47, left: -40 }}
          >
           Info
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Navbar5;
