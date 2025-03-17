import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { style } from '@/styles/auth'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useSSO } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
export default function login() {
  const {startSSOFlow}  = useSSO()
  const router = useRouter() //navigation manually
  const handleGoogleSignIn = async()=>{
    try { 
      const {createdSessionId, setActive}= await startSSOFlow({strategy:"oauth_google"})
      if(setActive && createdSessionId){
        setActive({session:createdSessionId})
        router.replace('/(tabs)')
      }
    } catch (error) {
      console.log("OAuth error", error)
    }
  }
  return (
    <View style= {style.container}>
      {/* <Link href={'/(tabs)'}  style={{color:"white"}}>to notification</Link> */}
      {/* brand section  */}
      <View style={style.brandSection}>
    <View style={style.logoContainer}>
      <Ionicons name='leaf' size={32} color={COLORS.primary}/>
    </View>
    <Text style={style.appName} >Spotlight</Text>
    <Text style={style.tagline}>don't miss anything</Text>
      </View>

        {/* illustration  */}

        <View style={style.illustrationContainer}>  
        <Image
        source={require("../../assets/images/Online wishes-bro.png")}
        style={style.illustration}
        resizeMode='cover'
        />
        </View>

        {/* login section  */}
        <View style={style.loginSection}>
          <TouchableOpacity 
          style={style.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
          >
            <View style={style.googleIconConatiner}>
            <Ionicons name='logo-google' size={20} color={COLORS.surface}/>
            </View>
            <Text style={style.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <Text style={style.termsText}>
            By continuing, you agree to our Terms and Privacy Policy
          </Text>
        </View>
    </View>
  )
}