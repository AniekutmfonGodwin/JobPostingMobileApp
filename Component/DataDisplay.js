import React from 'react'
import styled from 'styled-components/native'
import theme from '../assets/theme'

export const Title = styled.Text`
    font-size:23px;
    font-weight:700;
    /* font-family:"Arial, Helvetica, sans-serif"; */
`

export const RoundEdgeView = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    flex-shrink: 1;
    background-color:${theme.color.foreground};
    padding-top:8px;
    padding-bottom:8px;
    padding-left:20px;
    padding-right:15px;
    border-radius:10px;

`
export const TextInputBox = styled.TextInput`
    flex:1;
    height:100%;

`




