import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import Colors from '../config/Colors';
import { BlurView } from 'expo-blur';
import SPACING from '../config/SPACING';
import {Ionicons} from "@expo/vector-icons";
const SearchField = () => {
  return (
    <View
    style={{
        borderRadius: SPACING,
        overflow: "hidden",
    }}
    >
    <BlurView
    style={{
        alignItems: "center",
        justifyContent: "center"
    }}
    intensity={30}>
        <TextInput style={{
            width: "100%", 
            color:Colors.white,
            fontSize: SPACING*1.7,
            padding: SPACING,
            paddingLeft: SPACING*3.5
            }} 
        placeholder='Find Your Coffee....'
        placeholderTextColor={Colors.light}
        />
        <Ionicons
        style={{
            position: "absolute",
           left:SPACING/2,
        }} name="search"
        color={Colors.light}
        size={SPACING*2}
    
        />
    </BlurView>
    </View>
  )
}

export default SearchField

const styles = StyleSheet.create({})