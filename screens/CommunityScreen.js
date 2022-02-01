import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign, Entypo, Fontisto, Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';


export default class CommunityScreen extends Component
{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity><MaterialCommunityIcons name="campfire" size={31} color="dodgerblue" /></TouchableOpacity>
                <TouchableOpacity><MaterialCommunityIcons name="star-four-points" size={31} color="gray" /></TouchableOpacity>
                <TouchableOpacity><Ionicons name="chatbubble" size={31} color="gray" /></TouchableOpacity>
                <TouchableOpacity><MaterialIcons name="date-range" size={31} color="gray" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="sound-mix" size={31} color="gray" /></TouchableOpacity>
                </View>
                <View style={styles.body}>
                  <TouchableOpacity 
                    onPress={() => {alert("Swipe left.")}} style={{width:420, height:640, borderRadius:20, justifyContent:'center', alignItems:'center', elevation:30}}>
                    <Image style={{width:420, height:640, borderRadius:20}} source={require('../fleeks/curly.jpg')} resizeMode='cover' />
                  </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <View style={styles.clicker}>
                        <Ionicons name="return-up-back-sharp" size={21} color="dodgerblue" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.clicker}>
                        <Ionicons name="close" size={21} color="pink" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.clicker}>
                        <MaterialCommunityIcons name="heart" size={47} color="red" />
                        </View>
                    </TouchableOpacity>
                   {/* <TouchableOpacity>
                        <View style={styles.clicker}>
                        <MaterialCommunityIcons name="note-multiple" size={21} color="dodgerblue" />
                        </View>
                   </TouchableOpacity> */}
                    <TouchableOpacity>
                        <View style={styles.clicker}>
                        <Fontisto name="date" size={21} color="pink" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.clicker}>
                        <MaterialCommunityIcons name="party-popper" size={21} color="pink" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 30
    },
    footer: {
        flex: 1,
        width: '100%',
        marginHorizontal: '0%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    body: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clicker: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 40
    }
});