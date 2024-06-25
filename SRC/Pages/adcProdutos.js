import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    Image
  } from "react-native";
  
import React, { useState } from "react";
import { database, collection, addDoc } from "../Config/firebaseconfig";
import * as ImagePicker from 'expo-image-picker'


export default function adcProdutos({navigation}) {

    const [image, setImage] = useState('https://isrv.nicephotos.com.br/imgs/site_novo/landings/40_fotos_gratis/icones/04.png')
    const [newID, setNewID] = useState(null);
    const [newName, setNewName] = useState(null);
    const [newValor, setNewValor] = useState(null);

    const handleImagePicker = async() => {
      const result = await ImagePicker.launchImageLibraryAsync({ //função para acessar a biblioteca de imagens
        aspect: [4,4], //foto em formato quadrado
        allowsEditing: true, //permitir a função de editar a imagem
        base64: true,//geração da imagem em link = url
        quality: 1,//determinação da qualidade
      });
    
      if (!result.canceled){//condição se caso ele não cancelou a foto
        setImage(result.assets[0].uri)
      }
    }

    function addNewProduct() {
      const ProdutoDoc = collection(database, "produtos");
      addDoc(ProdutoDoc, {
        codigo: newID,
        nome: newName,
        valor: newValor,
        image: image
      });
      Alert.alert("Produto Cadastrado com sucesso!")
      navigation.navigate("FuncionarioHome");
    }

    return (
      <SafeAreaView style={styles.contaner}>
        <View style={styles.form}>
          <View style={styles.title}>
            <Text style={styles.text}>Cadastrar Produtos</Text>
          </View>
          <View style={styles.data}>
            <TextInput
              placeholderTextColor="white"
              style={styles.input}
              placeholder="ID"
              value={newID}
              onChangeText={setNewID}
            ></TextInput>
            <TextInput
              placeholderTextColor="white"
              style={styles.input}
              placeholder="Nome"
              value={newName}
              onChangeText={setNewName}
            ></TextInput>
            <TextInput
              placeholderTextColor="white"
              style={styles.input}
              placeholder="Valor"
              value={newValor}
              onChangeText={setNewValor}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={handleImagePicker}>
            <Image
                    source={{ uri: image}}
                    style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.Pbotao}>
            <TouchableOpacity style={styles.botao} onPress={()=>{addNewProduct()}}>
              <Text style={styles.botaotxt}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    form: {
      height: "85%",
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
      fontSize: 45,
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
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginTop: 30,
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
      marginBottom: 100
    },
    input: {
      display: "flex",
      justifyContent: "center",
      width: "90%",
      height: 50,
      borderRadius: 10,
      backgroundColor: "#8D86C9",
      paddingLeft: "4%",
    },
    image: {
      display: 'flex',
      width: 90,
      height: 90,
    },
  });
  