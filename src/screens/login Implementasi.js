import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {LoginStyle} from '../components/auth/LoginStyle';
import {login} from '../redux/actions/auth';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';

function Login({...props}) {
  const [dataLogin, setDataLogin] = useState({username: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [zIndexInput, setZIndexInput] = useState({
    username: 1,
    password: 1,
  });
  const [inputValidation, setInputValidation] = useState({
    username: undefined,
    password: undefined,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const [componentWidth, setComponentWidth] = useState(
    Dimensions.get('window').width - 64,
  );

  // console.log({...props});

  useEffect(() => {
    const updateLayout = () => {
      setComponentWidth(Dimensions.get('window').width - 64);
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const loginHandler = e => {
    e.preventDefault();
    console.log(dataLogin, DOMAIN_API, PORT_API);
    // const data = {username: dataLogin.username, password: dataLogin.password};
    props.login(`${DOMAIN_API}:${PORT_API}/api/v1/auth/`, dataLogin);
  };
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (props.auth.isLoginPending) {
        console.log('Loading...');
        setIndicatorVisible(true);
      } else if (props.auth.isLoginFulfilled) {
        console.log('sukses');
        setIndicatorVisible(false);
      } else if (props.auth.isLoginRejected) {
        setIndicatorVisible(false);
        console.log({...props.auth.errorLogin});
        if (
          props.auth.errorLogin.response &&
          props.auth.errorLogin.response.status === 401
        ) {
          setErrorMessage(
            'The username and password you entered did not match our records. Please double-check and try again.',
          );
          setErrorMessageVisible(true);
        } else {
          setErrorMessage(
            'Opps.. Sorry, our server seems to be having trouble',
          );
          setErrorMessageVisible(true);
        }
      }
    }
  }, [props.auth]);
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
            props.navigation.navigate('InsertEmail');
          }}>
          Forgot Password
        </Text>

        <TouchableOpacity style={LoginStyle.buttonLogin} onPress={loginHandler}>
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
              props.navigation.navigate('Register');
            }}>
            Register here
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  login: (url, data) => {
    dispatch(login(url, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
