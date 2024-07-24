import React, {useState} from "react";
import { View, Image, Text } from "react-native";
import PhoneNumForm from "../components/Signin/PhoneNumForm";
const SignIn = () => {
    const LoadingText1 = require('../public/PENALTY.png');
    const LoadingText2 = require('../public/SHOOTER.png');
    const ArrowLeft = require('../components/public/arrow.left.png');
    const [click, setClick] = useState(false);
    const change = () => {
        setClick(true);
    }
    return (
        <View style={{ position: 'absolute', display: 'flex', flexDirection: 'column', }}>
            <View>

                <View style={{ borderRadius: 50, backgroundColor: '#FFF', width: 30, height: 30, top: 70, left: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={ArrowLeft} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', marginTop: 150, height: 844, gap: 14, }}>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image source={LoadingText1} />
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image source={LoadingText2} />
                    </View>
                    {click ? (
                    <Text style={{ color: 'white', padding:20, fontSize:22, fontWeight:'800' }}>Enter OTP</Text>

                    ) : (

                    <Text style={{ color: 'white', padding:20, fontSize:22, fontWeight:'800' }}>Phone Number</Text>
                    )}
                </View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ borderTopRightRadius: 60, width: 420, height: 534, top: -670, backgroundColor: 'white' }}>
                    <PhoneNumForm data = {change}/>
                </View>
            </View>
        </View>
    )
}
export default SignIn;