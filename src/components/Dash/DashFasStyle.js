import {StyleSheet} from 'react-native';

export const DashFasStyle = StyleSheet.create({
  body: {
    backgroundColor: '#E6EDF6',
    height: '100%',
  },
  header: {
    backgroundColor: '#5784BA',
    height: 200,
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
  username: {
    fontFamily: 'Kanit-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#F9F9F9',
  },
  imgNews: {
    width: '96%',
    margin: '2%',
    height: 200,
  },
  searchBar: {
    backgroundColor: '#E5E6EB',
    width: '96%',
    alignSelf: 'center',
    borderRadius: 20,
    height: '30%',
    marginTop: '3%',
  },
  chooseSchedule: {
    textAlign: 'center',
  },
  date: {
    fontWeight: '800',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
    width: 30,
    marginRight: 25,
  },
  footer: {
    backgroundColor: 'white',
  },
  createBtn: {
    backgroundColor: '#5784BA',
    alignSelf: 'center',
    borderRadius: 30,
    width: '30%',
    flexDirection: 'row',
    padding:10,
  },
});
