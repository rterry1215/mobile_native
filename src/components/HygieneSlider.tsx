import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CurrentMain from "./CurrentMain";
import ChartMain from "./ChartMain";
import { useNavigation } from "@react-navigation/native";
import Dropdown from "./Dropdown";

const HygieneSlider = () => {
  const navigation = useNavigation();
  const [focusedButton, setFocusedButton] = useState("Current"); // Set the initial state to "Current"

  const goFoodDetail = () => {
    navigation.navigate("FoodDetail");
  };

  const handleButtonPress = (buttonType) => {
    setFocusedButton(buttonType);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={[
              focusedButton === "Current" ? styles.focuseButton : styles.Button,
            ]}
            onPress={() => handleButtonPress("Current")}
          >
            <Text
              style={[
                focusedButton === "Current" ? styles.focuseText : styles.Text,
              ]}
            >
              Current Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={[
              focusedButton === "Chart" ? styles.focuseButton : styles.Button,
            ]}
            onPress={() => handleButtonPress("Chart")}
          >
            <Text
              style={[
                focusedButton === "Chart" ? styles.focuseText : styles.Text,
              ]}
            >
              Chart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {focusedButton === "Current" && ( // Conditionally render the Dropdown component
        <View style={{ top: 25, backgroundColor: "#EFEFEF", zIndex: 1, left: 90 }}>
          <Dropdown />
        </View>
      )}
      <View style={{ top: 20 }}>
        {focusedButton === "Current" ? <CurrentMain /> : <ChartMain />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    position: "relative",
    flex: 2,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
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

export default HygieneSlider;
