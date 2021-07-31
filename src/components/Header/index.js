import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Identity from '../Identity';
import style from './style';

const Header = ({index, prev, next}) => {
  return (
    <View style={style.header}>
      <TouchableOpacity style={style.button} onPress={prev}>
        <Icon name="angle-left" color="white" size={40} />
      </TouchableOpacity>
      <Identity index={index} />
      <TouchableOpacity style={style.button} onPress={next}>
        <Icon name="angle-right" color="white" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
