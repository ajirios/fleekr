import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo, Fontisto, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';



export default class Footer extends Component

{
    render() {
        return (
            <View style={styles.footer}>
            <TouchableOpacity><MaterialIcons name="person-add-alt-1" size={25} color="#125699" /></TouchableOpacity>
              <TouchableOpacity><MaterialCommunityIcons name="hand-heart" size={25} color="#125699" /></TouchableOpacity>
              <TouchableOpacity><Entypo name="phone" size={25} color="#125699" /></TouchableOpacity>
              <TouchableOpacity><Ionicons name="chatbubble" size={25} color="#125699" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="date-range" size={25} color="#125699" /></TouchableOpacity>
            </View>
        );
    };
}



const styles = StyleSheet.create({
    footer: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'dodgerblue',
      elevation: 30
    }
  });