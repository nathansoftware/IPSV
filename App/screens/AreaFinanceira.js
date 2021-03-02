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

     import colors from '../constants/colors';


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
     color: "#2F4F4F",
     fontSize: 20,
     textAlign: "center" ,
     paddingBottom: 10,
     paddingTop: 10 
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
            //setUser(json.name);
        }
        getUser();
    },[]);

    //
    
        return (  
          
                            
    <View style={styles.container}>
    <Text style={styles.Text}>Doações, Dízimos e Ofertas.</Text>
    <Text style={styles.text}>Doe para:</Text>

    <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('DoacaoIgreja')}>
    <Text style={styles.login__buttonText}>Igreja</Text>
    </TouchableOpacity>
   <Text></Text>
   <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('DoacaoGeracao180')}>
    <Text style={styles.login__buttonText}>Geração 180°</Text>
    </TouchableOpacity>
    <Text></Text>
    <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('DoacaoMissoes')}>
    <Text style={styles.login__buttonText}>Missões</Text>
    </TouchableOpacity>
    <Text></Text>
    <TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('DoacaoSopao')}>
    <Text style={styles.login__buttonText}>Sopão</Text>
    </TouchableOpacity>
</View>
 
 );

}

