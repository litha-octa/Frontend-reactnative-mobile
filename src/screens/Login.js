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
import axios from 'axios';

const Login = ({ navigation, route }) => {
   const  state = {
    name: null,
    password: null,
  };
  nameHandler = (a) => {
    this.setState({
      name: a.target.value,
    });
  };
  passwordHandler = (a) => {
    this.setState({
      password: a.target.value,
    });
  };
  openModalHandler = () => {
    this.setState({
      modalShow: true,
    });
  };
  submitHandler = (a) => {
    a.preventDefault();
    let dataLogin = {
      name: this.state.name,
      password: this.state.password,
    };

    axios
      .post('http://localhost:8300/api/v1/auth/', dataLogin)
      .then((res) => {
        if (res.data.success) {
          res.data.role === 1 ?
            this.props.history.push('Profile') :
            this.props.history.push('Profile');
        }
      })
      .catch((err) => {
        this.setState(
            console.log("error bangsat")
        );
      });
  };

return(
      <KeyboardAvoidingView behavior="padding">
        <View style={LoginStyle.body}>
            <Text style={LoginStyle.title}>Login</Text>

            <Text style={LoginStyle.descInput}>Username or Email</Text>
                <TextInput style={LoginStyle.inputLogin}  onChange={this.nameHandler}/>
            <Text style={LoginStyle.descInput} onChange={this.passwordHandler}>Password</Text>
                <TextInput style={LoginStyle.inputLogin} />
            
                    <Text style={LoginStyle.forgotPass} onPress={()=>{navigation.navigate('InsertEmail');}}>Forgot Password</Text>
        
        <TouchableOpacity
      style={LoginStyle.buttonLogin} onPress={() => {
        navigation.navigate('ActStu');
      }}>
            <Text style={LoginStyle.labelButtonLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={LoginStyle.buttonLoginWithGoogle}>
            <Image source={require('../assets/images/logogoogle.png')}
                style={LoginStyle.logoBtn} />
            <Text style={LoginStyle.labelButtonLoginWithGoogle}>
                Login with Google
            </Text>
        </TouchableOpacity>
       
            <Text style={LoginStyle.Regis}>
                Dont have account ?
                    <Text style={LoginStyle.link} onPress={() => {
                    navigation.navigate('Register');
                }}>
                        Register here
                    </Text>
            </Text>
        
    </View></KeyboardAvoidingView>
    );
};
export default Login;