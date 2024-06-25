import { StyleSheet, Image, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

export default function FuncionarioHome({navigation}) {
  return (
    <SafeAreaView style={styles.contaner}>
      <Text style={styles.textD}>Seja Bem-Vindo</Text>
      <View style={styles.harder}>
        <TouchableOpacity onPress={() => navigation.navigate("adcProdutos")}>
            <Image
                source={require("./fotos/adc.png")}
                style={styles.image}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CrudFunc")}>
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
  textD: {
    marginBottom: 100,
    fontSize: 35,
    color: "#8D86C9",
    textAlign: "center",
  },
});
