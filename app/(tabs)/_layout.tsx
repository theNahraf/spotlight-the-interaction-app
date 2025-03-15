import { View, Text } from 'react-native'
import React from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import {COLORS} from '../../constants/theme'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      //remove name of tabs
      tabBarShowLabel : false,
      //remove header tabname wala
      headerShown :false, 
      tabBarActiveTintColor : COLORS.primary,
      tabBarInactiveTintColor : COLORS.grey,
      tabBarStyle : {
        backgroundColor : "black",
        borderTopWidth : 0,
        position : 'absolute',
        elevation :0, //related to android
        height : 40,
        paddingBottom :8,
      }
    }}
    >
      <Tabs.Screen name='index' 
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='home'size={size} color={color}/>
      }}
      />
      <Tabs.Screen name='Bookmarks' 
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='bookmark'size={size} color={color}/>
      }}
      />
      <Tabs.Screen name='Createpost'
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='add-circle' size={size} color={COLORS.primary}/>
      }}
      />
      <Tabs.Screen name='Notifications'
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='notifications'size={size} color={color}/>
      }}
      />
      <Tabs.Screen name='Profile'
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='person-circle' size={size} color={color}/>
      }}
      />
      
    </Tabs>
  )
}