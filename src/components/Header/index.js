import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import Identity from '../Identity';
import style from './style';

const Header = () => {
  const [identityIndex, setIdentityIndex] = useState(0);

  function handleButtonPrev() {
    // An always positive division remainder would help here, JavaScript.
    setIdentityIndex((((identityIndex - 1) % 3) + 3) % 3);
  }

  function handleButtonNext() {
    // An always positive division remainder would help here, JavaScript.
    setIdentityIndex((((identityIndex + 1) % 3) + 3) % 3);
  }

  return (
    <View style={style.header}>
      <TouchableOpacity style={style.button} onPress={handleButtonPrev} />
      <Identity identityIndex={identityIndex} />
      <TouchableOpacity style={style.button} onPress={handleButtonNext} />
    </View>
  );
};

export default Header;
