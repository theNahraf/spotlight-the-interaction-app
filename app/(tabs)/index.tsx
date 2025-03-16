import { Pressable,Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { style } from "@/styles/auth";
export default function Index() {
  return (
  <View style={style.container}>
    {/* type safe out of the box  */}
    <Link style={{color:"white"}} href={"/Notifications"}>
      visit notification screen
    </Link>
  </View>
  );
}
