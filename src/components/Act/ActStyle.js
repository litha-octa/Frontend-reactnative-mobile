import {StyleSheet} from 'react-native';

export const ActStyle = StyleSheet.create({
  header: {
    backgroundColor: '#5784BA',
    height: 100,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    padding: 20,
  },
  body: {
    backgroundColor: '#E6EDF6',
    height: '100%',
  },
  backIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  title: {
    color: 'white',
    fontFamily: 'Kanit-Medium',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: '-8%',
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
    padding: '3%',
  },
  score: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#51E72B',
    marginLeft: '-3%',
  },
  listItem: {
    backgroundColor: 'white',
    margin: '2%',
  },
  footerbtn: {
    backgroundColor: 'white',
  },
});