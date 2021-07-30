import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  identity: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop: 10,
  },
  specialty: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default style;
