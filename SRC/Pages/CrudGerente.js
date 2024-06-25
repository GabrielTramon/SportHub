import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";

import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { database } from "../Config/firebaseconfig";

export default function CrudGerente({ navigation }) {
  const [Funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    const FuncionarioCollection = collection(database, "funcionarios");
    const listen = onSnapshot(FuncionarioCollection, (query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setFuncionario(list);
    });
    return () => listen();
  }, []);

  function deleteFuncionario(id) {
    const FuncionarioDocRef = doc(database, "funcionarios", id);
    deleteDoc(FuncionarioDocRef);
    Alert.alert("Funcionario excluido com sucesso");
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textD}>Funcionarios Cadastrados</Text>
      </View>
      <FlatList
        data={Funcionario}
        renderItem={({ item }) => {
          return (
            <View style={styles.funcionario}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("funcionarios", {
                    id: item.id,
                    codigo: item.codigo,
                    nome: item.nome,
                    setor: item.setor,
                    image: item.image,
                  });
                }}
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.funcionarioTxt}>ID: {item.codigo}</Text>
                  <Text style={styles.funcionarioTxt}>Nome: {item.nome}</Text>
                  <Text style={styles.funcionarioSetor}>Setor: {item.setor}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteFuncionario(item.id)}>
                <AntDesign style={styles.lixeira} name="delete" size={24} color="white" />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    marginTop: 50,
    marginBottom: 20,
  },
  textD: {
    fontSize: 32,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  funcionario: {
    backgroundColor: "#8D86C9",
    width: 340,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  funcionarioTxt: {
    color: 'white',
    fontSize: 18,
    flexWrap: 'wrap',
  },
  funcionarioSetor: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  lixeira: {
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
