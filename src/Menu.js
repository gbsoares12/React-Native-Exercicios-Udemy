import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, { MegaSena } from './componentes/Mult';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import { Avo } from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

const AppNavigator = createDrawerNavigator({
    
    Flex: {
        screen: () => <Flex/>,
        navigationOptions: { title: 'Flex (Flex Box)' }
    },
    ListaFlex: {
        screen: () => <ListaFlex/>,
        navigationOptions: { title: 'Lista Flex (Flex Box)' }
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado/>,
        navigationOptions: { title: 'Comunicação indireta entre componentes' }
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva'/>,
        navigationOptions: { title: 'Comunicação direta entre componentes' }
    },
    Evento: {
        screen: () => <Evento/>
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19}/>,
        navigationOptions: { title: 'Validar o props'}
    },
    Plataforma: {
        screen: () => <Plataformas/>
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="oi gabriel" />
    },
    ParImpar: {
        screen: () => <ParImpar numeros={3} />,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!' />
    }
}, { drawerWidth: 300, edgeWidth: 20 });

export default createAppContainer(AppNavigator);
