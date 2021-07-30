import React from 'react';
import {Image, Text, View} from 'react-native';

import Bane from '../../assets/Bane.jpeg';
import Joker from '../../assets/Joker.jpg';
import Penguin from '../../assets/Penguin.jpg';
import style from './style';

const Identity = ({identityIndex: index}) => {
  const photos = [Bane, Joker, Penguin];
  const names = ['Bane', 'Joker', 'Penguin'];

  return (
    <View style={style.identity}>
      <Image style={style.photo} source={photos[index]} />
      <Text style={style.name}>{names[index]}</Text>
    </View>
  );
};

export default Identity;
