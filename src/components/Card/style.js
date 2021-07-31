import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  card: {
    width: '85%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: 'black',
  },
  card_header_text: {
    fontWeight: 'bold',
    color: 'white',
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#00DAFF',
    marginBottom: 10,
  },
});

export default style;
