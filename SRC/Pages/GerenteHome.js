import { StyleSheet, Image, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

export default function GerenteHome({navigation}) {
  return (
    <SafeAreaView style={styles.contaner}>
      <Text style={styles.textD}>Seja Bem-Vindo</Text>
      <View style={styles.harder}>
        <TouchableOpacity onPress={() => navigation.navigate("adcFuncionarios")}>
            <Image
                source={require("./fotos/adcFunc.png")}
                style={styles.imageFunc}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CrudGerente")}>
            <Image
                source={require("./fotos/visu.png")}
                style={styles.image}
            />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contaner: {
    alignItems: "center", 
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  harder: {
    marginBottom: 8,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 50,
  },
  imageFunc: {
    width: 90,
    height: 90,
    marginBottom: 50,
    marginLeft: 10
  },
  textD: {
    marginBottom: 100,
    fontSize: 35,
    color: "#8D86C9",
    textAlign: "center",
  },
});
