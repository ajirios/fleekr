import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ImageBackground} from 'react-native';


export default class Signup extends Component
{

    render () {
      return (
        <View style={styles.container}>
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../fleeks/rosie.jpg')} resizeMode='cover'>
            <View style={styles.header}>
                <Text style={{fontSize:30, fontWeight:'bold', color: 'dodgerblue'}}>Sign up.</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Age *'></TextInput>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Username *'></TextInput>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Legal name'></TextInput>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Email address *'></TextInput>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Mobile number'></TextInput>
                <TextInput style={{width:300, height:60, marginVertical:10, paddingLeft:20, backgroundColor:'#fff'}} placeholder='Password *'></TextInput>
                
                <TouchableOpacity 
                  style={{width:300, height:60, backgroundColor:'dodgerblue', justifyContent:'center', alignItems:'center', elevation:30}}>
                    <Text style={{color:'white'}}>Sign up</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>Sign up</Text>
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
      width: '90%',
      marginHorizontal: '5%',
      justifyContent: 'center',
      alignItems: 'flex-end'
  }
});