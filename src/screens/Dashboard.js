import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';
import getUser from '../redux/actions/getUser';
import {DashStyle} from '../components/Dash/DashStyle';
import Student from '../components/Dash/Student';
import DashFas from '../components/Dash/Fasilitator';
import axios from 'axios';

function Dashboard(props) {
  const role = props.role;
  const email = props.email;
  console.log(role,email);

  useEffect(() => {
    props.getUser(`${DOMAIN_API}:${PORT_API}/api/v1/usr/`, email);
  });
  // if(getuser.ispending){
  //   console.log("loading")
  // }
  // else if(getUser.isFulfilled){
  //   console.log('fulfilled')
  // }
  // else{
  //   console.log('errorrrrr')
  // };

  const data = {
    //username: props.getUser.currentUser.name,
  };
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
        <Text style={DashStyle.username}>Emir Khrisma</Text>
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
        <Student />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  role: state.auth.resultLogin.data.role,
  email: state.auth.resultLogin.data.email,
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
