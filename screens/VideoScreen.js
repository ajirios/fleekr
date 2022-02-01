import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, Ionicons, Entypo, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';


export default class VideoScreen extends Component
{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.searchbar}>
                      <Text style={{fontSize:20, fontWeight: 'bold', color: 'black'}}>Video</Text>
                    </View>
                </View>
                <View style={styles.body}>
                  <AntDesign name="videocamera" size={80} color="#aaa" />
                  <Text style={{marginVertical:30}}>Upload a video.</Text>
                  <TouchableOpacity style={{width:300, height:60, backgroundColor:'dodgerblue', justifyContent:'center', alignItems:'center', elevation:30}}>
                    <Text style={{color:'white'}}>Upload Video</Text>
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