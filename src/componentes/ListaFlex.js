import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 9.6 },
    { id: 3, nome: 'Bia', nota: 2.3 },
    { id: 4, nome: 'Claudia', nota: 4.5 },
    { id: 5, nome: 'Roberto', nota: 2.6 },
    { id: 6, nome: 'Rafael', nota: 6.7 },
    { id: 7, nome: 'Guilherme', nota: 7.2 },
    { id: 8, nome: 'Rebeca', nota: 8.5 },
    { id: 9, nome: 'Tobias', nota: 5.4 },

    { id: 10, nome: 'João', nota: 9.2 },
    { id: 11, nome: 'Ana', nota: 9.6 },
    { id: 12, nome: 'Bia', nota: 2.3 },
    { id: 13, nome: 'Claudia', nota: 4.5 },
    { id: 14, nome: 'Roberto', nota: 2.6 },
    { id: 15, nome: 'Rafael', nota: 6.7 },
    { id: 16, nome: 'Guilherme', nota: 7.2 },
    { id: 17, nome: 'Rebeca', nota: 8.5 },
    { id: 18, nome: 'Tobias', nota: 5.4 },
    { id: 19, nome: 'João', nota: 9.2 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Felx
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

}

export const Aluno = (props) => {
    return (
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{ fontWeight: 'bold' }}>
                Nota: {props.nota}
            </Text>
        </View>
    )
}

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}></FlatList>
        </ScrollView>
    )
    //O keyExtractor é necessário pois retorna corretamente os itens o _ é o obj item e o index, é o index do obj, mas não o id dentro do obj
}