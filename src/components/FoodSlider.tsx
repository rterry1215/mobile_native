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

const FoodSlider = () => {
  const navigation = useNavigation();

  const goFoodDetail = () => {
    navigation.navigate("FoodDetail");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={{ flexDirection: "column", marginLeft: 22, marginTop: 20 }}>
        <View
          style={{
            borderColor: "#EFEFEF",
            borderRadius: 10,
            width: 370,
            height: 258,
            borderWidth: 1,
          }}
        >
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={goFoodDetail}
          >
            <Image source={DosaImage} style={styles.image} />
            <TouchableOpacity>
              <Image source={Group3Image} style={styles.image1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={Group4Image} style={styles.image2} />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "500", left: 15, top: 10 }}
            >
              Dosa Platter
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "400", left: 15, top: 17 }}
            >
              Great Indian
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "600", left: 300, top: -10 }}
            >
              $ 160
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: "#EFEFEF",
            borderRadius: 10,
            width: 370,
            height: 258,
            borderWidth: 1,
            top: 10,
          }}
        >
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={goFoodDetail}>
              <Image source={DahiImage} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={Group3Image} style={styles.image1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={Group4Image} style={styles.image2} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "500", left: 15, top: 10 }}
            >
              Dahi Chaat
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "400", left: 15, top: 17 }}
            >
              Masala Country
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "600", left: 300, top: -10 }}
            >
              $ 130
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: "#EFEFEF",
            borderRadius: 10,
            width: 370,
            height: 258,
            borderWidth: 1,
            top: 20,
          }}
        >
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={goFoodDetail}>
              <Image source={PaneerImage} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={Group3Image} style={styles.image1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={Group4Image} style={styles.image2} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "500", left: 15, top: 10 }}
            >
              Paneer Tikka
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "400", left: 15, top: 17 }}
            >
              Great Indian
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "600", left: 300, top: -10 }}
            >
              $ 160
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: "#EFEFEF",
            borderRadius: 10,
            width: 370,
            height: 258,
            borderWidth: 1,
            top: 30,
          }}
        >
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={goFoodDetail}>
              <Image source={PaneerImage} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={Group3Image} style={styles.image1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={Group4Image} style={styles.image2} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "500", left: 15, top: 10 }}
            >
              Paneer Tikka
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "400", left: 15, top: 17 }}
            >
              Great Indian
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "600", left: 300, top: -10 }}
            >
              $ 160
            </Text>
          </View>
        </View>
        
      </View>
      {/* Repeat the above structure for DahiImage and PaneerImage */}
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
});

export default FoodSlider;
