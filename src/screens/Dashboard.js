import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';
import {getUser} from '../redux/actions/getUser';
import {DashStyle} from '../components/Dash/DashStyle';
import Student from '../components/Dash/Student';
import DashFas from '../components/Dash/Fasilitator';
//import axios from 'axios';

function Dashboard(props) {
  const role = props.role;
  // console.log(role);
  const {getUser} = props;
  useEffect(() => {
    const email = props.email;
    getUser(`${DOMAIN_API}:${PORT_API}/api/v1/usr/${email}`);
    //getUser(`http://192.168.1.18:${PORT_API}/api/v1/usr/${email}`);
  }, []);

  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (props.getUserReducer.isPending) {
        console.log('Loading...');
      } else if (props.getUserReducer.isFulfilled) {
        console.log(props.getUserReducer.currentUser);
      } else if (props.getUserReducer.isRejected) {
        console.log(props.getUserReducer.result);
        console.log('get user data rejected : errroooorrrr');
      }
    }
  }, [
    props.getUserReducer.isPending,
    props.getUserReducer.isFulfilled,
    props.getUserReducer.isRejected,
  ]);
  const name = props.name;
  //const name ="litha";
  //const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={DashStyle.body}>
      <View style={DashStyle.header}>
        <Text style={DashStyle.welcome}>Welcome back,</Text>
        <TouchableOpacity
          style={{
            marginLeft: '80%',
            marginTop: -25,
            width: 35,
            height: 35,
          }}>
          <Image
            source={require('../assets/images/NotifIcon4.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text style={DashStyle.username}>{name}</Text>
        <TextInput
          style={DashStyle.searchBar}
          placeholder="Looking for something?"
        />
      </View>
      <ScrollView>
        <View onPress={() => props.navigation.navigate('News')}>
          <Image
            source={require('../assets/images/Carousel.png')}
            style={DashStyle.imgNews}
          />
        </View>
        {role === 'student' ? <Student /> : <DashFas />}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  role: state.auth.resultLogin.data.role,
  email: state.auth.resultLogin.data.email,
  getUserReducer: state.getUserReducer,
  name: state.getUserReducer.currentUser.name,
});

const mapDispatchToProps = dispatch => ({
  getUser: (url, email) => {
    dispatch(getUser(url, email));
  },
});

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
export default ConnectedDashboard;
