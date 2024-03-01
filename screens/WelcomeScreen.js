import * as React from 'react';
import { View, Image, Text,Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handlePress = () =>{navigation.navigate('Home')}
  // Add welcome screen code here.
  return (<View style={styles.container}>
  <View style={styles.contentContainer}>
  
  <Image source={require('../assets/little-lemon-logo.png')} resizeMethod='resize' resizeMode='contain' style={styles.image}/>
  <Text style={styles.Text}>Little Lemon, Your local Meditterian Bistro</Text>
  </View>
  <Pressable style={styles.button} onPress={handlePress}>
  <Text style={styles.buttonText}>Newsletter</Text>
  </Pressable>
  </View>);
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image:{
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: 50
  },
  contentContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text:{
    fontSize: 16,
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#0ccc03',
    padding: 20,
    margin: 30,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})
export default WelcomeScreen;
