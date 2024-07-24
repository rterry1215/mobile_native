import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { RootStackParamList } from './RootStackParamList';
// import { StackNavigationProp } from '@react-navigation/stack';

const SignIn = () => {
    const navigation = useNavigation();

    const ArrowLeft = require('../public/arrow.left.png');
    const Vector4 = require('../public/Vector4.png');
    return (
        <View style={{ position: 'absolute', display: 'flex', flexDirection: 'column' }}>
            <View>

                <View style={{ borderRadius: 50, backgroundColor: '#FFF', width: 30, height: 30, top: 70, left: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={ArrowLeft} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 150, height: 844, gap: 14, left: 35 }}>
                    <View style={{ padding: 30, width: 261 }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '700', textAlign: 'center', top: -70 }}>
                            Account created
                            successfully
                        </Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', top: 50 }}>
                        <Image source={Vector4} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 290 }}>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>
                            Continue to home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SignIn;