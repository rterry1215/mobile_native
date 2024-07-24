import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
const LoadingText1 = require('../public/PENALTY.png');
const LoadingText2 = require('../public/SHOOTER.png');
const BlogComponent = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: -90 }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 844, gap: 14 }}>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image source={LoadingText1} />
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image source={LoadingText2} />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 844, top:-270 , gap:30}}>
                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 38, width: 152,height:54, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                >
                    <Text style={{ color: '#000', fontSize: 14 }}>
                        Sign in
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 152,height:54, display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                >
                    <Text style={{ color: 'white', fontSize: 14 }}>
                        Sign up
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BlogComponent;