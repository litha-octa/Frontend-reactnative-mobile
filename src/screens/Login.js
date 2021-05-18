import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {LoginStyle} from '../components/auth/LoginStyle';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={LoginStyle.body}>
        <Text style={LoginStyle.title}>Login</Text>

        <Text style={LoginStyle.descInput}>Username or Email</Text>
        <TextInput style={LoginStyle.inputLogin} />

        <Text style={LoginStyle.descInput}>Password</Text>
        <TextInput style={LoginStyle.inputLogin} />

        <Text
          style={LoginStyle.forgotPass}
          onPress={() => {
            navigation.navigate('InsertEmail');
          }}>
          Forgot Password
        </Text>

        <TouchableOpacity
          style={LoginStyle.buttonLogin}
          onPress={() => {
            navigation.navigate('DashStuAllSchedule');
          }}>
          <Text style={LoginStyle.labelButtonLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LoginStyle.buttonLoginWithGoogle}
          onPress={() => {
            navigation.navigate('ActivityFas');
          }}>
          <Image
            source={require('../assets/images/logogoogle.png')}
            style={LoginStyle.logoBtn}
          />
          <Text style={LoginStyle.labelButtonLoginWithGoogle}>
            Login with Google
          </Text>
        </TouchableOpacity>

        <Text style={LoginStyle.Regis}>
          Dont have account ?
          <Text
            style={LoginStyle.link}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register here
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
