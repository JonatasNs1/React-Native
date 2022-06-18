import React from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function Form(){

    // useState -Para poder gerenciar o estado de uma informação
   
   
    return(
      <View>
            <View>
                <Text>Altura </Text>
                <TextInput placeholder="Ex. 1.75"
                keyboardType="numeric"
                />
                <Text>Peso </Text>
                <TextInput placeholder="Ex. 75.365"
                keyboardType="numeric"/> 
                <Button title="Calcular IMC"/>
            </View>

<ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>

      //keyboardType - indica qual teclado deve abrir, assim quando clicado só ira aparece numero
      // no teclado
    );
}