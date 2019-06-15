
import React, { Component } from 'react';

import { TouchableOpacity, Text, ScrollView, View } from "react-native"
import Item from '../menu/components/index'


export default class Menu extends Component {

  constructor(props){
    super(props);
    this.state={

      pressStatus: false
    }
  }

  componentDidMount(){
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#1e1d1d' }}>

          <View style={{flex: 1, borderBottomWidth: 2, borderColor: 'gray', padding: 15 }}>
          <Text style={{color: '#ddd', fontSize: 16,}}>
            Tony Stark
          </Text>
          <Text style={{color: '#ddd', fontSize: 16}}>
            Conta: 228934-4   Agência: 0001-9
          </Text>
          </View>



        <Item name="Inicio" rota={this.props} rotaName={'Home'}/>
        <Item name="Deposito por Boleto"/>
        <Item name="i-Safe"/>
        <Item name="Deposito por Cheque "/>
        <Item name="InterPag"/>
        <Item name="Conta Digital"/>
        <Item name="Debito Automatico"/>
        <Item name="Pagamentos"/>
        <Item name="Transferencias"  rota={this.props} rotaName={'Transferencia'} />
        <Item name="Agendamentos"/>
        <Item name="Cartões"/>
        <Item name="Recarga Celular"/>
        <Item name="Protabilidade de Salario"/>
        <Item name="Investimentos"/>
        <Item name="InterSaque"/>
        <Item name="Terminais Proximos" rota={this.props} rotaName={'terminaisProximos'}/>
        <Item name="Empréstimos"/>
        <Item name="Seguros"/>
        <Item name="Consórcio"/>
        <Item name="Câmbio"/>
        <Item name="Atualização Cadastral"/>
        <Item name="Conta digital MEI"/>
        <Item name="Gift Cards"/>
        <Item name="Gerenciar Dispositivos"/>
        <Item name="Notificações"/>
        <Item name="Alterar Senha"/>
        <Item name="Ajuda"/>
        <Item name="Sair" rota={this.props} rotaName={'Logout'}/>
        <Item name="Versão 7.24"/>


      </ScrollView>
    );
  }
}