
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import { TouchableOpacity, Image } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/login'
import ReceberQRCODE from '../screens/receber/index'
import PagarQRCODE from '../screens/pagar/index'
import Home from '../screens/home/index'
import Transferencia from '../screens/transferencia/index'
import Menu from '../screens/menu'

const Main = createStackNavigator({
  Home: Home,
  Transferencia: Transferencia,
},
  {
    defaultNavigationOptions:
      ({ navigation }) => ({
        headerStyle: { backgroundColor: "#f96502" },
        title: navigation.state.routeName === 'Home' ? 'Conta digital' : navigation.state.routeName,
        headerTintColor: "white",
        headerRight: (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.toggleDrawer()}>
            <Icon name='bars' size={24}  color={'white'}/>
          </TouchableOpacity>
        )
      })
  }
);
const Drawer = createDrawerNavigator(
  {
    Home: Main,
  },
  {
    drawerPosition: "right",
    drawerWidth: 340,
    contentComponent: Menu,
  }
);
const AppStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  ReceberQRCODE: {
    screen: ReceberQRCODE,
  },
  PagarQRCODE: {
    screen: PagarQRCODE,
    navigationOptions:
      ({ navigation }) => ({
        headerStyle: { backgroundColor: '#2b2929' },
        title: 'Ler  QR Code',
        headerTintColor: "white",
      })
  },
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      header: null,
    }
  }
});
export const AppContainer = createAppContainer(AppStack);
