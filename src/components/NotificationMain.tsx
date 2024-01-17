import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import ProImage from "../public/pro.png";
import AlamImage from "../public/alam.jpg";
import { styled } from "nativewind";
const NotificationMain = () => {
    return(
        <View style={{flexDirection:"column"}}>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:30, left:20}}>
              <View style={{flexDirection:'row',top:20}}>
                <View style={{width:40,height:40,top:10,left:10, borderRadius:90, backgroundColor:'rgba(244, 67, 54, 0.10)'}}>
                    <Image source={ProImage} style={{alignItems:'center', top:8,left:8}} />
                </View>
                <View style={{width:'40%',top:10, left:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Best offer for you!</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Get 10% Off on any food!!</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',left:24}}>12:55 PM</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:8,left:42}}>Today</Text>
                </View>
              </View>
            </View>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:40, left:20}}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'25%',top:20,left:6}}>
                    <Image source={AlamImage} style={{width:50,height:50}}/>
                </View>
                <View style={{width:'40%',top:24, left:-30}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>You are out of limit!</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Fill your balance</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:15,left:-29}}>12:55 PM</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:19,left:-10}}>Today</Text>
                </View>
              </View>
            </View>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:50, left:20}}>
              <View style={{flexDirection:'row',top:20}}>
                <View style={{width:40,height:40,top:10,left:10, borderRadius:90, backgroundColor:'rgba(244, 67, 54, 0.10)'}}>
                    <Image source={ProImage} style={{alignItems:'center', top:8,left:8}} />
                </View>
                <View style={{width:'40%',top:10, left:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Best offer for you!</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Get 10% Off on any food!!</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',left:24}}>12:55 PM</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:8,left:42}}>Today</Text>
                </View>
              </View>
            </View>
            <View style={{borderRadius:9,backgroundColor:"#FFF", width:371, height:92, top:60, left:20}}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'25%',top:20,left:6}}>
                    <Image source={AlamImage} style={{width:50,height:50}}/>
                </View>
                <View style={{width:'40%',top:24, left:-30}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>You are out of limit!</Text>
                    <Text style={{fontSize:12,fontWeight:'400'}}>Fill your balance</Text>
                </View>
                <View style={{width:'25%',top:10}}>
                </View>
                <View style={{width:'25%',top:10}}>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:15,left:-29}}>12:55 PM</Text>
                    <Text style={{fontSize:12,fontWeight:'500',color:'#9D9D9D',top:19,left:-10}}>Today</Text>
                </View>
              </View>
            </View>
        </View>
    )
}
export default NotificationMain;