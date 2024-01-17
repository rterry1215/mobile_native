import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";
const AvatarImage = require("../public/avatar.jpg"); // Replace with the actual image source
const CameraImage = require("../public/Camera.png");

const Setting = () => {
  const { userInfo, saveUserInfo } = useContext(UserContext);
  const [firstname, setFirstName] = useState(userInfo.firstname);
  const [parentFirstName, setParentFirstName] = useState(
    userInfo.parentfirstName
  );
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const [lastname, setLastName] = useState(userInfo.lastname);
  const [parentLastName, setParentLastName] = useState(userInfo.parentLastName);
  const [schoolname, setSchoolName] = useState(userInfo.schoolname);
  const [standard, setStandard] = useState(userInfo.standard);

  const handleChange = (text: string) => {
    // Remove non-numeric characters
    const filteredText3 = text.replace(/[^0-9]/g, "");
    // Limit the input to 3 digits
    const truncatedText3 = filteredText3.slice(0, 3);
    setStandard(truncatedText3);
  };

  const handleSave = () => {
    const updatedUserInfo = { firstname, lastname, schoolname, standard, parentFirstName, parentLastName };
    saveUserInfo(updatedUserInfo);
  };

  const openImagePicker = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      // Handle the selected image, for example, you can set it to state or use it as needed
      setAvatar(pickerResult.uri);
      uploadAvatar(pickerResult.uri);
    }
  };
  const uploadAvatar = async (uri:string) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
  
      const response = await fetch('http://192.168.148.82:8000/upload-avatar', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload avatar');
      }
  
      const data = await response.json();
      // Handle the response from the server
      console.log(data);
    } catch (error) {
      console.error('Error uploading avatar:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={{ flexDirection: "column" }}>
        <View style={{ height: "25%" }}>
          <View style={styles.container}>
            <View style={styles.centered}>
              <Image source={AvatarImage} style={styles.image} />
            </View>
          </View>
          <TouchableOpacity
            style={{ alignItems: "center", top: -53 }}
            onPress={openImagePicker}
          >
            <Image
              source={CameraImage}
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#0074FF",
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: "75%" }}>
          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 20,
            }}
          >
            First Name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 30,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={firstname}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name"
          />

          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 20,
            }}
          >
            Last Name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 30,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={lastname}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last name"
          />
          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 20,
            }}
          >
            School Name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 30,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={schoolname}
            onChangeText={(text) => setSchoolName(text)}
            placeholder="school name"
          />
          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 20,
            }}
          >
            Standard
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 30,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={standard}
            onChangeText={handleChange}
            keyboardType="numeric"
            selectionColor="black"
            caretHidden={true} // Hide the cursor
          />
          <Text
            style={{
              fontSize: 14,
              color: "#202020",
              alignItems: "center",
              marginLeft: 33,
              top: 30,
            }}
          >
            Associated with (Parent name)
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 45,
            }}
          >
            First name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 60,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={parentFirstName}
            onChangeText={(text) => setParentFirstName(text)}
            placeholder="First name"
          />
          <Text
            style={{
              fontSize: 14,
              color: "#9D9D9D",
              alignItems: "center",
              marginLeft: 33,
              top: 20,
            }}
          >
            Last Name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#E9E9E9",
              borderWidth: 1,
              borderRadius: 8,
              width: 343,
              maxHeight: 62,
              marginTop: 30,
              textAlign: "center",
              alignItems: "center",
              left: 33,
            }}
            value={parentLastName}
            onChangeText={(text) => setParentLastName(text)}
            placeholder="Last name"
          />
          <TouchableOpacity
            style={{
              width: 343,
              height: 55,
              left: 33,
              top: 70,
              alignItems: "center",
              backgroundColor: "#0074FF",
              borderRadius: 15,
            }}
            onPress={handleSave}
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
          <View style={styles.bottomSpace}></View>
        </View>
      </View>
    </ScrollView>
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

export default Setting;
