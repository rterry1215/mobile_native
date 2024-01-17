import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BalanceImage from "../public/balance.jpg";
import AImage from "../public/1.png";
import BImage from "../public/2.png";
import CImage from "../public/3.png";
const TransMain = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Image
        source={BalanceImage}
        style={{ width: 362, height: 182, left: 25, top: 20 }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#0074FF",
            marginLeft: 23,
            top: 90,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 18,
                fontWeight: "600",
              }}
            >
              Transfer via Credit card
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 98,
                fontWeight: "600",
              }}
            >
              By Parent
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#FFF",
            marginLeft: 23,
            top: -20,
            position: "relative",
          }}
        >
          <View style={{ width: "50%" }}>
            <Image
              source={AImage}
              style={{ width: 50, height: 50, top: 12, left: 12 }}
            />
            <Text
              style={{ fontSize: 16, color: "#494949", top: -22, left: 68 }}
            >
              Great Indian
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#EC2222",
                top: 10,
                left: 118,
                fontWeight: "600",
              }}
            >
              - $160
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9D9D9D",
                top: 10,
                left: 98,
                fontWeight: "600",
              }}
            >
              20min ago
            </Text>
          </View>
        </View>
      </View>
      <View style={{ top: -20 }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#0074FF",
            marginLeft: 23,
            top: 90,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 18,
                fontWeight: "600",
              }}
            >
              Transfer via Credit card
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 98,
                fontWeight: "600",
              }}
            >
              By Parent
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#FFF",
            marginLeft: 23,
            top: -20,
            position: "relative",
          }}
        >
          <View style={{ width: "50%" }}>
            <Image
              source={BImage}
              style={{ width: 50, height: 50, top: 12, left: 12 }}
            />
            <Text
              style={{ fontSize: 16, color: "#494949", top: -22, left: 68 }}
            >
              David warner
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#01AA13",
                top: 10,
                left: 118,
                fontWeight: "600",
              }}
            >
              + $250
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9D9D9D",
                top: 10,
                left: 98,
                fontWeight: "600",
              }}
            >
              20min ago
            </Text>
          </View>
        </View>
      </View>
      <View style={{ top: -40 }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#0074FF",
            marginLeft: 23,
            top: 90,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 18,
                fontWeight: "600",
              }}
            >
              Transfer via cash
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                top: 47,
                left: 58,
                fontWeight: "600",
              }}
            >
              By representative
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 362,
            height: 75,
            borderRadius: 10,
            backgroundColor: "#FFF",
            marginLeft: 23,
            top: -20,
            position: "relative",
          }}
        >
          <View style={{ width: "50%" }}>
            <Image
              source={CImage}
              style={{ width: 50, height: 50, top: 12, left: 12 }}
            />
            <Text
              style={{ fontSize: 16, color: "#494949", top: -22, left: 68 }}
            >
              Great Indian
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#01AA13",
                top: 10,
                left: 125,
                fontWeight: "600",
              }}
            >
               $160
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9D9D9D",
                top: 10,
                left: 98,
                fontWeight: "600",
              }}
            >
              20min ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransMain;
