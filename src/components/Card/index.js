import React from 'react';
import {Text, View} from 'react-native';

import style from './style';

const Card = ({title, list}) => {
  const renderItem = (item, index) => {
    return (
      <Text key={index} style={style.card_content_text}>
        {item}
      </Text>
    );
  };

  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View>
          <Text style={style.card_header_text}>{title}</Text>
        </View>
        <View style={style.card_content}>{list.map(renderItem)}</View>
      </View>
    </View>
  );
};

export default Card;
