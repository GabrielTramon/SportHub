import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./SRC/Pages/Home";
import Gerente from "./SRC/Pages/Gerente";
import Funcionario from "./SRC/Pages/Funcionario";
import Usuario from "./SRC/Pages/Usuario";
import Loja from "./SRC/Pages/Loja";
import NovoUsuario from "./SRC/Pages/NovoUsuario";
import FuncionarioHome from "./SRC/Pages/FuncionarioHome";
import adcProdutos from "./SRC/Pages/adcProdutos";
import CrudFunc from "./SRC/Pages/CrudFunc";
import GerenteHome from "./SRC/Pages/GerenteHome";
import CrudGerente from "./SRC/Pages/CrudGerente";
import adcFuncionarios from "./SRC/Pages/acdFuncionarios";


export function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gerente" component={Gerente} />
      <Tab.Screen name="Funcionario" component={Funcionario} />
      <Tab.Screen name="Usuario" component={Usuario} />
      <Tab.Screen name="Loja" component={Loja} />
      <Tab.Screen name="NovoUsuario" component={NovoUsuario} />
      <Tab.Screen name="FuncionarioHome" component={FuncionarioHome} />
      <Tab.Screen name="adcProdutos" component={adcProdutos} />
      <Tab.Screen name="CrudFunc" component={CrudFunc} />
      <Tab.Screen name="CrudGerente" component={CrudGerente} />
      <Tab.Screen name="GerenteHome" component={GerenteHome} />
      <Tab.Screen name="adcFuncionarios" component={adcFuncionarios} />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer screemOpitions={{ headerShown: false }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gerente" component={Gerente} />
        <Stack.Screen name="Funcionario" component={Funcionario} />
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="Loja" component={Loja} />
        <Stack.Screen name="NovoUsuario" component={NovoUsuario} />
        <Stack.Screen name="FuncionarioHome" component={FuncionarioHome} />
        <Stack.Screen name="adcProdutos" component={adcProdutos} />
        <Stack.Screen name="CrudFunc" component={CrudFunc} />
        <Stack.Screen name="CrudGerente" component={CrudGerente} />
        <Stack.Screen name="GerenteHome" component={GerenteHome} />
        <Stack.Screen name="adcFuncionarios" component={adcFuncionarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
