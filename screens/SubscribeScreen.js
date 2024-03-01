import {useState} from 'react'
import { View, Text, TextInput, Pressable, Image,  StyleSheet, Alert } from 'react-native';
import { validateEmail } from '../utils/index';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const valid = validateEmail(email)
  const handlePress = ()=>{
 Alert.alert("Thanks for subscribing, stay tuned!");
  }
  // Add subscribe screen code here
  return (<View style={styles.container}>
  <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} resizeMode="contain"/>
  <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
  <TextInput placeholder="Type your email" style={styles.input} value={email} onChangeText={(text)=> setEmail(text)}/>
  <Pressable style={[styles.button, {backgroundColor: valid ? '#0ccc03' : 'gray'}]}
  onPress={valid ? handlePress : ()=>{}}
  >
  <Text style={styles.buttonText}>Sign up</Text>
  </Pressable>
  
  
  
  
  </View>);
};
const styles = StyleSheet.create({
container:{
  flex: 1,
  flexDirection: 'column'
},
image:{
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center'
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  input:{
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20
  },
  button:{
    alignItems: 'center',
    padding: 20,
    margin: 30,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})
export default SubscribeScreen;
