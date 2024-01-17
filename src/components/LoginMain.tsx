import React, { useState, useContext, useEffect } from "react";
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
// import { useUser } from '../context/UserContext';
const GoogleImage = require("../public/google.jpg");

const LoginMain = () => {
  const [email, setEmail] = useState("asd@asd.asd");
  const [password, setPassword] = useState("123123123");
  const { login, userInfo, setUserInfo } = useContext(UserContext);

  const navigation = useNavigation();

  const handleSignIn = () => {
    login(email, password);
    // setUserInfo({ email: "B", firstname: "S" });
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  // const { setUserId } = useUser();
  const goSignup = () => {
    navigation.navigate("Sign Up");
  };

  useEffect(() => {
    if (userInfo) navigation.navigate("Home");
  }, [userInfo]);

  return (
    <View style={{ flexDirection: "column" }}>
      {/* <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign in</Text>
        <Text style={{ fontSize: 16 }}>to continue to next14test</Text>
      </View> */}
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
          placeholder="Email Address"
          value={email}
          onChangeText={handleEmailChange}
        />

        {/* Password TextInput */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Text style={{ left: 20, top: 30 }}>No account?</Text>
          </View>
          <TouchableOpacity style={{ width: "70%" }} onPress={goSignup}>
            <Text style={{ left: 10, top: 30, color: "#0074FF" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* Submit Button */}
        <View style={{ borderRadius: 8, width: "60%", top: 80, left: 80 }}>
          <Button title="Submit" onPress={handleSignIn} />
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

export default LoginMain;
