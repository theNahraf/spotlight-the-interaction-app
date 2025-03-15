import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      //remove name of tabs
      tabBarShowLabel : false,
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
        tabBarIcon : ({size, color}) => <Ionicons name='add-circle' size={size} color={color}/>
      }}
      />
      <Tabs.Screen name='Notifications'
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='notifications'size={size} color={color}/>
      }}
      />
      <Tabs.Screen name='Profile'
      options={{
        tabBarIcon : ({size, color}) => <Ionicons name='person'size={size} color={color}/>
      }}
      />
      
    </Tabs>
  )
}