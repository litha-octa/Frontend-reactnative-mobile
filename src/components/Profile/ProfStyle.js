import {StyleSheet} from 'react-native';

export const ProfStyle = StyleSheet.create({
  Header: {
    backgroundColor: '#5784BA',
    height: '25%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  headerpic: {
    width: '30%',
  },
  headername: {
    width: '60%',
    marginTop: -60,
    marginRight: 30,
    alignSelf: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    padding: '3%',
  },
  caption: {
    color: 'white',
    fontFamily: 'Kanit-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 32,
    marginLeft: '4%',
    marginBottom: '4%',
    marginTop: '10%',
  },
  username: {
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 25,
    color: '#F9F9F9',
  },
  status: {
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    color: '#F9F9F9',
  },
  menu: {
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  menuBtn: {
    fontFamily: 'Kanit-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#010620',
    textAlign: 'left',
  },
  img: {
    width: 70,
    height: 70,
    marginLeft: 25,
  },
  footer: {
    backgroundColor: 'white',
  },
  bottomSheet: {
    backgroundColor: 'white',
    height: '100%',
    width: '80%',
    alignSelf: 'center',
    padding: '5%',
  },
  bottomSheetBtn: {
    width: '40%',
    height: '20%',
    borderRadius: 10,
    marginLeft: '10%',
    marginTop: '5%',
    paddingHorizontal: 10,
    borderColor: '#5784BA',
    borderWidth: 2,
  },
});
