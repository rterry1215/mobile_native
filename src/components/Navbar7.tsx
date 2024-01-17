import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import NarrowImage from "../public/narrow.png";
import EditImage from "../public/edit.png";
import { useNavigation } from "@react-navigation/native";

const Navbar7 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("Profile");
  };
  const goEdit = () => {
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
        <View style={{ width: "50%" }}>
          <Text
            style={{ fontSize: 20, color: "#FFF", marginTop:37, left: -40 }}
          >
            Transaction History
          </Text>
          <Text
            style={{ fontSize: 12, color: "#FFF", marginTop: 0, left: -40 }}
          >
            Jhon Wick
          </Text>
        </View>
        <View style={{ width: "30%" }}>
        </View>
      </View>
    </View>
  );
};
export default Navbar7;
