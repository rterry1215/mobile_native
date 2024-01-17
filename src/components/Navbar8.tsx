import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import NarrowImage from "../public/narrow.png";
import FoodDetailImage from "../public/fooddetail.png";
import Veg1Image from "../public/veg1.png";
import Veg2Image from "../public/veg2.png";
import AaImage from "../public/aa.jpg";
import BbImage from "../public/bb.jpg";
import { useNavigation } from "@react-navigation/native";

const Navbar8 = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("Food");
  };

  const windowWidth = Dimensions.get("window").width; // Get the window width

  return (
    <View style={{}}>
      <View style={{ flexDirection: "row", alignItems: "center", height: 250 }}>
        <Image
          source={FoodDetailImage}
          style={{ width: windowWidth, aspectRatio: 1 }} // Set the width based on the window width and maintain aspect ratio
        />
        <TouchableOpacity
          style={{ position: "absolute", left: 10, top: 50 }}
          onPress={goBack}
        >
          <Image source={NarrowImage} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: 20,
          height: 600,
          width: windowWidth,
          backgroundColor: "#FFF",
          top: 60,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 24, marginTop: 13, marginLeft: 20 }}>
              Paneer Tikka
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 24, marginTop: 13, marginLeft: 120 }}>
              $ 160
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: 86,
                height: 38,
                left: 20,
                top: 30,
                backgroundColor: "rgba(0, 116, 255, 0.09)",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%", top: 10, left: 15 }}>
                  <Image source={Veg1Image} />
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={{ textAlign: "center", top: 10, left: -9 }}>
                    Veg
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: 165,
                height: 38,
                left: -80,
                top: 30,
                backgroundColor: "rgba(0, 116, 255, 0.09)",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%", top: 10, left: 15 }}>
                  <Image source={Veg2Image} />
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={{ textAlign: "center", top: 10, left: -30 }}>
                    Low Calories
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 2,
            left: 20,
            backgroundColor: "#E9E9E9",
            top: 50,
          }}
        ></View>
        <View style={{ top: 60, left: 20 }}>
          <Text style={{ fontSize: 15 }}>Nutritional Value </Text>
        </View>
        <View style={{ flexDirection: "row", top: 80, left: 20 }}>
          <View style={{ width: "25%" }}>
            <Text style={{ fontSize: 20 }}>190</Text>
            <Text style={{ fontSize: 16, color: "#7B7B7B" }}>cal</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ fontSize: 20 }}>12.5</Text>
            <Text style={{ fontSize: 16, color: "#7B7B7B" }}>Protine</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ fontSize: 20 }}>11.5</Text>
            <Text style={{ fontSize: 16, color: "#7B7B7B" }}>fats</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ fontSize: 20 }}>4.3</Text>
            <Text style={{ fontSize: 16, color: "#7B7B7B" }}>Carbs</Text>
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 2,
            left: 20,
            backgroundColor: "#E9E9E9",
            top: 100,
          }}
        ></View>
        <View style={{ flexDirection: "column", top: 120, left: 20 }}>
          <Text style={{ fontSize: 15 }}>ingredients</Text>
          <Text style={{ fontSize: 13, color: "#9D9D9D", width: 376 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temp
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: 164,
                height: 60,
                borderColor: "#0074FF",
                borderWidth: 1,
                marginTop: 160,
                marginLeft: 20,
              }}
            >
              <Image
                source={AaImage}
                style={{ width: 24, height: 24, top: 15, left: 30 }}
              ></Image>
              <Text
                style={{
                  fontSize: 16,
                  color: "#0074FF",
                  textAlign: "center",
                  top: -8,
                  left: 10,
                }}
              >
                Inform
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                width: 164,
                height: 60,
                borderRadius: 10,
                backgroundColor: "#0074FF",
                marginTop: 160,
                marginLeft: 20,
              }}
            >
              <Image
                source={BbImage}
                style={{ width: 24, height: 24, top: 15, left: 30 }}
              ></Image>

              <Text
                style={{
                  fontSize: 16,
                  color: "#FFF",
                  textAlign: "center",
                  top: -8,
                  left: 10,
                }}
              >
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Navbar8;
