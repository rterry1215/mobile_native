import React from "react";
import { View, Image } from "react-native";

const SignInHeader = () => {
    const LoadingText1 = require('../public/PENALTY.png');
    const LoadingText2 = require('../public/SHOOTER.png');
    return(
        <View style={{backgroundColor:"#080E23"}}>
               <View style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', height:844,gap: 14 }}>
            <View style={{ display: 'flex', alignItems:'center' }}>
                <Image source={LoadingText1} />
            </View>
            <View style={{ display: 'flex', alignItems:'center' }}>
                <Image source={LoadingText2} />
            </View>
        </View>
        </View>
    )
}
export default SignInHeader;