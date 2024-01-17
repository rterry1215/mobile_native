import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { UserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";

const GoogleImage = require("../public/google.jpg");

const RegisterMain = () => {
  const { register, userInfo } = useContext(UserContext);
  const navigation = useNavigation();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confpassword, setConfPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleConfirm = (text: string) => {
    setConfPassword(text);
  };

  useEffect(() => {
    if (userInfo) navigation.navigate("Sign In");
  }, [userInfo]);

  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          borderRadius: 8,
          borderWidth: 2,
          borderColor: "#EFEFEF",
          width: "80%",
          height: 50,
          left: 40,
          top: 40,
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <View style={{ width: "10%", top: 10, marginLeft: 30 }}>
            <Image
              source={GoogleImage}
              style={{ width: "70%", height: "70%" }}
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 20, top: 7 }}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: 2, backgroundColor: "#E9E9E9", top: 80 }}></View>
      <View style={{ top: 100 }}>
        <TextInput
          style={styles.input}
          value={firstname}
          placeholder="First name"
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          value={lastname}
          placeholder="Last name"
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={handleEmailChange}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TextInput
          style={styles.input}
          value={Confpassword}
          placeholder="confirmer password"
          onChangeText={handleConfirm}
          secureTextEntry
        />

        <View style={{ borderRadius: 8, width: "60%", top: 80, left: 80 }}>
          <Button
            title="Submit"
            onPress={() => {
              register(firstname, lastname, email, password, Confpassword);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E9E9E9",
    padding: 10,
  },
});

export default RegisterMain;
