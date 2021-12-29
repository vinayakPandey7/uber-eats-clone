import React from 'react'
import { View, Text } from 'react-native'

export default function OrderItem({item}) {
    console.log("i ma inside console");
    const { title, price } = item;
    return (
        <View style={{
            flexDirection:"row",
            justifyContent:"center",
            padding:20,
            borderBottomWidth:1,
            borderBottomColor:"#999"
        }}>
            <Text style={{fontWeight:"600", fontSize:16}}>{title}</Text>
            <Text style={{opacity:0.7, fontSize:16}}>{price}</Text>

        </View>
    );
}