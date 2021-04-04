import React from 'react'
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'
import ScreenLayout from '../../Component/Layout/ScreenLayout';



const Container = styled(SafeAreaView)`
    padding-top:100px;
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`;

export default function index({navigation}) {
    return (
        <ScreenLayout navigation={navigation}>
            <Text>
                this is playground
            </Text>
            <Ionicons name="rocket" size={30} color="#900" />
        </ScreenLayout >
    )
}

// const styles = StyleSheet.create({
//     backgroundColor:"red",
// })
