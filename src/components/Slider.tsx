import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import Rec1Image from "../public/Rec1.png";
import Rec2Image from "../public/Rec2.png";
import Rec3Image from "../public/Rec3.png";
import VectorImage from "../public/Vector.png";
import FamilyImage from "../public/family.jpg";
import CookImage from "../public/cook.jpg";
import CanteenImage from "../public/canteen.jpg";
import RestaurantImage from "../public/restaurant.jpg";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "MASALA DOSA",
    price: "Starts at $199 only",
    image: Rec1Image,
  },
  {
    id: "2",
    title: "Biryani Rice",
    price: "Starts at $199 only",
    image: Rec2Image,
  },
];

const Slider = () => {
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [informModalVisible, setInformModalVisible] = useState(false);
  const [orderDoneModalVisible, setOrderDoneModalVisible] = useState(false);
  const [informDoneModalVisible, setInformDoneModalVisible] = useState(false);
  const [cookDoneModalVisible, setCookDoneModalVisible] = useState(false);
  const [focusedButton, setFocusedButton] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const handleTextChange = (text) => {
    // Remove non-numeric characters
    const filteredText = text.replace(/[^0-9]/g, "");
    // Limit the input to 3 digits
    const truncatedText = filteredText.slice(0, 3);
    setInputValue(truncatedText);
  };
  const navigation = useNavigation();
  const handleViewMore = () => {
    navigation.navigate("Food");
  };
  
  const handleTextChange1 = (text) => {
    const filteredText1 = text.replace(/[^0-9+]/g, "");
    const truncatedText1 = filteredText1.slice(0, 11);
    setInputValue1(truncatedText1);
  };
  const handleButtonPress = (buttonName) => {
    setFocusedButton(buttonName);
  };
  const toggleModals = () => {
    setOrderModalVisible(!orderModalVisible);
    setOrderDoneModalVisible(!orderDoneModalVisible);
  };
  const toggleModals1 = () => {
    setInformModalVisible(!informModalVisible);
    setInformDoneModalVisible(!informDoneModalVisible);
  };
  const toggleModals2 = () => {
    setInformDoneModalVisible(!informDoneModalVisible);
    setCookDoneModalVisible(!cookDoneModalVisible);
  };
  const renderItem = ({ item }) => (
    <View
      style={{
        marginTop: 20,
        marginLeft: 20,
        width: 200,
        height: 180,
        padding: 2,
        borderColor: "#9D9D9D",
        borderRadius: 15, // Apply borderRadius to the container
        overflow: "hidden", // Ensure the borderRadius is applied correctly
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 15,
        }}
      />
      <View style={{ position: "absolute", top: 90, left: 15 }}>
        <Text style={{ color: "white", fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: "white", fontSize: 12 }}>{item.price}</Text>
        <TouchableOpacity
          onPress={() => setInformModalVisible(true)}
          style={{
            padding: 8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
            marginTop: 5,
            width: 80,
            height: 31,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 12,
              top: -2,
            }}
          >
            Inform
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOrderModalVisible(true)}
          style={{
            padding: 8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
            marginTop: -31.5,
            width: 80,
            height: 31,
            marginLeft: 90,
            backgroundColor: "#9D9D9D",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 12,
              top: -2,
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={orderModalVisible}
        onRequestClose={() => {
          setOrderModalVisible(!orderModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 286,
              height: 359,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setOrderModalVisible(false)}
              style={{ position: "absolute", top: 10, right: -20 }}
            >
              <Image
                source={VectorImage}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: -40,
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: "#202020" }}>
              Place Order to
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", marginTop: 30, marginLeft: 70 }}>
                <Image
                  source={Rec3Image}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
              </View>
              <View style={{ width: "50%", top: 40, left: -40 }}>
                <Text
                  style={{ fontSize: 16, color: "#202020", fontWeight: "bold" }}
                >
                  Dahi Chaat
                </Text>
                <Text style={{ fontSize: 12, color: "#202020" }}>
                  For your dinner!
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: "50%", marginTop: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    focusedButton === "Canteen"
                      ? styles.focuseCanteenButton
                      : null,
                  ]}
                  onPress={() => handleButtonPress("Canteen")}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "50%", left: 20 }}>
                      <Image
                        source={CanteenImage}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    <View style={{ width: "50%", left: -60, top:3}}>
                      <Text
                        style={[
                          styles.buttonText,
                          focusedButton === "Canteen"
                            ? styles.focusedButtonText
                            : null,
                        ]}
                      >
                        Canteen
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%", marginTop: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    focusedButton === "Restaurant"
                      ? styles.focuseCanteenButton
                      : null,
                  ]}
                  onPress={() => handleButtonPress("Restaurant")}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "50%", left: 20 }}>
                      <Image
                        source={RestaurantImage}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    <View style={{ width: "50%", left: -50,top:3 }}>
                    <Text
                        style={[
                          styles.buttonText,
                          focusedButton === "Restaurant"
                            ? styles.focusedButtonText
                            : null,
                        ]}
                      >
                        Restaurant
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={toggleModals}
              style={{
                marginTop: 20,
                padding: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#0074FF",
                  borderRadius: 10,
                  width: 128,
                  height: 41,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FFF",
                    textAlign: "center",
                    marginTop: 7,
                  }}
                >
                  DONE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={informModalVisible}
        onRequestClose={() => {
          setInformModalVisible(!informModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 286,
              height: 359,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setInformModalVisible(false)}
              style={{ position: "absolute", top: 10, right: -20 }}
            >
              <Image
                source={VectorImage}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: -40,
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: "#202020" }}>
              Share / Inform your:
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", marginTop: 30, marginLeft: 70 }}>
                <Image
                  source={Rec3Image}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
              </View>
              <View style={{ width: "50%", top: 40, left: -40 }}>
                <Text
                  style={{ fontSize: 16, color: "#202020", fontWeight: "bold" }}
                >
                  infrom
                </Text>
                <Text style={{ fontSize: 12, color: "#202020" }}>
                  For your dinner!
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: "50%", marginTop: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    focusedButton === "Parents" ? styles.focusedButton : null,
                  ]}
                  onPress={() => handleButtonPress("Parents")}
                >
                  <Image source={FamilyImage} style={styles.buttonImage} />
                  <Text
                    style={[
                      styles.buttonText,
                      focusedButton === "Parents"
                        ? styles.focusedButtonText
                        : null,
                    ]}
                  >
                    Parents
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%", marginTop: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    focusedButton === "Cook" ? styles.focusedButton : null,
                  ]}
                  onPress={() => handleButtonPress("Cook")}
                >
                  <Image source={CookImage} style={styles.buttonImage} />
                  <Text
                    style={[
                      styles.buttonText,
                      focusedButton === "Cook"
                        ? styles.focusedButtonText
                        : null,
                    ]}
                  >
                    Cook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <TouchableOpacity
                  onPress={handleViewMore}
                  style={{
                    marginTop: 20,
                    padding: 10,
                    marginLeft: -20,
                  }}
                >
                  <View
                    style={{
                      borderColor: "#0074FF",
                      borderWidth: 1,
                      borderRadius: 10,
                      width: 128,
                      height: 41,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#0074FF",
                        textAlign: "center",
                        marginTop: 7,
                      }}
                    >
                      VIEW MORE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%" }}>
                <TouchableOpacity
                  onPress={toggleModals1}
                  style={{
                    marginTop: 20,
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#0074FF",
                      borderRadius: 10,
                      width: 128,
                      height: 41,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        marginTop: 7,
                      }}
                    >
                      DONE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={orderDoneModalVisible}
        onRequestClose={() => {
          setOrderDoneModalVisible(!orderDoneModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 286,
              height: 260,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setOrderDoneModalVisible(false)}
              style={{ position: "absolute", top: 10, right: -20 }}
            >
              <Image
                source={VectorImage}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: -40,
                }}
              />
            </TouchableOpacity>
            <View style={{ width: 240 }}>
              <Text style={{ fontSize: 18, color: "#202020" }}>
                Order placed to the canteen
              </Text>
            </View>
            <Text style={{ fontSize: 20, color: "#04C10C" }}>
              successfully!
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", marginTop: 30, marginLeft: 70 }}>
                <Image
                  source={Rec3Image}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
              </View>
              <View style={{ width: "50%", top: 40, left: -40 }}>
                <Text
                  style={{ fontSize: 16, color: "#202020", fontWeight: "bold" }}
                >
                  Dahi Chaat
                </Text>
                <Text style={{ fontSize: 12, color: "#202020" }}>
                  For your dinner!
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <TouchableOpacity
                  onPress={() =>
                    setOrderDoneModalVisible(!orderDoneModalVisible)
                  }
                  style={{
                    marginTop: 10,
                    padding: 10,
                    left: -10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#0074FF",
                      borderRadius: 10,
                      width: 128,
                      height: 41,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        marginTop: 7,
                      }}
                    >
                      DONE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={informDoneModalVisible}
        onRequestClose={() => {
          setInformDoneModalVisible(!informDoneModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 286,
              height: 260,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setInformDoneModalVisible(false)}
              style={{ position: "absolute", top: 10, right: -20 }}
            >
              <Image
                source={VectorImage}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: -40,
                }}
              />
            </TouchableOpacity>
            <View style={{ width: 240 }}>
              <Text style={{ fontSize: 18, color: "#202020", left: 30 }}>
                {focusedButton === "Cook"
                  ? "Inform to Cook"
                  : "Shared with the Cook"}
              </Text>
            </View>
            <Text style={{ fontSize: 20, color: "#04C10C" }}>
              {focusedButton === "Cook"
                ? "Enter Contact Details"
                : "successfully!"}
            </Text>
            {focusedButton === "Cook" ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%", left: 80, top: 25 }}>
                  <TextInput
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      borderRadius: 8,
                      width: 52,
                      maxHeight: 35,
                      marginTop: 20,
                      textAlign: "center",
                      paddingLeft: -5, // Move the text 5 units to the left
                    }}
                    value={inputValue}
                    placeholder="+"
                    onChangeText={handleTextChange}
                    keyboardType="numeric"
                    selectionColor="black"
                    caretHidden={true} // Hide the cursor
                  />
                </View>

                <View style={{ width: "50%", left: 25, top: 25 }}>
                  <TextInput
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      borderRadius: 8,
                      width: 143,
                      maxHeight: 35,
                      marginTop: 20,
                      textAlign: "center",
                      paddingLeft: -5, // Move the text 5 units to the left
                    }}
                    value={inputValue1}
                    onChangeText={handleTextChange1}
                    keyboardType="numeric"
                    selectionColor="black"
                    caretHidden={true} // Hide the cursor
                  />
                </View>

                <View style={{ width: "50%", top: 40, left: -40 }}></View>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.parentImageStyle}>
                  <Image
                    source={Rec3Image}
                    style={{
                      width: 70,
                      height: 70,
                    }}
                  />
                </View>
                <View style={{ width: "50%", top: 40, left: -40 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#202020",
                      fontWeight: "bold",
                    }}
                  >
                    Dahi Chaat
                  </Text>
                  <Text style={{ fontSize: 12, color: "#202020" }}>
                    For your dinner!
                  </Text>
                </View>
              </View>
            )}
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <TouchableOpacity
                  onPress={
                    focusedButton === "Cook"
                      ? toggleModals2
                      : () => setInformDoneModalVisible(!informDoneModalVisible)
                  }
                  style={[
                    focusedButton === "Cook"
                      ? styles.cookDone
                      : styles.parentDone,
                  ]}
                >
                  <View
                    style={{
                      backgroundColor: "#0074FF",
                      borderRadius: 10,
                      width: 128,
                      height: 41,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        marginTop: 7,
                      }}
                    >
                      DONE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cookDoneModalVisible}
        onRequestClose={() => {
          setCookDoneModalVisible(!cookDoneModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 286,
              height: 260,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setCookDoneModalVisible(false)}
              style={{ position: "absolute", top: 10, right: -20 }}
            >
              <Image
                source={VectorImage}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: -40,
                }}
              />
            </TouchableOpacity>
            <View style={{ width: 240 }}>
              <Text style={{ fontSize: 18, color: "#202020", left: 30 }}>
                Shared with the Cook
              </Text>
            </View>
            <Text style={{ fontSize: 20, color: "#04C10C" }}>
              successfully!
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", marginTop: 30, marginLeft: 70 }}>
                <Image
                  source={Rec3Image}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
              </View>
              <View style={{ width: "50%", top: 40, left: -40 }}>
                <Text
                  style={{ fontSize: 16, color: "#202020", fontWeight: "bold" }}
                >
                  Dahi Chaat
                </Text>
                <Text style={{ fontSize: 12, color: "#202020" }}>
                  For your dinner!
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <TouchableOpacity
                  onPress={() => setCookDoneModalVisible(!cookDoneModalVisible)}
                  style={{
                    marginTop: 10,
                    padding: 10,
                    left: -10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#0074FF",
                      borderRadius: 10,
                      width: 128,
                      height: 41,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        marginTop: 7,
                      }}
                    >
                      DONE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  // Other styles remain unchanged

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
});
export default Slider;
