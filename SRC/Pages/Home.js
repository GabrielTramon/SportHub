import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.contaner}>
      <Text style={styles.textD}>SportsHub</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Gerente")}
        style={styles.Button}
      >
        <Text style={styles.textButton}>GERENTE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Funcionario")}
        style={styles.Button}
      >
        <Text style={styles.textButton}>FUNCIONARIO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Usuario")}
      >
        <Text style={styles.textButton}>USUARIO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaner: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  textD: {
    marginBottom: 150,
    fontSize: 65,
    color: "#8D86C9",
    textAlign: "center",
  },
  textButton: {
    textAlign: "center",
    color: "#F7ECE1",
    fontSize: 20,
  },
  Button: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: 215,
    height: 45,
    marginBottom: 40,
    borderRadius: 25,
    backgroundColor: "#8D86C9",
  },
});
