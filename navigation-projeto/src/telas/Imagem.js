import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Imagem = () =>{
    return (
        <View>
            <Text> Imagens</Text>
        <Image 
        resizeMode="stretch"
        blurRadius={20}
        style={{
            width:300,
            height:400, 
          borderColor:"red",
          borderWidth:3,
            }}
        source={require("../../assets/QuebrandoParadigmas.png")}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Imagem;