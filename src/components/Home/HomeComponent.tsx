import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import MenuBarComponent from "./MenuBarComponent";


const LoadingText1 = require('../public/PENALTY.png');
const LoadingText2 = require('../public/SHOOTER.png');
const BlogComponent = () => {

    return (
        <View style={{ display: "flex", flexDirection: "column", marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image source={LoadingText1} />
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image source={LoadingText2} />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 30, marginTop: 430 }}>
                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 38, width: 152, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                >
                    <Text style={{ color: '#000', fontSize: 14 }}>
                        Sign in
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 152, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                >
                    <Text style={{ color: 'white', fontSize: 14 }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{top:60}}>
                <MenuBarComponent />
            </View>
        </View>
    )
}

export default BlogComponent;