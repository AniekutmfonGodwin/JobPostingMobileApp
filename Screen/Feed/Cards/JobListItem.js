import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Image,StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../assets/theme';
import { Title } from '../../../Component/DataDisplay';


const Card = styled.View`
    border-radius:4px;
    height:100px;
    flex-direction:row;
    justify-content:space-evenly;
`;

const Logo = styled.Image`
    margin:10px;
    height:50px;
    width:50px;
    border-radius:6px;
    padding:10px;
`

export default class Item extends React.PureComponent {
    render(){
       
        return (
            <TouchableWithoutFeedback
            onPress={this.props.onPress}
            >
                <Card style={{elevation:3}}>

                    <View style={{height:"100%",justifyContent:'flex-start',flexDirection:'row'}}>
                        <Logo resizeMode={"contain"} source={{uri:this.props.logo}}/>
                    </View>
                    <View style={{alignContent:'center',justifyContent:'space-evenly',height:'100%'}}>
                        <Text>
                        {(this.props.company&&this.props.company.length>20)?this.props.company.slice(0,20)+"...":this.props.company}
                        </Text>
                        <Title>
                            {(this.props.title&&this.props.title.length>18) ? this.props.title.slice(0,15)+"..." : this.props.title}
                        </Title>
                        <Text>
                            {this.props.location}
                        </Text>
                    </View>
                    <View style={styles.columnRight}>
                        <FontAwesome name="bookmark" size={20} color={theme.color.grey} />
                        <Text>
                            {this.props.datePosted}
                        </Text>
                    </View>
                </Card>
        </TouchableWithoutFeedback>
        )
    }
}




const styles = StyleSheet.create({
    columnRight:{
        width:'20%',
        height:"100%",
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingTop:8,
        paddingBottom:10
    }
})