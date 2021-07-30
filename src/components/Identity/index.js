import React from 'react';
import {Image, Text, View} from 'react-native';

import Bane from '../../assets/Bane.jpeg';
import Joker from '../../assets/Joker.jpg';
import Penguin from '../../assets/Penguin.jpg';
import Deathstroke from '../../assets/Deathstroke.webp';
import Copperhead from '../../assets/Copperhead.jpg';
import style from './style';

const Identity = ({index}) => {
  const photos = [Bane, Joker, Penguin, Deathstroke, Copperhead];
  const names = ['Bane', 'Coringa', 'Pinguim', 'Deathstroke', 'Copperhead'];

  return (
    <View style={style.identity}>
      <Image style={style.photo} source={photos[index]} />
      <Text style={style.name}>{names[index]}</Text>
    </View>
  );
};

export default Identity;
