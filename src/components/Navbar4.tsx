import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const NarrowImage = require("../public/narrow.png");
const InfoImage = require("../public/info.png");
import { useNavigation } from "@react-navigation/native";

const Navbar4 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("Profile");
  };
  const goEdit = () => {
    navigation.navigate("Info");
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
           Edit Profile
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={{ marginTop: 50, left: 170 }}
            onPress={goEdit}
          >
            <Image source={InfoImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Navbar4;
