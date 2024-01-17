import React from "react";
import { View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Home";
import FoodScreen from "./src/Food";
import ProfileScreen from "./src/Profile";
import EditProScreen from "./src/EditPro";
import InfoProScreen from "./src/InfoPro";
import GoalScreen from "./src/Goal";
import TransactionScreen from "./src/Transaction";
import LoginScreen from "./src/Login";
import RegisterScreen from "./src/Register";
import FoodDetailScreen from "./src/FoodDetail";
import OrderHistoryScreen from "./src/OrderHistory";
import NotificationScreen from "./src/Notification";
import HygieneScreen from "./src/Hygiene";
import ChartMainScreen from "./src/components/ChartMain";
import Navbar1 from "./src/components/Navbar1";
import Navbar2 from "./src/components/Navbar2";
import Navbar3 from "./src/components/Navbar3";
import Navbar4 from "./src/components/Navbar4";
import Navbar5 from "./src/components/Navbar5";
import Navbar6 from "./src/components/Navbar6";
import Navbar7 from "./src/components/Navbar7";
import Navbar8 from "./src/components/Navbar8";
import Navbar9 from "./src/components/Navbar9";
import Navbar10 from "./src/components/Navbar10";
import Navbar11 from "./src/components/Navbar11";

const Stack = createStackNavigator();
import { UserProvider } from "./src/context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Sign In"
              component={LoginScreen}
              options={{
                cardStyle: { backgroundColor: "#FFFFFF" }, // Set the background color for HomeScreen
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={RegisterScreen}
              options={{
                cardStyle: { backgroundColor: "#FFFFFF" }, // Set the background color for HomeScreen
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                header: (props) => <Navbar1 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" }, // Set the background color for HomeScreen
              }}
            />
            <Stack.Screen
              name="Food"
              component={FoodScreen}
              options={{
                header: (props) => <Navbar2 {...props} />,
                title: "AI Recommended Foods", // Change the title for the FoodScreen
                headerTitleAlign: "center", // Align the header title to the center
                headerStyle: { backgroundColor: "#EFEFEF" }, // Set the background color for the header
                headerTitleStyle: { color: "black" }, // Set the color for the header
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                header: (props) => <Navbar3 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen
              name="EditPro"
              component={EditProScreen}
              options={{
                header: (props) => <Navbar4 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen
              name="Info"
              component={InfoProScreen}
              options={{
                header: (props) => <Navbar5 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen
              name="Goal"
              component={GoalScreen}
              options={{
                header: (props) => <Navbar6 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen
              name="Transaction"
              component={TransactionScreen}
              options={{
                header: (props) => <Navbar7 {...props} />,
                cardStyle: { backgroundColor: "#EFEFEF" },
              }}
            />
            <Stack.Screen
              name="FoodDetail"
              component={FoodDetailScreen}
              options={{
                header: (props) => <Navbar8 {...props} />,
                cardStyle: { backgroundColor: "#EFEFEF" },
              }}
            />
            <Stack.Screen
              name="OrderHistory"
              component={OrderHistoryScreen}
              options={{
                header: (props) => <Navbar9 {...props} />,
                cardStyle: { backgroundColor: "#EFEFEF" },
              }}
            />
            <Stack.Screen
              name="Notification"
              component={NotificationScreen}
              options={{
                header: (props) => <Navbar10 {...props} />,
                cardStyle: { backgroundColor: "#EFEFEF" },
              }}
            />
            <Stack.Screen
              name="Hygiene"
              component={HygieneScreen}
              options={{
                header: (props) => <Navbar11 {...props} />,
                cardStyle: { backgroundColor: "#FFFFFF" },
              }}
            />
            <Stack.Screen name="ChartMain" component={ChartMainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  );
};

export default App;
