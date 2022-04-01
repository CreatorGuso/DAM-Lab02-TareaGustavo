
import React, { useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput,Alert} from "react-native";

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const onPress = () =>{
    if (usuario=="gustavo" && contraseña=="123456789") {
      Alert.alert("Iniciando sesion");
    } else {
      Alert.alert("Contraseña incorrecta")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <View style={styles.text}>
          <Text style={styles.titulo}>Bienvenido a CreatoGuso</Text>
        </View>
        <View style={styles.ViewImage}>
          <Image style={styles.imagen} source={require('./img/spaceX.png')} />
        </View>
        <View style={styles.text}>
          <Text style={styles.titulo}>Usuario</Text>
        </View>
        <TextInput
        style={styles.inputext}
        onChangeText={(val)=> setUsuario(val)}
        placeholder="Ingresar Usuario"
        keyboardType="text"
        />
        <View style={styles.text}>
          <Text style={styles.titulo}>Contraseña</Text>
        </View>
        <TextInput
        style={styles.inputextContraseña}
        onChangeText={(val)=> setContraseña(val)}
        placeholder="Ingresar Contraseña"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  },
  titulo:{
    fontSize:30,
  },
  ViewImage:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen:{
    width:400,
    height:150,
  },
  inputext:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
  inputextContraseña:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
  button:{
    top:10,
    alignItems:'center',
    backgroundColor:'#DDDDDD',
    padding: 10,
  },
});


export default App;

