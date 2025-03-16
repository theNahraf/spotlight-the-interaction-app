import {COLORS} from '@/constants/theme'
import { StyleSheet, Dimensions } from 'react-native'

const {width , height} = Dimensions.get("window")

export const style = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center",
        // backgroundColor: "white",
        backgroundColor: COLORS.backgroud,
    },
    brandSection:{
    
        alignItems: "center",
        marginTop : height * 0.12

    },
    appName:{
        fontSize :42,
        fontWeight :"700",
        fontFamily : "jetBrainsMono-Medium",
        color : COLORS.primary,
        letterSpacing : 0.5,
        marginBottom : 8
    },
    tagline:{
        color:COLORS.grey,
        fontSize : 16,  
        letterSpacing: 1,
        textTransform : "lowercase"
    },
    logoContainer:{
        width:60,
        height : 60,
        borderRadius : 18,
        backgroundColor : "rgba(74, 222, 128, 0.15)",
        justifyContent : "center",
        alignItems: "center",
        marginBottom : 20,   
    },
    illustrationContainer:{
        flex:1,
        justifyContent: "center",
        alignItems : "center",
        paddingHorizontal : 40
    }, 
    illustration:{
        width : width*0.75,
        height : width*0.75,
        maxHeight : 280
    },
    loginSection:{
        width: "100%",
        paddingHorizontal : 24, 
        paddingBottom: 40,
        alignItems: "center"
        
    },
    googleButton:{
        width:"100%",
        backgroundColor : COLORS.white,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        paddingVertical: 16, 
        paddingHorizontal : 24,
        marginBottom : 20,
        borderRadius : 14,
        maxWidth : 300, 
        shadowColor : "#000",
        shadowOffset : {
            width: 0,
            height : 4,
        },
        shadowOpacity : 0.15,
        shadowRadius : 12,
        elevation : 5
    },
    googleIconConatiner:{
        width: 24,
        height: 24,
        justifyContent : "center",
        alignItems : "center",
        marginRight : 12

    },
    googleButtonText:{
        fontSize: 16,
        color : COLORS.surface,
        fontWeight : "600"
    },
    termsText:{
        textAlign : "center",
        color : COLORS.grey,
        fontSize : 12,
        maxWidth : 280


    }
})
