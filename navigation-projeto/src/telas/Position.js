import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Position = (props) =>{

    return (
        <View style={styles.view}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </View>
    )
}
//onPress é uma função que vai ser executada quando o botão for pressionado
//  alignSelf: "center" - alinha o texto no meio da tela
const styles = StyleSheet.create({

    box1:{
        width:100,
        height:100,
        backgroundColor:"red",
    },
    box2:{
        width:70,
        height:70,
        backgroundColor:"green",
        position:"absolute",
    },
    box3:{
        width:50,
        height:50,
        backgroundColor:"blue",
        position:"absolute"
    }

});

export default Position;