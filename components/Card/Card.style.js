import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    card:{
        backgroundColor:'#eceff1',
        width:Dimensions.get('window').width/2.28,
        borderRadius:8,
        borderColor:'#eceff1',
        margin:12
    },
    image:{
        height:200,
        width:Dimensions.get('screen').width/2.45,
        backgroundColor:"white",
        marginTop:18,
        borderRadius:8,
        alignSelf:"center"
    },
    title:{
        paddingTop:5,
        paddingLeft:10,
        paddingRight:5,
        fontWeight:"bold",
        fontSize:18,
    },
    price:{
        alignSelf:"flex-start",
        paddingTop:3,
        paddingLeft:10,
        opacity:0.5,
        fontWeight:"bold"
    },
    stok:{
        color:"red",
        paddingLeft:10,
        fontWeight:"bold",
        paddingBottom:8,
        paddingTop:5
    }
})