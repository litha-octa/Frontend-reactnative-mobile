import {StyleSheet} from 'react-native';

export const ACDStyle = StyleSheet.create({
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
  BgImg: {
    width: '100%',
    marginTop: '2%',
    position: 'absolute',
  },
  RegisBtn: {
    marginLeft: '70%',
    marginTop: '5%',
    width: 80,
    borderRadius: 20,
  },
  labelRegisBtn: {
    color: 'white',
    padding: 3,
    marginLeft: 15,
  },
  CompImg: {
    width: 100,
    height: 105,
    marginLeft: '5%',
    marginTop: '15%',
  },
  descClass: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    color: '#000000',
    marginTop: '0%',
    marginLeft: '33%',
  },
  nameClass: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    color: '#000000',
    marginTop: '-13%',
    marginLeft: '33%',
  },
  container: {
    backgroundColor: 'white',
    marginTop: '7%',
    padding: '5%',
  },
  titleDesc: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    color: '#000000',
  },
  contentDesc: {
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    marginBottom: 20,
    marginTop: 10,
  },
  footer: {
    backgroundColor: 'white',
  },
});
