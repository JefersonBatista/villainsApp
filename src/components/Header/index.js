import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Identity from '../Identity';
import style from './style';

const Header = () => {
  const [identityIndex, setIdentityIndex] = useState(0);
  const n = 5;

  function handleButtonPrev() {
    // An always positive division remainder would help here, JavaScript.
    setIdentityIndex((((identityIndex - 1) % n) + n) % n);
  }

  function handleButtonNext() {
    // An always positive division remainder would help here, JavaScript.
    setIdentityIndex((((identityIndex + 1) % n) + n) % n);
  }

  return (
    <View style={style.header}>
      <TouchableOpacity style={style.button} onPress={handleButtonPrev}>
        <Icon name="angle-left" color="white" size={40} />
      </TouchableOpacity>
      <Identity index={identityIndex} />
      <TouchableOpacity style={style.button} onPress={handleButtonNext}>
        <Icon name="angle-right" color="white" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
