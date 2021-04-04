import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import theme from '../../assets/theme';
import Home from '../Home'



import Add from '../Add';

import Bookmark from '../Bookmark';
import Star from '../Star';
import Profile from '../Profile';
import { Ionicons } from '@expo/vector-icons';
import FeedList from './FeedList';

const mainColor=theme.color.primary.main

export default function({navigartion}) {
    return (
        
        <Tab.Navigator 
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                // if (route.name === 'Home') {
                //   iconName = focused
                //     ? 'ios-information-circle'
                //     : 'ios-information-circle-outline';
                // } else if (route.name === 'Settings') {
                //   iconName = focused ? 'ios-list-box' : 'ios-list';
                // }
                switch (route.name) {
                    case "list":
                    iconName =  'md-home-sharp';
                    break;

                    case "bookmark":
                    iconName ='bookmark';
                    break;
                    case "add":
                    iconName = 'add-circle';
                    break;
                    case "star":
                    iconName = 'star';
                    break;
                    case "profile":
                    iconName = 'person';
                    break;
                
                    default:
                    iconName = 'home-sharp';
                    break;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={focused?size+15:size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: mainColor,
                inactiveTintColor: 'gray',
            }}
            initialRouteName="feed"
            tabBarOptions={{showLabel: false }}
            >
                {/* <Tab.Screen name="home" component={Home} /> */}
                <Tab.Screen name="list" component={FeedList} />
                <Tab.Screen name="bookmark" component={Bookmark} />
                <Tab.Screen name="add" component={Add} />
                <Tab.Screen name="star" component={Star} />
                <Tab.Screen name="profile" component={Profile} />
            </Tab.Navigator>
            
        
    )
}
