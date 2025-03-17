import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import InitialLayout from "@/components/InitialLayout";
//first file that run , in this we wrap our application 
//react me app js aur main js ki tarah 
//do not overflow the scren thats why safe area is necessary 

export default function RootLayout() {
  


  return (
    <ClerkAndConvexProvider>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
     <InitialLayout/>
    </SafeAreaView>
    </SafeAreaProvider>
    </ClerkAndConvexProvider>
    
  )
}
//navigator
//special file


