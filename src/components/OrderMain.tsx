import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AaaImage from "../public/aaa.png";
import BbbImage from "../public/bbb.png";
import CccImage from "../public/ccc.png";
const OrderMain = () => {
    return(
        <View style={{flexDirection:"column"}}>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:30, left:20}}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'25%',top:10,left:10}}>
                    <Image source={AaaImage} />
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Dahi Chaat</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Great Indian</Text>
                    <Text style={{fontSize:14,fontWeight:'600',top:8}}>$ 160</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',left:20}}>9 jun,2023</Text>
                    <TouchableOpacity style={{borderRadius:8, borderWidth:1,borderColor:'#0074FF',width:90,height:31,top:25, right:10}}>
                        <Text style={{fontSize:12,textAlign:'center',top:5, color:'#0074FF'}}>
                            Reorder
                        </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:60, left:20}}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'25%',top:10,left:10}}>
                    <Image source={BbbImage} />
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Paneer Tikka</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Great Indian</Text>
                    <Text style={{fontSize:14,fontWeight:'600',top:8}}>$ 149</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',left:20}}>9 jun,2023</Text>
                    <TouchableOpacity style={{borderRadius:8, borderWidth:1,borderColor:'#0074FF',width:90,height:31,top:25, right:10}}>
                        <Text style={{fontSize:12,textAlign:'center',top:5, color:'#0074FF'}}>
                            Reorder
                        </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:90, left:20}}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'25%',top:10,left:10}}>
                    <Image source={CccImage} />
                </View>
                <View style={{width:'40%',top:10}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Mix Veg Salad</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Great Indian</Text>
                    <Text style={{fontSize:14,fontWeight:'600',top:8}}>$ 149</Text>
                </View>
                <View style={{width:'10%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',left:20}}>9 jun,2023</Text>
                    <TouchableOpacity style={{borderRadius:8, borderWidth:1,borderColor:'#0074FF',width:90,height:31,top:25, right:10}}>
                        <Text style={{fontSize:12,textAlign:'center',top:5, color:'#0074FF'}}>
                            Reorder
                        </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{borderRadius:15,width:371, height:53,left:20,top:390,backgroundColor:'#0074FF'}}>
                <Text style={{textAlign:'center',color:'#FFF',fontSize:16, fontWeight:'600',top:13}}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OrderMain;