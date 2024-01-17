import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const notificationImage = require("../public/notification.png");
const ellipseImage = require("../public/ellipse.png");
const walletImage = require("../public/wallet.png");
import { useNavigation } from "@react-navigation/native";

const Navbar1 = () => {
  const navigation = useNavigation();
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  const goTrans = () => {
    navigation.navigate("Transaction");
  };
  const goNotification = () => {
    navigation.navigate("Notification");
  };
  return (
    <View style={{ flexDirection: "row", height: 110, backgroundColor: "#E2EFFF" }}>
      <View
        style={{ padding: 20, borderRadius: 8, width: "25%", marginTop: 2 }}
      >
        <TouchableOpacity style={{ width: 72, height: 56, marginTop: 10 }} onPress={goTrans}>
          {/* Wallet Image */}
          <Image
            source={walletImage}
            style={{ justifyContent: "center", width: 72, height: 56 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "25%", flexWrap: "wrap", marginTop: 30 }}>
        <Text style={{ color: "#0074FF", fontWeight: "bold", fontSize: 16 }}>$1650</Text>
        <Text style={{ color: "#9D9D9D", fontSize: 12 }}>Current Balance</Text>
        <Text style={{ color: "#9D9D9D", fontSize: 12, marginTop: 1 }}>
          Jhon Wick’s Wallet
        </Text>
      </View>
      <View style={{ width: "25%" }}>
        <TouchableOpacity
          style={{
            borderRadius: 24,
            backgroundColor: "white",
            width: 50,
            height: 50,
            padding: 16,
            marginTop: 30,
            marginLeft: 60,
          }}
          onPress={goNotification}
        >
          <Image
            source={notificationImage}
            style={{ justifyContent: "center", width: 24, height: 24, left:-3,top:-3 }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 48,
            height: 48,
            padding: 16,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          {/* Avatar Image */}
        </View>
      </View>
      <View style={{ width: "25%" }}>
        <TouchableOpacity
        onPress={handleProfile}
          style={{
            borderRadius: 24,
            width: 48,
            height: 48,
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <Image
            source={ellipseImage}
            style={{ justifyContent: "center", width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 48,
            height: 48,
            marginRight: 40,
          }}
        >
          {/* Avatar Image */}
        </View>
      </View>
    </View>
  );
};

export default Navbar1;
