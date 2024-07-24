import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

const Menu1 = require('../public/Group 39861.png');
const Menu2 = require('../public/dollarsign.circle.png');
const Menu3 = require('../public/Vector (4).png');
const Menu4 = require('../public/Setting.png');

const MenuBarComponent = () => {

    return (
        <View style={{ width: 267, height:67, display: "flex", flexDirection: 'row', borderRadius: 40, borderWidth: 2, borderColor: '#477EFF' }}>
            <TouchableOpacity>
               <Image source={Menu1} />
            </TouchableOpacity>
        </View>
    )
}
export default MenuBarComponent;