import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


import {        
        View, 
        StyleSheet,
        StatusBar,
        Image,
        Dimensions, 
        Text,
        TouchableOpacity,
        Button       
     } from "react-native";

     import colors from '../../constants/colors';


const screen  = Dimensions.get('window');
const styles = StyleSheet.create({
container:{
//backgroundColor:"#e0ffff",
backgroundColor:"#DCDCDC",
    flex: 1,
    justifyContent: "center"    
 },

 textHeader: {
     color: colors.white,
     fontWeight: "bold",
     fontSize: 25,
     marginVertical: 60,
     textAlign: "center",
      
 },
 
 button: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 90, 
    
 },

 text: {
     color: colors.white,
     fontSize: 15,
     textAlign: "center" ,
     paddingBottom: 10,
     paddingTop: 100 
 },

 login__button:{
    padding: 5,
    //backgroundColor: "#4f6d7a",
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 5 
},

Text:{
    fontWeight:"bold",
    fontSize: 22, 
    color: "#2F4F4F",
    textAlign: "center" ,
    marginVertical: 70,
    
 },
 
 login__buttonText:{
    fontWeight:"bold",
    fontSize: 22, 
    color: colors.offWhite,
    backgroundColor:"#006600",
    width: screen.width * 0.60,
    height: screen.height * 0.05, 
    textAlign: "center" ,
    borderRadius: 5,
    marginVertical: 5, 
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 1,


 },
 
 text2: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center" ,
    fontWeight:"bold",
    //paddingBottom: 10,
    //paddingTop: 100 
  }
    
 
 
});
//

export default function VisitasSolicitadas(props) {

    const [user,setUser]=useState(null);
    
    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

    //
    
        return (  
          
                            
    <View style={styles.container}>
        <Text style={styles.Text}>Bem vindo {user}</Text>    
   <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('GerenciarVisitas')}>
    <Text style={styles.login__buttonText}>Gerenciar Visitas</Text>
    </TouchableOpacity>
   <Text></Text>

   <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('FiltrarVisitas')}>
    <Text style={styles.login__buttonText}>Filtrar Visitas </Text>
    </TouchableOpacity>
    <Text></Text>

    <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('CadastrarVisitas')}>
    <Text style={styles.login__buttonText}>Cadastrar visitas </Text>
    </TouchableOpacity>
    <Text></Text> 

</View>
 
 );

}

