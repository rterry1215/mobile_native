import React, { useCallback, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import BlogComponent from "./BlogComponent";

const Vector3Image = require('../public/Vector3.png');
const Vector1Image = require('../public/Vector1.png');
const Vector2Image = require('../public/Vector2.png');

const steps = [
    { icon: Vector3Image, title: "Make Deposit", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { icon: Vector1Image, title: "Take Risks", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { icon: Vector2Image, title: "Win Money", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
]

const WelComponent = () => {
    const [step, setStep] = useState(0);
    const [trans, setTrans] = useState(false);

    const Moon = useCallback(() => {
        setTrans(true);
    }, [trans])
    const handleMoveComponent = useCallback(() => {
        if (step < 2)
            setStep(prev => prev + 1);
    }, [step]);

    return (
        <View>
            {trans ? (<BlogComponent />) : (
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 844, marginTop: 30, gap: 10 }}>

                    <Image source={steps[step].icon} />

                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', top: 90 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 50 }}>{steps[step].title}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '300', marginTop: 50, textAlign: "center" }}>{steps[step].text}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 12, top: 170 }}>
                        <View style={{
                            width: 39, borderWidth: 2, borderColor: '#477EFF'
                        }}></View>
                        <View style={{
                            width: 39, borderWidth: 2, borderColor: step === 0 ? "#FFF" : '#477EFF'
                        }}></View>
                        <View style={{
                            width: 39, borderWidth: 2, borderColor: step === 2 ? '#477EFF' : "#FFF"
                        }}></View>
                    </View>
                    {step === 0 || step === 1 ? (
                        <TouchableOpacity style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 280 }}
                            onPress={handleMoveComponent}
                        >
                            <Text style={{ color: 'white', fontSize: 14 }}>
                                Continue
                            </Text>

                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 280 }}
                            onPress={Moon}
                        >
                            <Text style={{ color: 'white', fontSize: 14 }}>
                                Get started
                            </Text>

                        </TouchableOpacity>
                    )}
                </View>
            )}
        </View>

    )
}
export default WelComponent;