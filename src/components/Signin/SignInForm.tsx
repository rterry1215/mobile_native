import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const SigninForm: React.FC = () => {
    const Google = require('../public/Google.png');
    const Social = require('../public/Social.png');
    const Apple = require('../public/Apple.png');
    const eyeSlash = require('../public/eye.slash.png');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const transSignIn = () => {
        setSignIn(!signIn);
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const movePhoneNum = () => {
        navigation.navigate("Phone Number");
    }
    const moveForgetForm = () => {
        navigation.navigate("Forget password");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: -30 }}>
            <View style={{ padding: 20, maxWidth: 362, display: 'flex', alignItems: 'center' }}>
                {signIn ? (
                    <>
                        <View style={{ marginBottom: 10, width: 350 }}>
                            <TextInput style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937' }} placeholder="Enter your email" />
                        </View>
                        <View style={{ marginBottom: 10, width: 350, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937', flex: 1 }}
                                placeholder="Choose your password"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 22, bottom: 22 }}>
                                <Image source={showPassword ? eyeSlash : eyeSlash} style={{ width: 18, height: 13 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 10, width: 350, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937', flex: 1 }}
                                placeholder="Re-enter your password"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 22, bottom: 22 }}>
                                <Image source={showPassword ? eyeSlash : eyeSlash} style={{ width: 18, height: 13 }} />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={{ marginBottom: 10, width: 350 }}>
                            <TextInput style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937' }} placeholder="Enter your email" />
                        </View>
                        <View style={{ marginBottom: 10, width: 350, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937', flex: 1 }}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 22, bottom: 22 }}>
                                <Image source={showPassword ? eyeSlash : eyeSlash} style={{ width: 18, height: 13 }} />
                            </TouchableOpacity>
                        </View>

                    </>
                )}


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, width: 350, padding: 12 }}>
                    <TouchableOpacity onPress={handleCheckboxToggle} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 3, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
                            {isChecked && <Text style={{ color: '#6366F1' }}>✓</Text>}
                        </View>
                        <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 1)' }}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 5 }} onPress={moveForgetForm}>
                        <Text style={{ fontSize: 14, color: '#6366F1' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: 'rgba(71, 126, 255, 0.5)', borderRadius: 31, padding: 20, width: 350, alignItems: 'center'
                }}>
                    {signIn ? (
                        <Text style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: 'bold' }} onPress={movePhoneNum}>Continue</Text>

                    ) : (

                        <Text style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: 'bold' }}>Log in</Text>
                    )}
                </TouchableOpacity>
                {signIn ? (
                    <Text style={{ color: 'rgba(159, 159, 159, 1)', fontSize: 14, top: 10 }}>or sign up with</Text>

                ) : (

                    <Text style={{ color: 'rgba(159, 159, 159, 1)', fontSize: 14, top: 10 }}>or sign in with</Text>
                )}
            </View >
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, gap: 10 }}>
                <TouchableOpacity style={{ borderRadius: 25, width: 110, borderColor: 'rgba(183, 183, 183, 1)', borderWidth: 1, height: 51, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Google} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 25, width: 110, borderColor: 'rgba(183, 183, 183, 1)', borderWidth: 1, height: 51, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Social} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 25, width: 110, borderColor: 'rgba(183, 183, 183, 1)', borderWidth: 1, height: 51, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Apple} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                {signIn ? (
                    <Text style={{ fontSize: 14, color: 'rgba(154, 154, 154, 1)', top: 30 }}>
                        Already have an account?
                    </Text>
                ) : (
                    <Text style={{ fontSize: 14, color: 'rgba(154, 154, 154, 1)', top: 30 }}>
                        Don{"’"}t have an account?
                    </Text>
                )}
                <TouchableOpacity onPress={transSignIn}>
                    {signIn ? (
                        <Text style={{ fontSize: 14, color: '#080E23', fontWeight: '700', top: 30, left: 5 }}>
                            Sign In
                        </Text>

                    ) : (
                        <Text style={{ fontSize: 14, color: '#080E23', fontWeight: '700', top: 30, left: 5 }}>
                            Sign Up
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default SigninForm;
