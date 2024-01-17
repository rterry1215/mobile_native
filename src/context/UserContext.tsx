import React, { useState } from "react";
import client from "../config";

export const UserContext = React.createContext("");

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState(null);

  const register = async (
    firstname: any,
    lastname: any,
    email: any,
    password: any,
    Confpassword: any
  ) => {
    try {
      const response = await client.post(
        "/create-user",
        {
          firstname,
          lastname,
          email,
          password,
          confirmPassword: Confpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);
      // Assuming a successful response status code is 200
      if (response.data.success) {
        // Request was successful
        console.log("sign up successful:", response.data);
        const userInfo = response.data;
        setUserInfo(userInfo);
        // Navigate to the home screen or perform other actions
      } else {
        // Request failed
        console.error("sign up failed");
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any network or other errors
    }
  };

  const login = async (email: any, password: any) => {
    // Add your login logic here
    try {
      const response = await client.post(
        "/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data.success);
      if (response.data.success) {
        // Request was successful
        console.log("sign in successful:", response.data);
        setUserInfo(response.data.user);
        // Navigate to the home screen or perform other actions
      } else {
        // Request failed
        console.error("sign in failed");
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any network or other errors
    }
  };

  const logout = () => {
    console.log(userInfo);
    setUserInfo(null);
  };

  const saveId = async () => {
    try {
      const res = await client.get("/sign-in");
      if (res.data.id) {
        const id = res.data.id;
        console.log(id);
      }
    } catch (error) {}
  };
  const saveUserInfo = async (updatedUserInfo: any) => {
    const _id = userInfo?._id;
    try {
      const response = await client.put(
        `/updateprofile/${_id}`,
        updatedUserInfo
      );
      // Handle the response as needed
    } catch (error) {
      // Handle any errors from the network request
    }
  };
  return (
    <UserContext.Provider
      value={{
        register,
        userInfo,
        setUserInfo,
        login,
        saveUserInfo,
        saveId,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
