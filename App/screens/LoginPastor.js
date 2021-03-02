import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { 
        KeyboardAvoidingView,
        Platform,
        View, 
        StyleSheet,
        StatusBar,
        Image,
        Dimensions, 
        Text,
        TextInput,
        Button       
     } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
         
import colors from '../constants/colors';

const screen  = Dimensions.get('window');
const styles = StyleSheet.create({
container:{
//backgroundColor: colors.blue,
//backgroundColor: "#00a3cc",
backgroundColor:"#B0E0E6",
    flex: 1,
    justifyContent: "center" ,
    paddingTop: 28,   
 },
    logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    marginVertical: 1,


 },
    logoBackground: {
    width: screen.width * 0.40,
    height: screen.width * 0.28, 
    
 },
 logo: {
   position: "absolute",
   width: screen.width * 0.90,
   height: screen.height * 0.20,
  // paddingTop: 50,
  // marginVertical: 20

  
 },
    textHeader: {
     color: "#2F4F4F",
     fontWeight: "bold",
     fontSize: 18,
     marginVertical: 2,
     marginBottom: 1,
     textAlign: "center",
      
 },
 TextInput: {
    color: colors.offWhite,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left" ,
    marginVertical: 1, 
 },
 
 button: {
    textAlign: "center",
    fontSize: 10,
    paddingTop: 10,
    marginBottom: 1,
    
    
 },

 text: {
     color: "#2F4F4F",
     fontSize: 15,
     textAlign: "center" ,
     paddingBottom: 99,
     paddingTop: 1,

 },
 login__msg: (text='none')=>({
    fontWeight:"bold",
    fontSize: 20,
    color: "#800000",
    //padding: 7,
    //marginTop: 2,
    marginBottom: 1,
    textAlign: "center",
    display: text
}),
login__form:{
    width: "99%",
    padding: "10%"
    
    
}, 
login__input:{
    backgroundColor: "#f0f0f0",
    fontSize: 20,
    padding: 1,
    marginBottom: 8,
    
    
    
},
login__button:{
    padding: 4,
    backgroundColor: "#4f6d7a",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor:"#006600",
    marginVertical: 2,

    
},


login__buttonText:{
    fontWeight:"bold",
    fontSize: 18, 
    color: colors.offWhite,
    marginVertical: 1,
    marginVertical: 1,



}


 
 
});

export default function Login({navigation})
{
    const[display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

    //
    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch('http://192.168.15.200:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        //console.log(json);
            if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
            setDisplay('none');
            },5000);
          await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('TelaGerenciamentoPastor');
        
      }
    }

    //
return (
    

<View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    <Text style={styles.textHeader}></Text>
    <Text style={styles.textHeader}></Text>


<View style={styles.logoContainer}>
    <Image
     source={require('../assets/images/logo_site.png')}
     />
    
</View>


<Text style={styles.textHeader}>Área do Pastor ! </Text>


<View 
style={styles.logoContainer}>
</View> 



    <Text style={styles.login__msg(display)}>Usuário ou senha inválidos!</Text>


<KeyboardAvoidingView  behavior={Platform.OS == 'ios' ? 'padding' : 'height'}style={[StyleSheet.container]}>
<View style={[styles.login__form]}>
    <TextInput style={styles.login__input} placeholder='Login:' onChangeText={text=>setUser(text)} secureTextEntry={true}/>
    <TextInput style={styles.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
    <TouchableOpacity style={styles.login__button} onPress={()=>sendForm()}>
    <Text style={styles.login__buttonText}>Entrar</Text>
    </TouchableOpacity>
</View>
</KeyboardAvoidingView>


{/*<Button
title="Entrar"
onPress={() =>props.navigation.navigate('Home')} />
*/}
<Text style={styles.text}>
    {'IPSV'}
</Text>

    
</View>

);
};


