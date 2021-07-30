import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  const title = 'Ficha Criminal';
  const list = new Array(5).fill('A preencher');

  const title2 = 'Complemento';
  const list2 = new Array(3).fill('A fazer');

  return (
    <ScrollView style={style.profile}>
      <Header />
      <Card title={title} list={list} />
      <Card title={title2} list={list2} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  profile: {
    backgroundColor: '#808080',
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
