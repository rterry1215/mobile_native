import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const NarrowImage = require("../public/narrow.png");
const EditImage = require("../public/edit.png");
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";

const Navbar3 = () => {
  const navigation = useNavigation();
  const { userInfo } = useContext(UserContext);

  const goBack = () => {
    navigation.navigate("Home");
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
        <View style={{ width: "25%" }}>
          <Text
            style={{ fontSize: 20, color: "#FFF", marginTop: 37, left: -40 }}
          >
            Profile
          </Text>
          <Text
            style={{ fontSize: 12, color: "#FFF", marginTop: 0, left: -40 }}
          >
            {userInfo.firstname + " " + userInfo.lastname}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={{ marginTop: 50, left: 170 }}
            onPress={goEdit}
          >
            <Image source={EditImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Navbar3;
