import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { VirtualizedList } from 'react-native'
import { ImageBackground, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../assets/theme'
import { Title } from '../../Component/DataDisplay'
import ScreenLayout from '../../Component/Layout/ScreenLayout'
import JobListItem from './Cards/JobListItem'
import { SearchInput } from './Input'
import ButtonWithIcon from './Input/ButtonWithIcon'


const Container = styled.View`
    margin-right:${props=>props.margin?props.margin:0}px;
    margin-left:${props=>props.margin?props.margin:0}px;
    
`


export default ({navigation}) => {
    const [jobs, setjobs] = React.useState([])


    const getItem =(data,index)=>data[index]

    React.useEffect(() => {
        fetch("https://jobs.github.com/positions.json")
        .then(async (response)=>{
            const data = await response.json()
            setjobs(data)
        })
        .catch(err=>console.error(err))
        // return () => {
            
        // }
    }, [])

    
    return (
        <ScreenLayout navigation={navigation}>
            <ImageBackground 
                source={{ uri: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" }}
                style={styles.image}
            >
                <SearchInput/>
                <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <ButtonWithIcon title="Filters">
                        <FontAwesome5 name="filter" size={16} color={theme.color.white}/>
                    </ButtonWithIcon>
                    <ButtonWithIcon title="Location">
                        <Ionicons name="location-sharp" size={16} color={theme.color.white}/>
                    </ButtonWithIcon>
                    <ButtonWithIcon title="Category">
                        <AntDesign name="appstore1" size={16} color={theme.color.white}/>
                    </ButtonWithIcon>
                </View>
            </ImageBackground >
            <View>
                <Container margin={10}>
                    <Title>
                        Recent Jobs
                    </Title>
                    <View>
                        {
                            jobs.length?(
                                <VirtualizedList
                                    data={jobs}
                                    initialNumToRender={5}
                                    renderItem={({ item }) =>(
                                        <JobListItem
                                            onPress={(e)=>navigation.navigate('details',{id:item.id})}
                                            key={item.id}
                                            title={item.title}
                                            logo={item.company_logo}
                                            company={item.company}
                                            datePosted={item.created_at.split(" ").slice(1,3).join(" ")}
                                            location={item.location}
            
                                        />
                                    )}
                                    keyExtractor={item => item.id}
                                    getItemCount={(data)=>data.length}
                                    getItem={getItem}
                                />
                            ):(
                                <ActivityIndicator size="large" color={theme.color.primary.main} />
                            )
                        }
                    </View>
                </Container>
            </View>
        </ScreenLayout>
    )
}



const styles = StyleSheet.create({
    image: {
      flexDirection:'column',
      height:theme.percentageHeight(20),
      paddingTop:20,
      paddingLeft:10,
      paddingRight:10,
      resizeMode: "cover",
      justifyContent:'flex-start'
    },
  });

