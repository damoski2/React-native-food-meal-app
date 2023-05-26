import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ icon, onPress, color }) => {
    const { pressedStyle } = styles;
    return (
        <Pressable onPress={onPress} style={({pressed})=> pressed && pressedStyle} >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressedStyle:{
        opacity: 0.7,
    }
})