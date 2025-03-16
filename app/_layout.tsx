import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";
import InitialLayout from "@/components/InitialLayout";
//first file that run , in this we wrap our application 
//react me app js aur main js ki tarah 
//do not overflow the scren thats why safe area is necessary 

export default function RootLayout() {
  
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
console.log("publish key ", publishableKey);


if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

  return (
   <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
    <InitialLayout/>
    </SafeAreaView>
    </SafeAreaProvider>
    </ClerkLoaded>
     </ClerkProvider>
    
  )
}
//navigator
//special file


