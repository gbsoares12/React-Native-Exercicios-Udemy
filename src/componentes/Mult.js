import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default Inverter = (props) => {
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = (props) => {
    const [min, max] = [1, 60];//Está declarando e inicializando as dua variáveis.
    const numeros = Array(props.numeros || 6).fill(0);//Sempre coloca uma variavel antes do || e um numero caso a variável não contenha nada o numero assume.

    //Gera um numero aleatório entre o Max e Min.
    for(let i = 0; i < numeros.length; i++){
        let novo = 0;
        while (numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min)) + min;
        }
        numeros[i] = novo;
    }

    numeros.sort((a,b) => a - b)//Ordenar de forma crescente numeros de um array.
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}
