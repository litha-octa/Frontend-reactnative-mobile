import {StyleSheet} from 'react-native';
export const ActFas = StyleSheet.create({
  header: {
    backgroundColor: '#5784BA',
    height: 100,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    padding: 20,
    marginTop: 30,
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
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    padding: '3%',
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
    height: '100%',
  },
  dataNewClass: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000000',
  },
  categoryItem: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderRadius:10,
    backgroundColor: '#5784BA',
  },
  footer: {
    backgroundColor: 'white',
  },
});
