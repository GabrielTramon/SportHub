import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Image
} from "react-native";

import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { database } from "../Config/firebaseconfig";

export default function Produto({ navigation }) {
  const [Produto, setProduto] = useState([]);

  useEffect(() => {
    const ProdutoCollection = collection(database, "produtos");
    const listen = onSnapshot(ProdutoCollection, (query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setProduto(list);
    });
    return () => listen();
  }, []);

  function deleteProduto(id) {
    const ProdutoDocRef = doc(database, "produtos", id);
    deleteDoc(ProdutoDocRef);
    Alert.alert("Produto excluido com sucesso");
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textD}>Produtos Cadastrados</Text>
      </View>
      <FlatList
        data={Produto}
        renderItem={({ item }) => {
          return (
            <View style={styles.Produto}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("nome", {
                    id: item.id,
                    valor: item.valor,
                    nome: item.nome,
                    image: item.image,
                  });
                }}
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.ProdutoTxt}>ID: {item.codigo}</Text>
                  <Text style={styles.ProdutoTxt}>Nome: {item.nome}</Text>
                  <Text style={styles.ProdutoTxt}>R$: {item.valor}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteProduto(item.id)}>
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
  Produto: {
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
  ProdutoTxt: {
    color: 'white',
    fontSize: 18,
    flexWrap: 'wrap',
  },
  lixeira: {
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 20,
  },
});
