import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class TouchableHL extends Component {
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
                onPress={() => { }}
                underlayColor="transparent"
                style={this.state.pressStatus ? styles.buttonPress : styles.buttonUnPress}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                onHideUnderlay={this._onHideUnderlay.bind(this)}
            >
                <Text style={this.state.pressStatus ? styles.textButtonPress : styles.textButtonUnPress}>{this.props.name}</Text>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    buttonUnPress: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        width: 110,
        height: 110
    },
    buttonPress: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f96502',
        width: 110,
        height: 110
    },
    textButtonUnPress:{
        color: 'gray',
        fontSize: 12 
    },
    textButtonPress: {
        color: '#f96502',
        fontSize: 13
    }
});

