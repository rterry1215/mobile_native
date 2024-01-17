import React, { useContext } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AvatarImage from "../public/avatar.jpg"; // Replace with the actual image source
import CardImage from "../public/card.jpg";
import GoalImage from "../public/goal.jpg";
import TransactionImage from "../public/transaction.jpg";
import OrderImage from "../public/order.jpg";
import NotificationImage from "../public/notification.jpg";
import LogoutImage from "../public/logout.jpg";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";

const ProfileMain = () => {
  const navigation = useNavigation();
  const { logout, userInfo } = useContext(UserContext);

  const goGoal = () => {
    navigation.navigate("Goal");
  };
  const goTrans = () => {
    navigation.navigate("Transaction");
  };
  const goOrder = () => {
    navigation.navigate("OrderHistory");
  };
  const goNotification = () => {
    navigation.navigate("Notification");
  };
  const goHygiene = () => {
    navigation.navigate("Hygiene");
  };

  const handleLogout = () => {
    logout();
    navigation.navigate("Sign In");
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ height: "25%" }}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={AvatarImage} style={styles.image} />
          </View>
        </View>
        <View style={{ alignItems: "center", top: 10 }}>
          <Text style={styles.text}>
            {userInfo.firstname + " " + userInfo.lastname}
          </Text>
        </View>
      </View>
      <View style={{ height: "75%" }}>
        <View style={styles.list}>
          <TouchableOpacity onPress={goHygiene}>
            <Image
              source={CardImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Hygiene Card
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity onPress={goGoal}>
            <Image
              source={GoalImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Goals
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity onPress={goOrder}>
            <Image
              source={OrderImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Order History
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity onPress={goTrans}>
            <Image
              source={TransactionImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Transaction History
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity onPress={goNotification}>
            <Image
              source={NotificationImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Notification
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={LogoutImage}
              style={{ width: 20, height: 20, top: 23, left: -180 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: -140 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    alignItems: "center",
  },
  image: {
    borderColor: "#0074FF",
    borderWidth: 3,
    borderRadius: 100,
    width: 125, // Adjust the width and height as needed
    height: 125,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  list: {
    width: 420,
    height: 52,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
    borderTopWidth: 0,
  },
});

export default ProfileMain;
