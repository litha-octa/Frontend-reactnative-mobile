import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';
import {getDataUser} from '../redux/actions/auth';
import {DashStyle} from '../components/Dash/DashStyle';
import Student from '../components/Dash/Student';
import DashFas from '../components/Dash/Fasilitator';

const Dashboard = ({props}) => {
  const data = {
    username: 'Emir',
  };
  // const role = props.role;
  // console.log(role);
  // const [dataUser, setDataUser] = useState('');
  // const ref = useRef();

  // useEffect(() => {
  //   if (!ref.current) {
  //     const token = props.token;
  //     props.getDataUser(`${DOMAIN_API}:${PORT_API}/api/v1/usr/`, token);
  //     ref.current = true;
  //   } else {
  //     if (props.auth.isUserObtained) {
  //       setDataUser(props.auth.currentUser);
  //       console.log(props.auth.currentUser);
  //     }
  //   }
  // }, [props]);


  return (
    <View style={DashStyle.body}>
      <View style={DashStyle.header}>
        <Text style={DashStyle.welcome}>Welcome back,</Text>

        <Text style={DashStyle.username}> helo
          {/* {dataUser.full_name
            ? dataUser.full_name.split(' ')[0]
            : dataUser.name} */}
        </Text>
        <TextInput
          style={DashStyle.searchBar}
          placeholder="Looking for something?"
        />
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/images/Carousel.png')}
            style={DashStyle.imgNews}
          />
        </View>
        {/* {role === 'student' ? <Student /> : <DashFas />} */}

        {/* <DashFas/> */}
      </ScrollView>
    </View>
  );
};
// const mapStateToProps = state => ({
//   auth: state.auth,
//   token: state.auth.resultLogin.token,
//   role: state.auth.currentUser.role,
// });
// const mapDispatchToProps = dispatch => ({
//   getDataUser: (url, token) => {
//     dispatch(getDataUser(url, token));
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;