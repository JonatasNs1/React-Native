import React from "react";
import {View, StyleSheet, Text} from "react-native";


const FlexBox =() =>{
    return (
        <View style={styles.view}>
            <Text style={styles.caixa1}> Caixa 1</Text>
            <Text style={styles.caixa2}> Caixa 2</Text>
            <Text style={styles.caixa3}> Caixa 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // row - linha column - coluna
// flexDirection: "column" -> um embaixo do outro
   // flexDirection: "row" -> um do lado do outro
   // flexDirection: "column-reverse" -> um embaixo do outro verticalmente, coluna invertida de baixo para cima
   // flexDirection: "row-reverse" -> um do lado do outro Horizontalmente, invertida da esquerda para direita

view:{
        borderWidth: 3,
        borderColor: "Blue",
        flex:0.5,
        // alignItems:"flex-end",
        // alignItems:"flex-start",
        // alignItems:"center",

        flexDirection:"row",
        // justifyContent:"space-evenly",
        // backgroundColor:"#8B4513",
        // flexDirection: "row-reverse",
    },
    caixa1:
    {
        fontSize:20,
        borderWidth: 3,
        borderColor:"blue",
        // flex: 0.2,
        
    },
    caixa2:{
        fontSize:30,
        borderWidth: 3,
        borderColor:"red",
        // flex: 0.3,
    } ,
    caixa3:{
        fontSize:20,
        borderWidth: 3,
        borderColor:"green",
        // flex: 0.5,
        alignSelf:"flex-end",
       
    }  


});

export default FlexBox;