import React, {useRef} from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions, Button } from "react-native";

const Scroll = () =>{

    const scrollRef = useRef();
    const {width, height} = Dimensions.get("window");

    return (
        <View>
            <Text> Scroll view</Text>
            <ScrollView
            //  decelerationRate="fast" - NA HORA DA ROLAGEM PARA BAIXO ELE VAI DESCER DEVAGAR O SCROLL
            //  horizontal={true} - para deixar o scroll horizontal
            decelerationRate="normal"
            // horizontal={true}
            pagingEnabled={true}
            snapToInterval={200}
            ref={scrollRef}
            style={{width: width, height:height-200}}
            // style={{width:200}}
            //showsHorizontalScrollIndicator={false} - serve para tirar a barra de rolagem
            showsHorizontalScrollIndicator={false}
            >
                <View style={styles.caixa1}/>
                <View style={styles.caixa2}/>
                <View style={styles.caixa3}/>
                <View style={styles.caixa1}/>
                <View style={styles.caixa2}/>
                <View style={styles.caixa3}/>
            </ScrollView>
            <Button />
        </View>
    );
};

//dimensions para deixar da largura da tela que fica parecendo paginas
const {width, height} = Dimensions.get("window");
// const LADO = width;
const LADO = 200;

const styles = StyleSheet.create({

    caixa1:{
        height:LADO,
        width: LADO,
        backgroundColor:"red",
    },

    caixa2:{
        height:LADO,
        width: LADO,
        backgroundColor:"blue",
    },
    caixa3:{
        height:LADO,
        width: LADO,
        backgroundColor:"green",
    }

});

export default Scroll;