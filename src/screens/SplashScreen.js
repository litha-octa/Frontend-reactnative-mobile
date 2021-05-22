import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
//import {set} from 'react-native-reanimated';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }, 6000);
    }
  render() {
    return (
      <View style={{backgroundColor:'#5784BA', height:'100%'}}>
        <Text
          style={{
            fontSize: 40,
            alignSelf: 'center',
            marginTop: '20%',
            marginBottom: '10%',
            color: 'white',
          }}>
          EduApp
        </Text>
        <Image
          source={require('../assets/images/splashScreen.png')}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: '10%',
            color: 'white',
          }}>
          For Better Future
        </Text>
      </View>
    );
  }
}
export default Login;
