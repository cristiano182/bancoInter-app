
import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, Button, View } from "react-native"


export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pressStatus: false
        }
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }

    render() {
        return (


            
            <TouchableHighlight
                onPress={() => { this.props.rota.navigation.navigate(this.props.rotaName) }}
                underlayColor="gray"
                style={this.state.pressStatus ? styles.buttonPress : styles.button}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                onHideUnderlay={this._onHideUnderlay.bind(this)}>
                <View style={{ padding: 0, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Text style={{ color: "#ddd", padding: 0, margin: 0, marginRight: 50, marginLeft: 21 }}>IC</Text>
                    <Text style={{ color: "#ddd", padding: 0, margin: 0 }}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>



        );
    }
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
    },
    buttonPress: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderRightColor: "#f96502",
        borderRightWidth: 5
    },
});

