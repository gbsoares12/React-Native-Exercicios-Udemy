import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        flex: 1,//Da prioridade 1 para o preenchimento restante da tela
        backgroundColor: '#bdf9ed',
        alignItems: 'center',//Alinha pela coluna (mainAcess default)
        justifyContent: 'center'//Alinha pela linha (crossAcess default)
    },
    centro: {
        flex: 2,//Da prioridade 2 (MAIS PRIORIDADE QUE O 1) para o preenchimento restante da tela, nesse exemplo centro terá 50% do tamnho da tela
        flexDirection: 'row',//Inverteu o mainAcess para linha.
        backgroundColor: '#f2f9bd',
        alignItems: 'center',//Agr ele irá alinhar pela linha, pois o flexDirection (mainAcess) é row.
        justifyContent: 'space-between',
        paddingHorizontal: 15, //Coloca padding no inicio e no final da linha, assim como o justifyContent: 'space-around';

        
    },
    sul: {
        flex: 1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50,
    }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo/>
            </View>
            <View style={styles.centro}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            <View style={styles.sul}>
                <Circulo/>
            </View>
        </View>
    )
}