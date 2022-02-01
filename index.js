import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Fontisto, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Board from './screens/Board';
import Profile from './screens/Profile';
import StartScreen from './screens/StartScreen';
import PhotoScreen from './screens/PhotoScreen';
import VideoScreen from './screens/VideoScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import AccountScreen from './screens/AccountScreen';
import CommunityScreen from './screens/CommunityScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CommunicationsStack = createStackNavigator();
const AccountsStack = createStackNavigator();



function AccountStack()
{
  return (
    <AccountsStack.Navigator screenOptions={{headerShown: false}}>
      <AccountsStack.Screen name="Acct" component={AccountScreen}/>
    </AccountsStack.Navigator>
  );
}


function CommunityStack()
{
  return (
    <CommunicationsStack.Navigator screenOptions={{headerShown: false}}>
      <CommunicationsStack.Screen name="Board" component={Board}/>
      <CommunicationsStack.Screen name="Profile" component={Profile}/>
    </CommunicationsStack.Navigator>
  );
}


function AppTabs()
{
  return (
    <Tab.Navigator 
    initialRouteName="Community" 
    tabBarOptions={{activeBackgroundColor:'dodgerblue', 
    activeTintColor:'white', 
    inactiveBackgroundColor:'dodgerblue', 
    inactiveTintColor:'white', 
    style: {position:'absolute', bottom:0, height:70, elevation:40},
    showLabel:false}} 
    backBehavior='initialRoute'>
      <Tab.Screen name="Photo" component={PhotoScreen} options={{tabBarIcon:(focused) => <AntDesign name="picture" size={22} color="#eee" />}} />
      <Tab.Screen name="Video" component={VideoScreen} options={{tabBarIcon:(focused) => <AntDesign name="videocamera" size={22} color="#eee" />}} />
      <Tab.Screen name="Community" component={CommunityStack} options={{tabBarIcon:(focused) => <MaterialCommunityIcons name="campfire" size={45} color="#eee" />}} />
      <Tab.Screen name="Exchange" component={CommunityScreen} options={{tabBarIcon:(focused) => {
        const image = focused
        ? "cards"
        : "cards-outline"
          return (<MaterialCommunityIcons name={image} size={27} color="#eee" />);
        

      }, tabBarVisible:false}} />
      <Tab.Screen name="Account" component={AccountStack} options={{tabBarIcon:(focused) => <MaterialIcons name="person-pin-circle" size={22} color="#eee" />}} />
    </Tab.Navigator>
  );
}


function index()
{
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;