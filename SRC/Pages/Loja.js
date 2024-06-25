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

export default function Loja({ navigation }) {
  const [produtos, setProduto] = useState([]);
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    // Executes the command every time the page is reloaded
    const produtosCollection = collection(database, "produtos");
    const listen = onSnapshot(produtosCollection, (query) => {
      // Listening to onSnapshot
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setProduto(list);
    });
    return () => listen();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert("Produto adicionado ao carrinho");
  };

  const toggleLike = (item) => {
    if (liked.includes(item.id)) {
      setLiked(liked.filter((id) => id !== item.id));
    } else {
      setLiked([...liked, item.id]);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.borda}>
      <Image style={styles.usu} source={require("./fotos/usuario.png")}/>
      <Image style={styles.carrinho} source={require("./fotos/carrinho.png")}/>
    </View>
      <View style={styles.title}>
        <Text style={styles.textD}>Seja bem-vindo</Text>
      </View>
      <FlatList
        data={produtos}
        renderItem={({ item }) => {
          return (
            <View style={styles.produtos}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("produtos", {
                    id: item.id,
                    nome: item.nome,
                    valor: item.valor,
                    image: item.image,
                  });
                }}
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.produtosTxt}>Nome: {item.nome}</Text>
                  <Text style={styles.produtosSetor}>R$: {item.valor}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <AntDesign name="shoppingcart" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleLike(item)}>
                  <AntDesign
                    name={liked.includes(item.id) ? "heart" : "hearto"}
                    size={24}
                    color={liked.includes(item.id) ? "red" : "white"}
                    style={styles.likeButton}
                  />
                </TouchableOpacity>
              </View>
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
    marginTop: 20,
    marginBottom: 20,
  },
  textD: {
    fontSize: 32,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  produtos: {
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
  produtosTxt: {
    color: "white",
    fontSize: 18,
    flexWrap: "wrap",
  },
  produtosSetor: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    marginLeft: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  carrinho: {
    display: 'flex',
    width: 40,
    height: 40,
    marginLeft: '84%',
    marginTop: -42,
  },
  usu: {
    display: 'flex',
    width: 40,
    height: 40,
    marginTop: 28,
    marginLeft: '6%'
  },
  borda:{
    width: '100%',
    height: 90,
    backgroundColor: '#8D86C9',
  }
});

