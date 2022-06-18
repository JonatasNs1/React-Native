import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";


const Button_Touchable = () =>{
    return (
        // TouchableOpacity -ele é um view(um botao), tudo que colocar dentro dele vai virar tipo um button
        // vai pegar a interação do usuario
        <View>
            <TouchableOpacity 
            style={styles.touchable}
             onPress={()=> console.log("eu")}
             activeOpacity={0.5}
             >
                 <Text> Button_Touchable</Text>
         
            </TouchableOpacity>

            
       
       <View style={styles.button}>
       <Button 
            // disabled={true} - para deixar o botao desabilitado
            color="red"
            title="teste"
             onPress={()=> console.log("pressionado")}
             />
       </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        alignSelf:"center"
    },
    touchable:{
        alignSelf:"center",
        border:3,
        borderColor: "green",
        backgroundColor:"blue",
        color:"#ffffff",
        height:40,
        width:200,
        borderRadius: 20,
        justifyContent:"center", //verticalmente
        alignItems:"center",//horizontalmente

    }
});

export default Button_Touchable;