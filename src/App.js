import React from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, { MegaSena } from './componentes/Mult';

export default class App extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <Simples texto='Flexível'></Simples>
          <ParImpar numero={30}></ParImpar>
          <Inverter texto='React Nativo!'/>
          <MegaSena numero={9}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});