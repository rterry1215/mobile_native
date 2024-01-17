import React, { useState } from "react";
import { View, Text, TouchableOpacity, } from "react-native";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={toggleAccordion}
          style={{
            position: "absolute",
            marginTop: -7,
            marginLeft: -13,
            padding: 2,
            backgroundColor: "white",
            borderColor: "gray",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#000", fontSize: 16 }}>This Week</Text>
          <Text>{isOpen ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {isOpen && (
          <View
            style={{
              position: "absolute",
              marginTop: 30,
              width: "100%",
              maxWidth: 170,
              transform: [{ translateX: -160 }],
              padding: 10,
              borderRadius: 15,
              marginLeft: 80,
              backgroundColor: "#EFEFEF",
              zIndex: 1,
            }}
          >
            <TouchableOpacity style={{ marginBottom: 10 }}>
              <Text style={{ color: "#000", fontSize: 14 }}>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                borderTopWidth: 1,
                borderTopColor: "black",
              }}
            >
              <Text style={{ color: "#000", fontSize: 14 }}>This Month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                borderTopWidth: 1,
                borderTopColor: "black",
              }}
            >
              <Text style={{ color: "#000", fontSize: 14 }}>Preview Month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                borderTopWidth: 1,
                borderTopColor: "black",
              }}
            >
              <Text style={{ color: "#000", fontSize: 14 }}>Last 1 Year</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                borderTopWidth: 1,
                borderTopColor: "black",
              }}
            >
              <Text style={{ color: "#000", fontSize: 14 }}>Last 5 Year</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Dropdown;
