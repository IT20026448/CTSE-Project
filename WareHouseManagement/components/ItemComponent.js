import React from 'react';
import { View, Text } from "react-native";

export default function ItemComponent({items}){
    return(
        <View>
            {items.map((item, index) => {
                return(
                    <View key={index}>
                        <Text> {item.name} </Text>
                    </View>
                );
            })}
        </View>
    )
}