import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const DosaImage = require("../public/dosa.png");
const DahiImage = require("../public/dahi.png");
const PaneerImage = require("../public/paneer.png");
const Group3Image = require("../public/Group3.png");
const Group4Image = require("../public/Group4.png");
import { useNavigation } from "@react-navigation/native";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";

const CurrentMain = () => {
  return (
    <View style={{ flexDirection: "column", marginLeft: 22, marginTop: 40 }}>
      <View
        style={{
          borderColor: "#EFEFEF",
          borderRadius: 10,
          width: 370,
          height: 608,
          borderWidth: 1,
        }}
      >
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={DosaImage} style={styles.image} />
          <TouchableOpacity>
            <Image source={Group3Image} style={styles.image1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground source={Group4Image} style={styles.image2} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20, fontWeight: "500", left: 15, top: 10 }}>
            Dosa Platter
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              left: 15,
              top: 17,
              color: "#9D9D9D",
            }}
          >
            12 Aug , 12:30PM
          </Text>
          <Text
            style={{ fontSize: 20, fontWeight: "600", left: 300, top: -40 }}
          >
            $ 160
          </Text>
          <View style={{ width: 300, height: 400, top: 20 }}>
            <Dropdown1 />
            <View style={{top:10}}>
              <Dropdown2 />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    flex: 2,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF",
    top: -60,
  },
  image: {
    width: "100%",
    height: 176,
    borderRadius: 10,
    borderBottomWidth: 0,
    resizeMode: "cover",
  },
  image1: {
    position: "absolute",
    top: -160, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  image2: {
    position: "absolute",
    top: -160, // Adjust the position as needed
    right: 10, // Adjust the position as needed
    width: 46,
    height: 46,
    resizeMode: "cover",
    backgroundColor: "#FFFFFFC7",
    borderRadius: 3,
  },
  focuseButton: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#0074FF",
    borderWidth: 2,
    height: 50,
  },
  Button: {
    fontSize: 20,
    color: "#9D9D9D",
    textAlign: "center",
    top: 0,
  },
  focuseText: {
    fontSize: 20,
    color: "#0074FF",
    textAlign: "center",
    top: 10,
  },
  Text: {
    fontSize: 20,
    color: "#9D9D9D",
    textAlign: "center",
    top: 10,
  },
});

export default CurrentMain;
