import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <View>
      <View style={{ flexDirection: "column", marginTop: 50, left: 20 }}>
        <Text style={{ fontSize: 16, color: "#494949" }}>
          What is your food type?
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 2,
            paddingBottom: 2,
            top: 20,
            left: -27,
            justifyContent: "space-around",
          }}
        >
          <View
            style={[
              selectedOption === "1"
                ? styles.mainStyle1
                : styles.selectedStyle1,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("1")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "1" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "1" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Veg</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              selectedOption === "2"
                ? styles.mainStyle2
                : styles.selectedStyle2,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("2")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "2" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "2" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Non-veg</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              selectedOption === "3"
                ? styles.mainStyle3
                : styles.selectedStyle3,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("3")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "3" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "3" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Vegan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 16, color: "#494949", marginTop:80 }}>
          What is your food type?
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 2,
            paddingBottom: 2,
            top: 20,
            left: -27,
            justifyContent: "space-around",
          }}
        >
          <View
            style={[
              selectedOption === "4"
                ? styles.mainStyle4
                : styles.selectedStyle4,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("4")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "4" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "4" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Weight gain</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              selectedOption === "5"
                ? styles.mainStyle5
                : styles.selectedStyle5,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("5")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "5" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "5" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Fat loss</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          <View
            style={[
              selectedOption === "6"
                ? styles.mainStyle6
                : styles.selectedStyle6,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleSelect("6")}
              style={{ top: 8, left: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: selectedOption === "6" ? "#0074FF" : "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedOption === "6" && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 6,
                        backgroundColor: "#0074FF",
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8 }}>Healthy</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity
          style={{
            width: 343,
            height: 55,
            left: 33,
            top: 390,
            alignItems: "center",
            backgroundColor: "#0074FF",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#FFF",
              top: 15,
            }}
          >
            SAVE
          </Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainStyle2: {
    width: 113,
    height: 37,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle2: {
    width: 113,
    height: 37,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
  mainStyle1: {
    width: 80,
    height: 37,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle1: {
    width: 80,
    height: 37,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
  mainStyle3: {
    width: 97,
    height: 37,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle3: {
    width: 97,
    height: 37,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
  mainStyle4: {
    width: 134,
    height: 37,
    left:-18,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle4: {
    width: 134,
    height: 37,
    left:-18,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
  mainStyle5: {
    width: 106,
    height: 37,
    left:-60,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle5: {
    width: 106,
    height: 37,
    left:-60,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
  mainStyle6: {
    width: 106,
    height: 37,
    left:-3,
    top:40,
    borderRadius: 15,
    backgroundColor: "rgba(1, 170, 19, 0.09)",
  },
  selectedStyle6: {
    width: 106,
    height: 37,
    left:-3,
    top:40,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
  },
});
export default RadioGroup;
