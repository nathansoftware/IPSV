import React from 'react';
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
//backgroundColor: "#00a3cc",
backgroundColor:"#B0E0E6",
    flex: 1,
    justifyContent: "center",
    paddingTop: 120,
 },
    logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,

    
 },
    logoBackground: {
    width: screen.width * 0.50,
    height: screen.width * 0.50, 
    
 },
 logo: {
   position: "absolute",
   width: screen.width * 0.65,
   height: screen.height * 0.22,
   //marginVertical: 90,
   //borderRadius: 15,
  
 },
 textHeader: {
     //color: "#556B2F",
     color: "#2F4F4F",
     fontWeight: "bold",
     fontSize: 25,
     marginVertical: 10,
     paddingTop: 140, 
     paddingBottom: 50,
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
     fontSize: 15,
     textAlign: "center" ,
     paddingBottom: 10,
     paddingTop: 90 
 },

 login__button:{
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 10 ,
    marginTop: 30,
    backgroundColor:"#006600",

},
 login__buttonText:{
    fontWeight:"bold",
    fontSize: 20, 
    color: colors.offWhite,
    borderRadius: 10,


    
    
    
 },
 Text: {
    backgroundColor:"#006600",

 }
 
});

export default function Login(props)
{

    return (
<View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

 <View style={styles.logoContainer}> 
    
    <Image
     source={require('../assets/images/logo_site.png')}
      style={styles.logo}
     // resizeMode="contain"
     />
    
</View>

<Text style={styles.textHeader}>Seja bem vindo(a) ! </Text>

<View
style={styles.logoContainer}>
</View> 

<TouchableOpacity style={styles.login__button} onPress={()=>props.navigation.navigate('Home')}>
    <Text style={styles.login__buttonText}>Entrar</Text>
    </TouchableOpacity>


<Text style={styles.text}>
    {'IPSV'}
</Text>

    
</View>
);
};


