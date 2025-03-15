import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

//taking the user immediately to the tabs page 
//and specificalllly to the home page 

export default function Index() {
  return (<Redirect
  href="/(tabs)"/>
 
)}