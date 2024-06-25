import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View
} from "react-native";

import { auth } from "../Config/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function NovoUsuario({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UsuarioNovo = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      Alert.alert("conta criada");
      navigation.navigate("Login");
    } catch (error) {
      //console.error('Error signing up:', error);
      Alert.alert("Error", error.message);
    }
  };
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.form}>
        <View style={styles.title}>
          <Text style={styles.text}>Cadastro</Text>
        </View>
        <View style={styles.data}>
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.Pbotao}>
          <TouchableOpacity style={styles.botao} onPress={UsuarioNovo}>
            <Text style={styles.botaotxt}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  form: {
    height: "70%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  contaner: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "#8D86C9",
    fontSize: 65,
  },
  data: {
    height: "45%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 30,
    gap: 40,
  },
  Pbotao: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  botaotxt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  botao: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "55%",
    height: 45,
    borderRadius: 20,
    backgroundColor: "#8D86C9",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#8D86C9",
    paddingLeft: "4%",
  },
});
