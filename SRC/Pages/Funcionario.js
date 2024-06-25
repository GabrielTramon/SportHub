import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import React, { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../Config/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Funcionario({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginFuncionario = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      navigation.navigate("FuncionarioHome", { idUser: userCredential.user.uid }); //task de cada Funcionario
    } catch (error) {
      console.error("Error logging in:", error);
      //Alert.alert('Error', error.message);
      setError(true);
    }
  };
  useEffect(() => {
    const statusAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("FuncionarioHome", { idUser: user.uid });
      }
    });

    return () => statusAuth();
  }, []);

  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.form}>
        <View style={styles.title}>
          <Text style={styles.text}>Login</Text>
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

        {error === true ? (
        <View style={styles.alert}>
          <Ionicons name="alert-circle" size={24} color="red" />
          <Text style={styles.txtalert}>email ou senha inválidos</Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password == "" ? (
        <TouchableOpacity disabled={true} style={styles.botao}>
          <Text style={styles.botaotxt}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={LoginFuncionario}  style={styles.botao}>
          <Text style={styles.botaotxt}>Login</Text>
        </TouchableOpacity>
      )}
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
  btnf: {
    paddingTop: 20,
  }
});
