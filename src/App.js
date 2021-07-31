import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Card from './components/Card';
import Header from './components/Header';

import {
  BaneInfo,
  JokerInfo,
  PenguinInfo,
  DeathstrokeInfo,
  CopperheadInfo,
} from './Info';

const App = () => {
  const [profileIndex, setProfileIndex] = useState(0);
  const n = 5;
  const infos = [
    BaneInfo,
    JokerInfo,
    PenguinInfo,
    DeathstrokeInfo,
    CopperheadInfo,
  ];

  function handleButtonPrev() {
    // An always positive division remainder would help here, JavaScript.
    setProfileIndex((((profileIndex - 1) % n) + n) % n);
  }

  function handleButtonNext() {
    // An always positive division remainder would help here, JavaScript.
    setProfileIndex((((profileIndex + 1) % n) + n) % n);
  }

  const renderCard = (card, index) => {
    return <Card key={index} title={card.title} items={card.items} />;
  };

  return (
    <ScrollView style={style.profile}>
      <Header
        index={profileIndex}
        prev={handleButtonPrev}
        next={handleButtonNext}
      />
      {infos[profileIndex].map(renderCard)}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  profile: {
    backgroundColor: '#505050',
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
