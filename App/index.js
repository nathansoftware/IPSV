import React, {useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './screens/TelaInicial';
import Home from './screens/Home';
import Culto from './screens/Culto';
import Visita from './screens/Visita';
import Financeiro from './screens/Financeiro';
import AreaFinanceira from './screens/AreaFinanceira';
import DoacaoIgreja from './screens/DoacaoIgreja';
import DoacaoGeracao180 from './screens/DoacaoGeracao180';
import DoacaoMissoes from './screens/DoacaoMissoes';
import DoacaoSopao from './screens/DoacaoSopao';
import LoginPastor from './screens/LoginPastor';
import  TelaGerenciamentoPastor from "./screens/arearestrita/TelaGerenciamentoPastor";
import  GerenciarVisitas from "./screens/arearestrita/GerenciarVisitas";
import  FiltrarVisitas from "./screens/arearestrita/FiltrarVisitas";
import  CadastrarVisitas from "./screens/arearestrita/CadastrarVisitas";






export default function APP() {

    const Stack = createStackNavigator();
    

 return (
     <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name="TelaInicial" options={{headerShown:false}} component={TelaInicial} />
             <Stack.Screen
              name="Home" 
              component={Home}
              options={{
              title:"Home",
              headerTintColor:"#f0f0f0",
              headerStyle:{backgroundColor: "#4f6d7a"},
              }}
               />
             <Stack.Screen name="Assistir Culto" options={{headerShown:false}} component={TelaInicial} />
             <Stack.Screen
              name="Culto" 
              component={Culto}
              options={{
              title:"Culto",
              headerTintColor:"#f0f0f0",
              headerStyle:{backgroundColor: "#4f6d7a"},
              }}
               />
             <Stack.Screen name="Visita"
              component={Visita}
              options={{
              title:"Visita",
              headerTintColor:"#f0f0f0",
              headerStyle:{backgroundColor:"#4f6d7a"},
                }} 
                />
             <Stack.Screen
              name="LoginPastor"
              component={LoginPastor}
              options={{
              title:"Bem vindo Pastor",
              headerTintColor:"#f0f0f0",
              headerStyle:{backgroundColor:"#4f6d7a"},
              }}
              />
              <Stack.Screen
               name="TelaGerenciamentoPastor"
               component={TelaGerenciamentoPastor}
               options={{
               title:"Área administrativa",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
               />
              <Stack.Screen
               name="GerenciarVisitas"
               component={GerenciarVisitas}
               options={{
               title:"Gerenciar Visitas",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="FiltrarVisitas"
               component={FiltrarVisitas}
               options={{
               title:"Filtrar Visitas",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="CadastrarVisitas"
               component={CadastrarVisitas}
               options={{
               title:"Cadastrar Visitas",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="Financeiro"
               component={Financeiro}
               options={{
               title:"Cartão de Crédito",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
            name="AreaFinanceira"
            component={AreaFinanceira}
            options={{
            title:"Contribua",
            headerTintColor:"#f0f0f0",
            headerStyle:{backgroundColor:"#4f6d7a"},
            }}
         /> 
            <Stack.Screen
               name="DoacaoIgreja"
               component={DoacaoIgreja}
               options={{
               title:"Doe para a Igreja",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="DoacaoGeracao180"
               component={DoacaoGeracao180}
               options={{
               title:"Doe para a Geracão 180°",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="DoacaoMissoes"
               component={DoacaoMissoes}
               options={{
               title:"Doe para Missões",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
            <Stack.Screen
               name="DoacaoSopao"
               component={DoacaoSopao}
               options={{
               title:"Doe para o sopão",
               headerTintColor:"#f0f0f0",
               headerStyle:{backgroundColor:"#4f6d7a"},
               }}
            /> 
         </Stack.Navigator>
     </NavigationContainer>
 )
//
}

