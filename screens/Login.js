import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from 'react-native';


export default class Login extends Component
{

    render () {
      return (
        <View style={styles.container}>
            <ImageBackground style={{width:'100%', height:'100%'}} source={require('../fleeks/jj.jpg')} resizeMode='cover'>
            <View style={styles.header}>
                <Text style={{fontSize:30, fontWeight:'bold', color: 'dodgerblue'}}>Log in.</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={{width:350, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Email address'></TextInput>
                <TextInput style={{width:350, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Password' secureTextEntry></TextInput>
                <TouchableOpacity 
                  style={{width:350, height:60, backgroundColor:'dodgerblue', justifyContent:'center', alignItems:'center', elevation:30}}>
                    <Text style={{color:'white'}}>Login</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={{color:'white'}}>By logging in, I hereby agree to abide by the community guidelines as outlined in the Terms of Use provided in this application.</Text>
            </View>
            </ImageBackground>
        </View>
      );
    };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  body: {
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center'
  },
  footer: {
      flex: 1,
      width: '80%',
      marginHorizontal: '10%',
      justifyContent: 'center',
      alignItems: 'flex-end'
  }
});