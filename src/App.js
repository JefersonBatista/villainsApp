import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={style.profile}>
      <Header />
    </SafeAreaView>
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
