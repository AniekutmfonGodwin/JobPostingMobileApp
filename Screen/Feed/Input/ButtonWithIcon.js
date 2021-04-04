import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../../assets/theme'



const Touchable = styled.TouchableOpacity`
    padding-top:8px;
    padding-bottom:8px;
    padding-right:14px;
    padding-left:14px;
    flex-direction:row;
    background-color:rgba(249, 249, 255,0.3);
    border-radius:13px;
    margin-right:7px;
    
    
`

const Title = styled.Text`
    color:${theme.color.primary.on};
    font-size:16px;
    margin-left:6px;
`

export default function(props) {
    return (
        <Touchable>
            {props.children}
            <Title>
                {props.title}
            </Title>
        </Touchable>
    )
}
