import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {LoginStyle} from '../components/auth/LoginStyle';
import {login} from '../redux/actions/auth';
import {connect} from 'react-redux';

function Login({navigation}) {
  const [dataLogin, setDataLogin] = useState({username: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = e => {
    e.preventDefault();
    // console.log(dataLogin, DOMAIN_API, PORT_API);
    // const data = {username: dataLogin.username, password: dataLogin.password};
    props.login('http://localhost:8300/api/v1/auth/', dataLogin);
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={LoginStyle.body}>
        <Text style={LoginStyle.title}>Login</Text>

        <Text style={LoginStyle.descInput}>Username or Email</Text>
        <TextInput
          style={LoginStyle.inputLogin}
          value={dataLogin.username}
          onChangeText={text => setDataLogin({...dataLogin, username: text})}
        />

        <Text style={LoginStyle.descInput}>Password</Text>
        <TextInput
          style={LoginStyle.inputLogin}
          secureTextEntry={!showPassword ? true : false}
          value={dataLogin.password}
          onChangeText={text => setDataLogin({...dataLogin, password: text})}
        />

        <Text
          style={LoginStyle.forgotPass}
          onPress={() => {
            navigation.navigate('InsertEmail');
          }}>
          Forgot Password
        </Text>

        <TouchableOpacity style={LoginStyle.buttonLogin} onPress={loginHandler}>
          }}>
          <Text style={LoginStyle.labelButtonLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LoginStyle.buttonLoginWithGoogle}>
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
}
// const mapStateToProps = state => ({
//   auth: state.auth,
// });
// const mapDispatchToProps = dispatch => ({
//   login: (url, data) => {
//     dispatch(login(url, data));
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
