import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const TelaInicial = (props) =>{
  // console.log(props);
    return (
        <View style={styles.view}>
            <Text style={styles.text}>  Telas</Text>
            <Button title="Box Model" onPress={()=> props.navigation.navigate("Primeira")}/>
            <Button title="Position" onPress={()=> props.navigation.navigate("Position")}/>
            <Button title="FlexBox" onPress={()=> props.navigation.navigate("FlexBox")}/>
            <Button title="Button e Touchable" onPress={()=> props.navigation.navigate("Button_Touchable")}/>
            <Button title="Imagem" onPress={()=> props.navigation.navigate("Imagem")}/>
            <Button title="Scroll" onPress={()=> props.navigation.navigate("Scroll")}/>
        </View>
    )
}
//onPress é uma função que vai ser executada quando o botão for pressionado
//  alignSelf: "center" - alinha o texto no meio da tela
const styles = StyleSheet.create({

text:{
  fontSize:20,
  margin:20,
  alignSelf: "center"
}

});

export default TelaInicial;


// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const TelaInicial = () => {
//   return (
//     <View>
//       <Text>Inicial</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default TelaInicial;