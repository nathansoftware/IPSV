import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert, Button } from "react-native";
import { Entypo }  from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

 

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Desculpe, algo deu errado.', 'Por favor tente novamente mais tarde.');
    });     
}
//backgroundColor:"#e0ffff"
//backgroundColor: "#00a3cc",
//backgroundColor:"#DCDCDC"

export default (props) => {
    return (
<SafeAreaView style={{ flex: 1, backgroundColor:"#DCDCDC", paddingVertical:70 }}>
    <ScrollView>
      
      
    <RowItem
    text="Sobre" 
    onPress={() => alert("Seja Bem Vindo!") }
    rightIcon={
        <Entypo name="home" size={20} color={colors.blue} /> }
        />
        
      <RowSeparator /> 

    <RowItem
    text="Assistir Culto"
    onPress={() =>props.navigation.navigate('Culto')}
     rightIcon={
     <Entypo name="youtube" size={20} color={colors.blue} /> }
     />

    <RowSeparator /> 

    <RowItem
    text="Visitas"
    onPress={() =>props.navigation.navigate('Visita')} 
    rightIcon={<Entypo name="calendar" size={20} color={colors.blue} /> }
    />  

     <RowSeparator />    
    
    <RowItem
    text="Dízimos e Ofertas"
    onPress={() =>props.navigation.navigate('Financeiro')}
    rightIcon={
      <Entypo name="chevron-right" size={20} color={colors.blue} /> }
        />
      <RowSeparator /> 

      <RowItem
    text="Doações"
    onPress={() =>props.navigation.navigate('AreaFinanceira')}
    rightIcon={
      <Entypo name="chevron-right" size={20} color={colors.blue} /> }
        />
      <RowSeparator />    
        

      <RowItem
    text="Área do Pastor"
    onPress={() =>props.navigation.navigate('LoginPastor')}
    rightIcon={
      <Entypo name="chevron-right" size={20} color={colors.blue} /> }
        />
      <RowSeparator />   
       
 </ScrollView>
</SafeAreaView>
 );

}

