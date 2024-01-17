import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
const AvatarImage = require("../public/avatar.jpg");
const ArrowImage = require("../public/arrow.jpg");
const DataImage = require("../public/data.jpg");
const ClockImage = require("../public/Clock.png");
const Edit1Image = require("../public/Edit1.png");
const VectorImage = require("../public/Vector.png");

const Info = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleTextChange = (text) => {
    // Remove non-numeric characters
    const filteredText = text.replace(/[^0-9]/g, "");
    // Limit the input to 3 digits
    const truncatedText = filteredText.slice(0, 3);
    setInputValue(truncatedText);
  };
  const handleTextChange1 = (text) => {
    // Remove non-numeric characters
    const filteredText1 = text.replace(/[^0-9]/g, "");
    // Limit the input to 3 digits
    const truncatedText1 = filteredText1.slice(0, 3);
    setInputValue1(truncatedText1);
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ height: "25%" }}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={AvatarImage} style={styles.image} />
          </View>
          <Text
            style={{ fontSize: 16, fontWeight: "500", color: "#000", top: -90 }}
          >
            Jhon Wick
          </Text>
          <Text
            style={{ fontSize: 14, color: "#000000CC", top: -90, left: 20 }}
          >
            Ahmedabad, India
          </Text>
        </View>
      </View>
      <View style={{ height: "75%" }}>
        <Image
          source={ArrowImage}
          style={{ width: 22, height: 22, top: 13, marginLeft: 26 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#000",
            alignItems: "center",
            marginLeft: 53,
            top: -9,
          }}
        >
          Progress
        </Text>

        <View
          style={{
            borderRadius: 8,
            backgroundColor: "#F9F8F8",
            width: 343,
            height: 142,
            marginLeft: 30,
            top: 15,
          }}
        >
          <Image source={ClockImage} style={{ marginLeft: 155, top: 40 }} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#000",
              marginTop: 60,
              textAlign: "center",
            }}
          >
            COMING SOON
          </Text>
        </View>
        <Image
          source={DataImage}
          style={{ width: 22, height: 22, top: 43, marginLeft: 26 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#000",
            alignItems: "center",
            marginLeft: 53,
            top: 20,
          }}
        >
          Data
        </Text>

        <View
          style={{
            borderRadius: 8,
            backgroundColor: "#F9F8F8",
            width: 343,
            height: 142,
            marginLeft: 30,
            top: 35,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#000",
                  marginTop: 10,
                  marginLeft: 15,
                }}
              >
                Weight
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#000",
                  marginTop: 5,
                  fontWeight: "600",
                  marginLeft: 15,
                }}
              >
                58 kgs
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#000",
                  marginTop: 15,
                  marginLeft: 15,
                }}
              >
                Height
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#000",
                  marginTop: 5,
                  fontWeight: "600",
                  marginLeft: 15,
                }}
              >
                158 cm
              </Text>
            </View>
            <TouchableOpacity
              style={{ width: "50%" }}
              onPress={() => setEditModalVisible(true)}
            >
              <Image
                source={Edit1Image}
                style={{ marginTop: 10, marginLeft: 130 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 343,
            height: 55,
            left: 33,
            top: 90,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#0074FF",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#0074FF",
              top: 15,
            }}
          >
            Share Invite Link
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomSpace}></View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(!editModalVisible);
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
              backgroundColor: "#EFEFEF",
              padding: 20,
              borderRadius: 10,
              width: 282,
              height: 309,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setEditModalVisible(false)}
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
            <View style={{ flex: 1 }}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{ fontSize: 16, color: "#494949", marginLeft: -2 }}
                >
                  Enter your weight
                </Text>
              </View>
              <View style={{ width: "50%" }}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#0074FF",
                    width: 58,
                    height: 23,
                    left: 135,
                    top: -22,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: "50%",
                      width: 1,
                      height: "100%",
                      backgroundColor: "#0074FF",
                    }}
                  />
                  <TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        left: 5,
                        fontSize: 12,
                        top: 8,
                        fontWeight: "600",
                        transform: [{ translateY: -7 }],
                      }}
                    >
                      kgs
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 5,
                        fontSize: 12,
                        fontWeight: "600",
                        transform: [{ translateY: -7 }],
                      }}
                    >
                      lbs
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "#0074FF",
                  borderWidth: 1,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  width: 220,
                  maxHeight: 35,
                  marginTop: -10,
                  textAlign: "center",
                  paddingLeft: -5, // Move the text 5 units to the left
                }}
                value={inputValue}
                onChangeText={handleTextChange}
                keyboardType="numeric"
                selectionColor="black"
                caretHidden={true} // Hide the cursor
              />
            </View>
            <View style={{ top: -60 }}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{ fontSize: 16, color: "#494949", marginLeft: -2 }}
                >
                  Enter your height
                </Text>
              </View>
              <View style={{ width: "50%" }}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#0074FF",
                    width: 58,
                    height: 23,
                    left: 135,
                    top: -22,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: "50%",
                      width: 1,
                      height: "100%",
                      backgroundColor: "#0074FF",
                    }}
                  />
                  <TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        left: 5,
                        fontSize: 12,
                        top: 8,
                        fontWeight: "600",
                        transform: [{ translateY: -7 }],
                      }}
                    >
                      Mtr
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 5,
                        fontSize: 12,
                        fontWeight: "600",
                        transform: [{ translateY: -7 }],
                      }}
                    >
                      Ft
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "#0074FF",
                  borderWidth: 1,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  width: 220,
                  maxHeight: 35,
                  marginTop: -10,
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
            <View style={{flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                    <TouchableOpacity style={{borderRadius:15, borderColor:'#0074FF', borderWidth:1,width:117, height:39}}>
                       <Text style={{color:'#0074FF', fontSize:12,textAlign:'center',marginTop:10}}>SKIP FOE NOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'50%'}}>
                    <TouchableOpacity style={{borderRadius:15, backgroundColor:'#0074FF',width:117, height:39}} onPress={()=>setEditModalVisible(!editModalVisible)}>
                       <Text style={{color:'#FFF', fontSize:12,textAlign:'center',marginTop:10}}>DONE</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  centered: {
    alignItems: "center",
  },
  bottomSpace: {
    height: 200, // Adjust as needed to create space at the bottom
  },
  image: {
    borderRadius: 100,
    width: 125, // Adjust the width and height as needed
    height: 125,
    marginTop: 30,
    marginLeft: -220,
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

export default Info;
