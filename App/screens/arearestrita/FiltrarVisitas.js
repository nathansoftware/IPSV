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

     import colors from '../../constants/colors';


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

text2: {
  color: colors.black,
  fontSize: 18,
  textAlign: "center" ,
  fontWeight:"bold",
  //paddingBottom: 10,
  //paddingTop: 100 
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
    const [url, setUrl] = useState('http://192.168.15.200:3000/list');
    const [go, setGo] = useState(false);

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
    if (go == false) {
        return (
            
          <View style={styles.container}> 
          <Text style={styles.Text}>Buscar pedidos de visita</Text> 
          <Text style={styles.text2}></Text> 
          <Text style={styles.text2}>Insira o e-mail </Text>
          <Text style={styles.text2}>encontre a visita.</Text>
           

         


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
