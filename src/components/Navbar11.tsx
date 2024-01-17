import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import NarrowImage from "../public/narrow.png";
import { useNavigation } from "@react-navigation/native";

const Navbar6 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("Profile");
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
        <View style={{ width: "80%" }}>
          <Text
            style={{ fontSize: 20, color: "#FFF", marginTop: 47, left: -40 }}
          >
            Hygiene Card
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Navbar6;
