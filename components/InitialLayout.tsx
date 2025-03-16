//function where we handle authenticcation and navigateion 

import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
        // islode become true when clerk is loaded 
    const {isLoaded, isSignedIn} = useAuth()
    //it will will give you segements of the current screen , login , home or notification scrreeen 

    const segments = useSegments();
    const router = useRouter();
    useEffect(()=>{
        if(!isLoaded) return

        //check if we are no auth screen or any other 
        const inAuthScreen = segments[0] == '(auth)'

        //if user is not sign in and user is not in the auth scrren then should navigate to login page 
        if(!isSignedIn && !inAuthScreen) router.replace("/(auth)/login")
        //if user is signin  and still trying to visit to login page then redirect to home page 
        else if(isSignedIn && inAuthScreen) router.replace("/(tabs)")
    }, [isLoaded, isSignedIn, segments])

    if(!isLoaded) return null

    //everying is succces then reutnr 
    return <Stack screenOptions={{headerShown:false}}/>
}