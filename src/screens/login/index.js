import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1e1d1d', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
        <View style={{ paddingTop: 18 }}>
          <Image source={require('../../assets/inter.png')} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 25 }}>
          <View>
            <Text style={{ color: "gray", fontWeight: 'bold', marginBottom: 5 }}>CONTA</Text>
            <Text style={{ color: 'white' }}>2462245-6</Text>
          </View>
          <View style={{ paddingTop: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <TouchableHighlight style={{ marginBottom: 10, backgroundColor: '#2b2929', height: 35, width: 100, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Trocar conta</Text>
            </TouchableHighlight>
            <Text style={{ color: 'gray', textDecorationLine: 'underline' }}>Esqueci minha senha</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "#f96502", justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: 250, height: 40 }} onPress={() => this.props.navigation.navigate('Drawer')}>
            <Text style={{ color: 'white' }}>ACESSAR</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#2b2929', width: '100%', justifyContent: 'center', paddingBottom: 10 }}>
          <View style={{ flexDirection: 'row', marginLeft: 25, justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Inter</Text>
            <Text style={{ color: 'white', fontSize: 25, fontFamily: "Roboto-Light" }} >pag</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15 }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'white', width: 150, height: 40 }} activeOpacity={1} onPress={() => this.props.navigation.navigate('PagarQRCODE')}>
              <Text style={{ color: "gray" }}>PAGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'white', width: 150, height: 40 }} activeOpacity={1} onPress={() => this.props.navigation.navigate('ReceberQRCODE')}>
              <Text style={{ color: "gray" }} >RECEBER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

