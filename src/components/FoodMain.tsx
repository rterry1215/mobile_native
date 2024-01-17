import React,{useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
const Rec1Image = require("../public/Rec1.png");
const Rec2Image = require("../public/Rec2.png");
const Rec3Image = require("../public/Rec3.png");
const VectorImage = require("../public/Vector.png");
const FamilyImage = require("../public/family.jpg");
const CookImage = require("../public/cook.jpg");
const CanteenImage = require("../public/canteen.jpg");
const RestaurantImage = require("../public/restaurant.jpg");
const Veg1Image = require("../public/veg1.png");
const Veg2Image = require("../public/veg2.png");
const AaImage = require("../public/aa.jpg");
const BbImage = require("../public/bb.jpg");
const FoodMain = () => {
  const windowWidth = Dimensions.get("window").width;

  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [informModalVisible, setInformModalVisible] = useState(false);
  const [orderDoneModalVisible, setOrderDoneModalVisible] = useState(false);
  const [informDoneModalVisible, setInformDoneModalVisible] = useState(false);
  const [cookDoneModalVisible, setCookDoneModalVisible] = useState(false);
  const [focusedButton, setFocusedButton] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.card}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 20,
    backgroundColor: "#FFF",
    zIndex: 1,
    padding: 20,
    width: "90%", // Adjust the width as a percentage for responsiveness
    maxWidth: 400, // Set a maximum width for larger screens
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#E9E9E9",
    width: 179,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonImage: {
    width: 15,
    height: 15,
    left: 10,
    backgroundColor: "#9D9D9D",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#9D9D9D",
    textAlign: "center",
    marginTop: -7,
    left: 10,
    top: 2.5,
  },
  focusedButton: {
    backgroundColor: "#0074FF0F",
    borderColor: "#0074FF",
    borderWidth: 1,
  },
  focusedButtonText: {
    color: "black",
    fontWeight: "500",
  },
  parentImageStyle: {
    width: "50%",
    marginTop: 30,
    marginLeft: 70,
  },
  parentDone: {
    marginTop: 10,
    padding: 10,
    left: -10,
  },
  cookDone: {
    marginTop: 50,
    padding: 10,
    left: -10,
  },
  focuseCanteenButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0074FF",
    width: 179,
    height: 44,
  },
  // Add more styles for the components within the card as needed
});

export default FoodMain;
