import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial

    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 });
        //setState serve para mudar o estado de um atributo, e a função vem da herança Component do react native
    }

    limpar = () => {
        this.setState({numero: this.props.numeroInicial});
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}