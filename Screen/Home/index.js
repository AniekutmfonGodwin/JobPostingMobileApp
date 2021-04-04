import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Title,RoundEdgeView,TextInputBox } from '../../Component/DataDisplay';
import ScreenLayout from '../../Component/Layout/ScreenLayout';

const Horizontaliew = styled.View`
    flex-direction:row;
`


export default function index({navigation}) {
    const [address, setaddress] = React.useState('')

    const handleChange = (text)=>{
        setnumber(text)
    }
    return (
        <ScreenLayout navigation={navigation}>
            <Title>Find the best place</Title>
            <Horizontaliew>
                <RoundEdgeView style={{marginTop:100}}>
                    <Ionicons
                    name="location-outline"
                    size={30}
                    />
                    <TextInputBox 
                    onChangeText={setaddress}
                    value={address}
                    placeholder="Enter your address"
                    />
                </RoundEdgeView>
                <RoundEdgeView>
                    <Feather
                    name="align-center"
                    size={30}
                    />
                </RoundEdgeView>
            </Horizontaliew>
        </ScreenLayout>
    )
}
