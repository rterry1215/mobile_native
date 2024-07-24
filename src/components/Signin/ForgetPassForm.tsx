import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const countries = [
    {
        num: "+1",
        name: "usa",
    },
    {
        num: "+45",
        name: "germany",
    },
    {
        num: "+78",
        name: "canada",
    },
];

const ForgetPassForm = () => {
    const navigation = useNavigation();
    const moveVerifiedPhone = () => {
        navigation.navigate("Verified Phone number");
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <Text style={{ fontSize: 14, color: '#444848', top: 20, padding: 20 }}>
                Enter the email associated with the account.
            </Text>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                <>
                    <View style={{ position: 'relative' }}>
                    </View>
                    <View style={{ width: 350, height: 51, top: 20, display: 'flex', justifyContent: 'center', right: 40 }}>
                        <TextInput style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937' }}
                            placeholder="Enter your email" />
                    </View>
                </>
            </View>
            <TouchableOpacity style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>

                <Text style={{ fontSize: 14, color: '#477EFF', top: 20, padding: 20, right: 10 }}>
                    Resend code
                </Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity onPress={moveVerifiedPhone} style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 250 }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default ForgetPassForm;
