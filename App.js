import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// import Playground from './Screen/Playground'

import theme from './assets/theme';
import FeedList from './Screen/Feed/FeedList';
import FeedDetail from './Screen/Feed/FeedDetail';
import { ImageBackground } from 'react-native';
import Feed from './Screen/Feed';

const mainColor=theme.color.primary.main

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="feed">
            <Stack.Screen options={{
              headerShown:false
            }} name="feed" component={Feed} />
            <Stack.Screen
                name="details" 
                component={FeedDetail}
                options={({ navigation, route }) => ({
                    // headerTitle: props => <DetailPageHeader
                    // //  {...props} 
                    //  />,
                    headerStyle:{
                        height:theme.percentageHeight(30)
                    },
                    headerBackground:props=><ImageBackground style={{
                        height:'100%',
                        flex:1,
                    }} source={{uri:"https://picsum.photos/200/300"}} /> })}
                
                 />
            
        </Stack.Navigator>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react'
// import { Button } from 'react-native';
// import { TextInput } from 'react-native';
// import { View, Text,StyleSheet,ActivityIndicator,Dimensions } from 'react-native'
// import { io } from 'socket.io-client';
// // import { io } from 'socket.io-client';
// const {height, width} = Dimensions.get('window');
// // window.navigator.userAgent = "react-native";

// const socket = io('http://localhost:1337')


// export default function App() {
//   const [state, setstate] = React.useState('')


//   function generate(e){
//     // logic here
    


//     setstate('jjhhh')
//   }
//   React.useEffect(() => {
//     socket.on("connect",()=>{
//       console.log("socket connected")
//       socket.on("testing",()=>{
//         console.log("message from server")
//       })
//     })
//     return () => {
      
//     }
//   }, [])
  
//   return (
//     <View style={{
//       flex:1,
//       height:height,
//       justifyContent:'center',
//       alignItems:'center'
//     }}>
      
//         <Text>
          
//         </Text>
//         <TextInput style={{color:'white',backgroundColor:'brown'}} value={state} />
//         <Button 
        
//         onPress={generate} title="generate" color="green" />
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   myStyle:{
//     color:'blue'
//   },
//   newStyle:{
//     color:'red'
//   }
// });