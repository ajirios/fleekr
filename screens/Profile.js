import React, { Component, useState } from 'react';
import {StyleSheet, Dimensions, FlatList, ImageBackground, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo, Fontisto, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';


export default function Profile(props)
{
  

  const [people, setPeople] = useState([
    { name: 'beverly solon', photo: require('../fleeks/aa.jpg'), key: '1' },
    { name: 'muningya chipui', photo: require('../fleeks/african.jpg'), key: '2' },
    {name: "eve hart", photo: require('../fleeks/alone.jpg'), key: "3"},
    {name: "jean congo", photo: require('../fleeks/angolan.jpg'), key: "4"},
    {name: "helene luigi", photo: require('../fleeks/attractive.jpg'), key: "5"},
    {name: "joann muwangi", photo: require('../fleeks/bb.jpg'), key: "6"},
    {name: "jen arnolds", photo: require('../fleeks/beautiful.jpg'), key: "7"},
    {name: "pauline bascches", photo: require('../fleeks/black-woman.jpg'), key: "8"},
    {name: "vera okhiyamen", photo: require('../fleeks/cc.jpg'), key: "9"},
    {name: "queen bernols", photo: require('../fleeks/curly.jpg'), key: "10"},
    {name: "carmen frontes", photo: require('../fleeks/dd.jpg'), key: "11"},
    {name: "june khiyalo", photo: require('../fleeks/ee.jpg'), key: "12"},
    {name: "lizzy varnes", photo: require('../fleeks/ff.jpg'), key: "13"},
    { name: 'kemi olusola', photo: require('../fleeks/gg.jpg'), key: '14' },
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
              <TouchableOpacity onPress={() => {props.navigation.goBack()}}>
                <AntDesign name="arrowleft" size={22} color="#2470cf" />
                </TouchableOpacity>
              <TouchableOpacity><Entypo name="sound-mix" size={22} color="green" /></TouchableOpacity>
            </View>
            <View style={styles.body}>
              <FlatList 
                numColumns='1'
                data={people}
                renderItem={({item}) => (
                  
                  <View style={styles.item}>
                    <View style={styles.name}>
                      <Text style={{fontSize:13, fontWeight:'bold'}}>{item.name} - bevs</Text>
                      <Text style={{fontSize:13, fontWeight:'bold', color:'#aaa'}}>Ebute-meta, Lagos, Nigeria</Text>
                    </View>
                    
                    <View style={styles.picture}>
                    <TouchableOpacity onPress={() => {alert('Upgrade from Spark to Lite plan for just $1.99 monthly to enable personal communications. Reset to FREE anytime.')}}>
                      <ImageBackground style={{width:'100%', height:450}} source={item.photo} resizeMode="cover" />
                      </TouchableOpacity>
                      </View>
                    
                    <View style={styles.communications}>
                      <TouchableOpacity><SimpleLineIcons name="fire" size={22} color="#333" /></TouchableOpacity>
                      <TouchableOpacity onPress={() => {alert('Upgrade from Spark to Lite plan for just $1.99 monthly to enable personal communications. Reset to FREE anytime.')}}>
                        <Ionicons name="chatbubble-outline" size={22} color="#333" />
                        </TouchableOpacity>
                      <TouchableOpacity onPress={() => {alert('Upgrade from Spark to Candle plan for just $9.99 to enable one-month communications.')}}>
                        <Fontisto name="date" size={22} color="#333" />
                        </TouchableOpacity>
                    </View>
                    </View>
                  
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    marginHorizontal: '4%',
    borderBottomColor: '#aaa',
    elevation: 50
  },
  body: {
    flex: 8,
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
    width: '100%',
    height: 560,
    marginVertical: 10,
    marginHorizontal: '0%',
    backgroundColor: '#fff',
    color: "#333"
  },
  name: {
    width: '90%',
    height: 50,
    marginVertical: 1,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: "#333"
  },
  picture: {
    width: '100%',
    height: 450,
    marginVertical: 1,
    marginHorizontal: '0%',
    backgroundColor: '#eee',
    color: "#333"
  },
  communications: {
    width: '45%',
    height: 50,
    marginVertical: 1,
    marginLeft: '5%',
    marginRight: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: "#333"
  }
});