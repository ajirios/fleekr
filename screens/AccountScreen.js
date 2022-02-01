import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, Ionicons, Entypo, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';


export default class AccountScreen extends Component
{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.searchbar}>
                      <Text style={{fontSize:20, fontWeight: 'bold', color: 'black'}}>Account</Text>
                    </View>
                </View>
                <View style={styles.body}>
                  <Ionicons name="person-outline" size={80} color="#aaa" />
                  <Text style={{marginVertical:30, width:'75%', textAlign:'center', textAlignVertical:'top', lineHeight:25}}>Create a Cuckatoo account to browse people and begin a fling.</Text>
                  <TouchableOpacity 
                  onPress={() => {this.props.navigation.navigate("Signup")}}
                  style={{width:300, height:60, backgroundColor:'dodgerblue', justifyContent:'center', alignItems:'center', elevation:30}}>
                    <Text style={{color:'white'}}>Sign up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={() => {this.props.navigation.navigate("Login")}}
                  style={{width:300, height:190, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'dodgerblue', fontSize:14, fontWeight:'bold'}}>Log in to your Cuckatoo account</Text>
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
      backgroundColor: '#fff'
    },
    header: {
      flex: 0.6,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 20
    },
    body: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fafafa'
    },
    searchbar: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white'
    }
  });