import React from "react";
import { View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./src/pages/Loading";
import Welcome from './src/pages/Welcome';

const Stack = createStackNavigator();
import { UserProvider } from "./src/context/UserContext";
import SignIn from "./src/pages/SignIn";
import PhoneNum from "./src/pages/PhoneNum";
import VerifiedPhone from './src/pages/VerifiedPhone';
import ForgetPass from "./src/pages/ForgetPass";
import Home from "./src/pages/Home";
const App = () => {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="loading"
              component={Loading}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            /> */}
            {/* <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            /> */}
            <Stack.Screen
              name="Sign in"
              component={SignIn}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            />
           <Stack.Screen
              name="Phone Number"
              component={PhoneNum}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            />
             <Stack.Screen
              name="Verified Phone number"
              component={VerifiedPhone}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            />
            <Stack.Screen
              name="Forget password"
              component={ForgetPass}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false, cardStyle: { backgroundColor: "#080E23" } }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  );
};

export default App;
