import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
const Graph1Image = require("../public/graph1.jpg");
const Graph2Image = require("../public/graph2.jpg");
const GreenImage = require("../public/green.png");
const BlueImage = require("../public/blue.png");
const Sign1Image = require("../public/sign1.png");
const Sign2Image = require("../public/sign2.png");
const Sign3Image = require("../public/sign3.png");
const Sign4Image = require("../public/sign4.png");
const ChartMain = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={{ flexDirection: "column", height: 1000 }}>
        <Image
          source={Graph1Image}
          style={{ width: 294, height: 294, top: 10, left: 60 }}
        ></Image>
        <View style={{ flexDirection: "row", top: 40 }}>
          <View style={{ width: "10%", left: 10 }}>
            <Image
              source={GreenImage}
              style={{ width: 14, height: 14 }}
            ></Image>
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ textAlign: "center", left: -58 }}>
              AI recommended food you followed
            </Text>
          </View>
        </View>
        <View style={{ height: 2, backgroundColor: "#EFEFEF", top: 50 }}></View>
        <View style={{ flexDirection: "row", top: 60 }}>
          <View style={{ width: "10%", left: 10 }}>
            <Image source={BlueImage} style={{ width: 14, height: 14 }}></Image>
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ textAlign: "center", left: -30 }}>
              AI recommended food you have not followed
            </Text>
          </View>
        </View>
        <View style={{ top: 100, left: 10 }}>
          <Text style={{ fontSize: 16, color: "#202020" }}>
            Health Status( Recommended by AI)
          </Text>
          <View
            style={{
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#E9E9E9",
              width: 380,
              height: 240,
              left: 6,
              top: 10,
            }}
          >
            <Image
              source={Graph2Image}
              style={{ width: 343, height: 222, left: 10 }}
            ></Image>
          </View>
          <View style={{ flexDirection: "row", top: 60 }}>
            <View style={{ width: "10%", left: 10, top: 3 }}>
              <Image
                source={Sign1Image}
                style={{ width: 14, height: 14 }}
              ></Image>
            </View>
            <View style={{ width: "90%" }}>
              <Text style={{ textAlign: "center", left: -36 }}>
                20% Protein needed to complete your goal{" "}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", top: 70 }}>
            <View style={{ width: "10%", left: 10, top: 3 }}>
              <Image
                source={Sign2Image}
                style={{ width: 14, height: 14 }}
              ></Image>
            </View>
            <View style={{ width: "90%" }}>
              <Text style={{ textAlign: "center", left: -40 }}>
                40% Carbs needed to complete your goal{" "}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", top: 80 }}>
            <View style={{ width: "10%", left: 10, top: 3 }}>
              <Image
                source={Sign3Image}
                style={{ width: 14, height: 14 }}
              ></Image>
            </View>
            <View style={{ width: "90%" }}>
              <Text style={{ textAlign: "center", left: -32 }}>
                22% Calories needed to complete your goal{" "}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", top: 90 }}>
            <View style={{ width: "10%", left: 10, top: 3 }}>
              <Image
                source={Sign4Image}
                style={{ width: 14, height: 14 }}
              ></Image>
            </View>
            <View style={{ width: "90%" }}>
              <Text style={{ textAlign: "center", left: -47 }}>
                48% Fat needed to complete your goal{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ChartMain;
