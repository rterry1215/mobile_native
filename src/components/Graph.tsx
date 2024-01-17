import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Dropdown from "./Dropdown";
const Group1Image = require("../public/Group1.png");
const Group2Image = require("../public/Group2.png");
const GgImage = require("../public/gg.jpg");
const BreakfastImage = require("../public/breakfast.jpg");
const LunchImage = require("../public/lunch.jpg");
const DinnerImage = require("../public/dinner.jpg");
import Slider from "./Slider";
import { useNavigation } from "@react-navigation/native";
const Graph = () => {
  const [focusedButton, setFocusedButton] = useState(null);
  const handleButtonPress = (buttonType) => {
    setFocusedButton(buttonType);
  };
  const navigation = useNavigation();
  const handleViewAll = () => {
    navigation.navigate("Food");
  };
  const goChartMain = () => {
    navigation.navigate("ChartMain");
  };
  return (
    <View style={{ position: "relative" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "#000",
              marginLeft: 25,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Comparison
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Dropdown />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={goChartMain}
          style={{
            marginTop: 30,
            marginLeft: 190,
            width: "100%",
            maxWidth: 350,
            height: 270,
            transform: [{ translateX: -160 }],
            padding: 10,
            borderRadius: 15,
            borderColor: "#9D9D9D",
            borderWidth: 1,
          }}
        >
          <Image
            source={GgImage}
            style={{
              justifyContent: "center",
              width: 345,
              height: 200,
              marginLeft: -10,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <Image
            source={Group2Image}
            style={{
              justifyContent: "center",
              width: 67,
              height: 30,
              marginLeft: 20,
              marginTop: 20,
            }}
          />
          <Image
            source={Group1Image}
            style={{
              justifyContent: "center",
              width: 67,
              height: 30,
              marginTop: -30,
              marginLeft: 100,
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "#000",
              marginLeft: 25,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            AI recommended Food
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <View>
              <Text
                style={{
                  color: "#0074FF",
                  marginLeft: 120,
                  marginTop: 10,
                  fontSize: 16,
                }}
                onPress={handleViewAll}
              >
                View All
              </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={
            focusedButton === "Breakfast"
              ? styles2.buttonContainer
              : styles1.buttonContainer
          }
          onPress={() => handleButtonPress("Breakfast")}
        >
          <Image
            source={BreakfastImage}
            style={{
              justifyContent: "center",
              width: 23,
              height: 23,
              marginLeft: -70,
              backgroundColor: "#9D9D9D",
            }}
          />
          <Text style={styles.buttonText1}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            focusedButton === "Lunch"
              ? styles2.buttonContainer
              : styles1.buttonContainer
          }
          onPress={() => handleButtonPress("Lunch")}
        >
          <Image
            source={LunchImage}
            style={{
              justifyContent: "center",
              width: 23,
              height: 23,
              left: -25,
              backgroundColor: "#9D9D9D",
            }}
          />
          <Text style={styles.buttonText2}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            focusedButton === "Dinner"
              ? styles2.buttonContainer
              : styles1.buttonContainer
          }
          onPress={() => handleButtonPress("Dinner")}
        >
          <Image
            source={DinnerImage}
            style={{
              justifyContent: "center",
              width: 23,
              height: 23,
              marginLeft: -70,
              marginTop: -2,
              backgroundColor: "#9D9D9D",
            }}
          />
          <Text style={styles.buttonText3}>Dinner</Text>
        </TouchableOpacity>
      </View>
      <Slider />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 37, // Apply border radius
    backgroundColor: "#EFEFEF", // Apply background color
    padding: 10,
    width: 121,
    height: 41,
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
  },

  buttonText1: {
    color: "#000", // Change text color
    fontWeight: "bold",
    marginTop: -23,
    marginRight: -20,
  },
  buttonText2: {
    color: "#000", // Change text color
    fontWeight: "bold",
    marginTop: -23,
    marginRight: -20,
  },
  buttonText3: {
    color: "#000", // Change text color
    fontWeight: "bold",
    marginTop: -23,
    marginRight: -20,
  },
});
const styles1 = StyleSheet.create({
  buttonContainer: {
    borderRadius: 37, // Apply border radius
    backgroundColor: "#EFEFEF", // Apply background color
    padding: 10,
    width: 121,
    height: 41,
    marginTop: 20,
    marginLeft: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#000", // Change text color
    fontWeight: "bold",
  },
});
const styles2 = StyleSheet.create({
  buttonContainer: {
    borderRadius: 37, // Apply border radius
    backgroundColor: "white", // Apply background color
    padding: 10,
    width: 121,
    height: 41,
    marginTop: 20,
    marginLeft: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0074FF",
  },

  buttonText: {
    color: "#000", // Change text color
    fontWeight: "bold",
  },
});
export default Graph;
