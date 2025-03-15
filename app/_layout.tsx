import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//first file that run , in this we wrap our application 
//react me app js aur main js ki tarah 
//do not overflow the scren thats why safe area is necessary 
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
  <Stack screenOptions={{headerShown:false}}/>
    </SafeAreaView>
    </SafeAreaProvider>
    
  )
}
//navigator
//special file


