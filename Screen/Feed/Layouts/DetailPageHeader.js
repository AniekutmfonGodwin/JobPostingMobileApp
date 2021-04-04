import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import theme from '../../../assets/theme'

export default function DetailPageHeader() {
    return (
        <ImageBackground style={{
            height:400,
            flex:1,
            backgroundColor:'red',
        }}>
            <Text>hello title</Text>
        </ImageBackground>
    )
}
