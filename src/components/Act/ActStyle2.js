import {StyleSheet} from 'react-native';
export const ActStyle2 = StyleSheet.create({
  header: {
    backgroundColor: '#5784BA',
    height: 100,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    padding: 20,
  },
  body: {
    backgroundColor: '#E6EDF6',
    height:'100%',
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
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
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
  viewAll: {
    textAlign: 'center',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  searchbar: {
    borderWidth: 1,
    height: 40,
    width: '78%',
    borderRadius: 5,
  },
  searchbutton: {
    backgroundColor: '#5784BA',
    width: '20%',
    height: 40,
    borderRadius: 5,
    marginTop: -40,
    marginLeft: '80%',
  },
  buttonLabel: {
    color: 'white',
    fontFamily: 'Kanit-Medium',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  filter: {
    backgroundColor: '#EEEEEE',
    width: '96%',
    alignSelf: 'center',
  },
  registerBtn: {
    width: 40,
    marginTop: '2%',
  },
  footer: {
    backgroundColor: 'white',
  },
});
