import React from 'react'
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../assets/theme';
import { Title } from '../../Component/DataDisplay';
import HTML from "react-native-render-html";


const Logo = styled.Image`
    margin:10px;
    height:70px;
    width:70px;
    border-radius:40px;
    padding:10px;
`
const SubTitle = styled.Text`
    font-size:16px;
    font-weight:700;
    color:${theme.color.grey};
`

export default function FeedDetail({route,navigation}) {
    const {id} = route.params;
    const [state, setstate] = React.useState(null)

    React.useEffect(() => {
        
        fetch(`https://jobs.github.com/positions/${id}.json`)
        .then(async (response)=>{
            const data = await response.json()  
            setstate(data)
            
        })
        .catch(error=>console.error(error))
        
    }, [id])

    if(!state) return <ActivityIndicator color={theme.color.primary} size={'large'} />
    
    return (
        <View>
           <View
           style={{
               flex:1,
               flexDirection:'row',
               justifyContent:'center',
               alignItems:'center',
               zIndex:1000,
               
           }}
           >
            <Logo style={{borderRadius:10}} resizeMode={"contain"} source={{uri:state.company_logo}}/>
           </View>
           <View
           style={{
               marginTop:'23%',
               flex:1,
               flexDirection:'column',
               justifyContent:'center',
               alignItems:'center'
           }}
           >
            <Title>
                {state.title}
            </Title>
            <SubTitle>
                {`${state.company} ,${state.location}`}
            </SubTitle>
            <Text style={{
                fontSize:20,
                color:'grey',
                fontWeight:'bold'
            }}>
                {state.type}
            </Text>
           </View>
           <View style={{
               elevation:2,
               height:50,
               borderRadius:10,
               marginRight:10,
               marginLeft:10,
               marginTop:50,
               flexDirection:'row',
               justifyContent:'space-around',
               alignItems:'center'
           }}>
               <TouchableOpacity>
                   <Text>
                       Description
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity
               style={{
                   borderRightWidth:.3,
                   borderLeftWidth:.3,
                   width:140,
                   height:'70%',
                   flexDirection:'row',
                   justifyContent:'center',
                   alignItems:'center'
               }}
               >
                   <Text>
                       Company
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text>
                       Review
                   </Text>
               </TouchableOpacity>
           </View>
           <ScrollView style={{
               paddingRight:20,
               paddingLeft:20,
               paddingTop:20,
               
           }}>
               <Text
               style={{
                   minHeight:500
               }}
               >
                <HTML source={{ html: state.description }} contentWidth={theme.percentageWidth(80)} />
               </Text>
           </ScrollView>
        </View>
    )
}
