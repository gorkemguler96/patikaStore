import {StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    input: {
        height:40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:6,
        width:Dimensions.get('window').width/1.5,
        backgroundColor: '#eceff1',
        borderColor:'#eceff1',
        fontSize:17,
    },
    patikastore:{
        fontWeight:"bold",
        fontSize:30,
        color:"purple",
        alignSelf:"center"
    }
})
