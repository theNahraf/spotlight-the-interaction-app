import { Pressable,Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import {styles} from '../../styles/auth'
export default function Index() {
  return (
  <View>
    {/* type safe out of the box  */}
    <Link style={styles.container} href={"/Notifications"}>
      visit notification screen
    </Link>
  </View>
  );
}
