import React, { Component, useState } from 'react';
import {StyleSheet, Dimensions, FlatList, Text, View, Image, TextInput, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, Ionicons, Entypo, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';

const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const WIDTH = (windowWidth - 6) / 3;

export default function Board(props)
{
  

  const [people, setPeople] = useState([
    { name: 'Solon', photo: require('../fleeks/aa.jpg'), key: '1' },
    { name: 'Rui', photo: require('../fleeks/african.jpg'), key: '2' },
    {name: "Snart", photo: require('../fleeks/alone.jpg'), key: "3"},
    {name: "Sean", photo: require('../fleeks/angolan.jpg'), key: "4"},
    {name: "Luigi", photo: require('../fleeks/attractive.jpg'), key: "5"},
    {name: "Bernstein", photo: require('../fleeks/bb.jpg'), key: "6"},
    {name: "Arnolde", photo: require('../fleeks/beautiful.jpg'), key: "7"},
    {name: "Jared", photo: require('../fleeks/black-woman.jpg'), key: "8"},
    {name: "Pearson", photo: require('../fleeks/cc.jpg'), key: "9"},
    {name: "Seabass", photo: require('../fleeks/curly.jpg'), key: "10"},
    {name: "Carmen", photo: require('../fleeks/dd.jpg'), key: "11"},
    {name: "June", photo: require('../fleeks/ee.jpg'), key: "12"},
    {name: "Minna", photo: require('../fleeks/ff.jpg'), key: "13"},
    { name: 'Rui', photo: require('../fleeks/gg.jpg'), key: '14' },
    {name: "Snart", photo: require('../fleeks/hair.jpg'), key: "15"},
    {name: "Sean", photo: require('../fleeks/hh.jpg'), key: "16"},
    {name: "Luigi", photo: require('../fleeks/ii.jpg'), key: "17"},
    {name: "Bernstein", photo: require('../fleeks/jj.jpg'), key: "18"},
    {name: "Arnolde", photo: require('../fleeks/kk.jpg'), key: "19"},
    {name: "Jared", photo: require('../fleeks/ll.jpg'), key: "20"},
    {name: "Pearson", photo: require('../fleeks/makeup.jpg'), key: "21"},
    {name: "Seabass", photo: require('../fleeks/mm.jpg'), key: "22"},
    {name: "Carmen", photo: require('../fleeks/model.jpg'), key: "23"},
    {name: "June", photo: require('../fleeks/nn.jpg'), key: "24"},
    {name: "Rosie", photo: require('../fleeks/rosie.jpg'), key: "25"},
    {name: "Emily", photo: require('../fleeks/smile.jpg'), key: "26"},
    {name: "Minna", photo: require('../fleeks/people.jpg'), key: "27"}
  ]);

      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:36, fontWeight: 'bold', color: 'dodgerblue'}}>cuckatoo.</Text>
            <View style={styles.searchbar}>
            <TouchableOpacity><AntDesign name="search1" size={22} color="dodgerblue" /></TouchableOpacity>
            <TextInput style={{width: '74%', height: 44, borderRadius: 2, paddingLeft: 10, fontSize:17, backgroundColor: '#eee', color: '#555'}} placeholder="Search campfire stories" placeholderTextColor="#555" />
            <TouchableOpacity><Entypo name="sound-mix" size={22} color="dodgerblue" /></TouchableOpacity>
            </View>
            <TouchableOpacity><Text style={{fontSize:12, fontWeight: 'bold', color: '#555'}}>Lagos, Nigeria</Text></TouchableOpacity>
          </View>
          <View style={styles.body}>
            <FlatList 
                numColumns='3'
                data={people}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => {props.navigation.navigate("Profile")}}>
                    <View style={styles.item}><ImageBackground style={{width:WIDTH, height:WIDTH}} source={item.photo} resizeMode="cover" /></View>
                  </TouchableOpacity>
                )}
              />
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header: {
    flex: 2.4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#aaa',
    elevation: 20
  },
  body: {
    flex: 8,
    paddingTop: 0,
    paddingBottom: 80
  },
  footer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    elevation: 30
  },
  item: {
    width: WIDTH,
    height: WIDTH,
    marginVertical: 1,
    marginHorizontal: 1,
    backgroundColor: '#eee',
    color: "#333"
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