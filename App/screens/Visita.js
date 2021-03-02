import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//
import { WebView } from 'react-native-webview';
//

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

     import colors from '../constants/colors';


const screen  = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#B0E0E6",
        flex: 1,
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
    paddingBottom: 90,
    paddingTop: 90, 
    marginBottom: 90,
    borderRadius: 15,
    
 },

 text: {
     color: colors.white,
     fontSize: 15,
     textAlign: "center" ,
     paddingBottom: 10,
     paddingTop: 100 
 },

 text2: {
  color: colors.black,
  fontSize: 18,
  textAlign: "center" ,
  fontWeight:"bold",
  //paddingBottom: 10,
  //paddingTop: 100 
},

 login__button:{
    padding: 5,
    backgroundColor: "#4f6d7a",
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 5 
},

Text:{
  fontWeight:"bold",
  fontSize: 22, 
  color:"#006600",
  textAlign: "center" ,
  marginVertical: 240,
  marginBottom: 5,
},
 
 login__buttonText:{
    fontWeight:"bold",
    fontSize: 22, 
    color: "#00FFFF",
    width: screen.width * 0.60,
    height: screen.width * 0.10, 
    textAlign: "center" ,
    borderRadius: 10,
    marginVertical: 20, 

 }
    
 
 
});
//
export default function VisitasSolicitadas(props) {

    const [user,setUser]=useState(null);
    const [url, setUrl] = useState('http://192.168.15.200:3000/cadastroUsuario');
    const [go, setGo] = useState(false);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            //setUser(json.name);
        }
        getUser();
    },[]);

    //
    if (go == false) {
        return (
           
          <View style={styles.container}> 
          <Text style={styles.Text}>Solicite visitas aqui</Text>
          
          <View style={styles.text2}>
          <Text style={styles.text2}></Text>      

          <Text style={styles.text2}> Visitas: SEGUNDA à QUINTA.</Text>
          <Text style={styles.text2}></Text> 
 
          <Text style={styles.text2}>Agende 2 dias antes</Text>
          <Text style={styles.text2}></Text> 

          <Text style={styles.text2}>Confirmação por e-mail</Text> 

          </View>

           <View style={{marginTop:20,marginLeft:90,marginRight:90,padding:40}}>
             <Button
               onPress={() => setGo(true)}
               title="Entrar"
              />           
             </View>
             </View>
              
    );
} else {
    //

return (
    
        <WebView
          source={{ uri: url }}
          style={{ marginTop: 20 }}

        />
      );
    }
  }






/*import React, {useState,useEffect} from 'react'; 
import { TouchableOpacity, KeyboardAvoidingView, View, Button, TextInput, Text,StyleSheet } from "react-native";
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.blue,
        flex: 1,
        justifyContent: "center"    
     },
        
  
     textHeader: {
         color: colors.blue,
         backgroundColor: colors.offWhite,
         marginVertical: 20,
         fontWeight: "bold",
         fontSize: 25,
         textAlign: "center",
          
     },
     textInput: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 20,
      //backgroundColor: colors.,
      marginVertical: 5,
      textAlign: "left" ,
      //paddingBottom: 300,
      //padding: 300 
  },
     
     button: {
        textAlign: "center",
        fontSize: 20,
        color: colors.darkGreen,
        marginVertical: 30,
        //paddingBottom: 15,
        //paddingTop: 90, 
        
     }  
       
  });

 export default function CadastroVisita()  
 {
//const CadastorVisita = ()=> {
const [name, setName] = useState(null); 
const [address, setAddress] = useState(null); 
const [description, setDescription] = useState(null); 
const [date, setDate] = useState(null); 
const [time, setTime] = useState(null); 
const [age, setAge] = useState(null); 
const [email, setEmail] = useState(null); 

//envio do formulário de cadastro de visita
 async function sendForm()
  {
    let response= await fetch('http://192.168.15.200:3000/cadastro',{
     method: 'POST',
     headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name,
       address,
       description, 
       date,
       time,
       age,
       email
     }) 
    });
    let json = await response.json();
    if(json === 'error'){
      window.alert('Formulário incompleto!');
    }else{
      window.alert('Solicitação de visita enviada com sucesso!');
    }
    //setTimeout(()=>{
      //  setDisplay('none');
   // },5000);
   // }
  
  
}
      
    return (     
       
        <KeyboardAvoidingView> 
          <View style={styles.backgroundColor}>          
            <Text style={styles.textHeader}>Solicitar visita: </Text>
            <View>        
            <TextInput style={styles.textInput}value={name}placeholder= 'Nome:' onChangeText={text=>setName(text)}/>
            <TextInput style={styles.textInput}value={address}placeholder= 'Endereço:' onChangeText={text=>setAddress(text)}/>
            <TextInput style={styles.textInput}value={description}placeholder= 'Motivo:' onChangeText={text=>setDescription(text)}/>
            <TextInput style={styles.textInput}value={date}placeholder= 'mês/dia/ano:'onChangeText={text=>setDate(text)}/>
            <TextInput style={styles.textInput}value={time}placeholder= 'Horário: (00:00)' onChangeText={text=>setTime(text)}/>
            <TextInput style={styles.textInput}value={age}placeholder= 'Idade:' onChangeText={text=>setAge(text)}/>
            <TextInput style={styles.textInput}value={email}placeholder= 'Email:' onChangeText={text=>setEmail(text)}/> 
        </View>
        <View>
        <TouchableOpacity onPress={()=>sendForm()}>
        <Text style={styles.button}>Enviar</Text>            
        </TouchableOpacity>   
        </View>
        </View>
      </KeyboardAvoidingView>
      
  
  );
 }
 */
// }