import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const PrimeiraComponent = (props) =>{
    return (
        <View>
            <Text style={styles.text}>Box Model</Text>
            {/* <Button title="Navegar" onPress={()=> props.navigation.navigate("Inicial")}/> */}
        </View>
    )
}

const styles = StyleSheet.create({

text:{
    fontSize: 30,
    borderWidth: 5,
    borderColor: "red",
    alignSelf:"center",
    height: 300,
    width: 300,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding:10,
    paddingTop:10,
    paddingHorizontal:20,
    paddingVertical: 20,
    margin: 150,

    // borderTopWidth: 10,
    // borderBottomWidth: 50,
    // borderLeftWidth:10,
    // borderRightWidth:30,
    // borderTopColor:"blue",
}

});

export default PrimeiraComponent;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const PrimeiraComponent = () => {
//   return (
//     <View>
//       <Text>Primeira Component</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default PrimeiraComponent;