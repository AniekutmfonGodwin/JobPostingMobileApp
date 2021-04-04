import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../assets/theme';



const Container = styled(SafeAreaView)`
    background-color:${theme.color.background};
    height:${theme.windowHeight}px;
    width:${theme.windowWidth}px;
    padding-top:30px;
    padding-bottom:10px;
`;

const MenuButton = styled.TouchableOpacity`
    position: absolute;
    bottom:30;
    right:20;
    z-index:1000;
    background-color:#efefef;
    border-radius:30;
`;

export default function ScreenLayout({children,navigation }) {
    return (
        <Container>
            {/* <MenuButton
            elevation={4}
                onPress={()=>navigation.toggleDrawer()}
            >
                <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={50} color={theme.color.primary.main} />
            </MenuButton> */}
            {children}
        </Container>
    )
}
