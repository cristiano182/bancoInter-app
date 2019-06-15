import React, { Component } from 'react';
import { Text, View} from 'react-native';

export default class Transferencia extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1e1d1d', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: 'white'}}>Transferencia page</Text>
      </View>
    );
  }
}

