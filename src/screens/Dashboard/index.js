import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  ImgSlider1,
  ImgSlider2,
  ActivityBg,
  Math,
  NotifIcon,
} from '../../assets/images';
//import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';
import {getUser} from '../../redux/actions/getUser';
import {DashStyle} from '../../components/Dash/DashStyle';
import Student from '../../components/Dash/Student';
import DashFas from '../../components/Dash/Fasilitator';
import {SliderBox} from 'react-native-image-slider-box';

function Dashboard(props) {
  const role = props.role;
  const {getUser} = props;

  const slider = [ImgSlider1, ImgSlider2, ActivityBg , Math];

  useEffect(() => {
    //const token = props.token;
    const email = props.email;
    getUser(`${DOMAIN_API}:${PORT_API}/api/v1/usr/${email}`);
    // getUser(`http://192.168.1.14:${PORT_API}/api/v1/usr/${email}`);
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
  // const displayName = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  // const name = "litha";
  // const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <ScrollView>
      <KeyboardAvoidingView>
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
              <Image source={NotifIcon} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <Text style={DashStyle.username}>{name}</Text>
            <TextInput
              style={DashStyle.searchBar}
              placeholder="Looking for something?"
            />
          </View>
          <ScrollView>
            <View onPress={() => props.navigation.navigate('News')}>
              {/* <Image source={imgSlider2} style={DashStyle.imgNews} /> */}
              <SliderBox images={slider} style={DashStyle.imgNews} />
            </View>
            {role === 'student' ? <Student /> : <DashFas />}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  //token : state.auth.resultLogin.data.token,
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
