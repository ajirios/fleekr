import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default class StartScreen extends Component
{

    render () {
      return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={{fontSize:55, fontWeight:'bold', color: '#fff'}}>fleekr</Text>
                <Text style={{fontSize:20, fontWeight:'bold', color: '#fff'}}>Ridesharing app</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("AppTabs")}}>
                    <Text style={{fontSize:13, fontWeight:'normal', color: '#fff'}}>GET STARTED ></Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      flex: 1
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