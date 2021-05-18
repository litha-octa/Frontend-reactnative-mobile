import {StyleSheet} from 'react-native';

export const chatStyle = StyleSheet.create({
  body: {
    backgroundColor: '#E6EDF6',
    height: '100%',
  },
  header: {
    backgroundColor: '#5784BA',
    height: 100,
    paddingTop: 30,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    color: '#F9F9F9',
    fontFamily: 'Kanit-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
  },
  nameMember: {
    marginLeft: 20,
    color: 'black',
    fontFamily: 'Kanit-Medium',
    fontWeight: '500',
    fontSize:18,
  },
});