import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import TouchableHL from './components/touchableHL'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>

        <View style={{ borderColor: 'gray', borderBottomWidth: 1.5, flexDirection: 'row', padding: 10 }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 10, paddingRight: 10 }}>
            <Text style={{ color: "#f96502", fontSize: 20 }}>Mostrar saldo</Text>
          </View>

          <View style={{ flex: 0.6 }}>
            <TouchableHighlight
              underlayColor='#f96502'
              onPress={() => { }}
              style={{ borderColor: "#f96502", borderWidth: 1, width: '100%', borderRadius: 5, height: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Extrato</Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor='#f96502'
              onPress={() => this.props.navigation.navigate("Transferencia")} 
              style={{ borderColor: "#f96502", marginVertical: 10, borderWidth: 1, width: '100%', borderRadius: 5, height: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Transferência</Text>
            </TouchableHighlight >

            <TouchableHighlight
              underlayColor='#f96502'
              onPress={() => { }}
              style={{ borderColor: "#f96502", borderWidth: 1, width: '100%', borderRadius: 5, height: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Pagamentos</Text>
            </TouchableHighlight >
          </View>

        </View>

        <View style={{ flex: 1, height: 650, justifyContent: 'space-around', marginTop: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableHL name='INVESTIMENTOS' />
            <TouchableHL name='EMPRESTIMO' />
            <TouchableHL name='SEGUROS' />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableHL name='CARTÃO' />
            <TouchableHL name='RECARGA DE CELULAR' />
            <TouchableHL name='INTERPAG' />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableHL name='PORTABILIDADE DE SALARIO' />
            <TouchableHL name='CONSÓRCIO' />
            <TouchableHL name='CONVIDAR' />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableHL name='DEPÓSITO POR CHEQUE' />
            <TouchableHL name='DEPÓSITO POR BOLETO' />
            <TouchableHL name='CÂMBIO' />
           
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15 }}>
            <TouchableHL name='GIFT CARDS' />
          </View>
        </View>
      </ScrollView>
    );
  }
}


