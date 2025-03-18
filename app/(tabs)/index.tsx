import { Pressable,Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { style } from "@/styles/auth";
import { useAuth } from "@clerk/clerk-expo";
export default function Index() {

  const {signOut} = useAuth();

  return (
  <View style={style.container}>
    {/* type safe out of the box  */}
    <TouchableOpacity onPress={()=>signOut()}>
    <Text style={{color:"white"}}>
      Signout
    </Text>
    </TouchableOpacity>
  </View>
  );
}
