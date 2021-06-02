import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {RegisStyle} from '../components/auth/RegisStyle';

const Register = ({navigation, route}) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={RegisStyle.body}>
        <Text style={RegisStyle.title}>Register</Text>
        <Text style={RegisStyle.descInput}>Username</Text>
        <TextInput style={RegisStyle.inputLogin} />
        <Text style={RegisStyle.descInput}>Email</Text>
        <TextInput style={RegisStyle.inputLogin} />
        <Text style={RegisStyle.descInput}>Password</Text>
        <TextInput style={RegisStyle.inputLogin} />
        <Text style={RegisStyle.descInput}>Confirm Password</Text>
        <TextInput style={RegisStyle.inputLogin} />
        <TouchableOpacity style={RegisStyle.buttonLogin}>
          <Text style={RegisStyle.labelButtonLogin}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={RegisStyle.buttonLoginWithGoogle}>
          <Image
            source={require('../assets/images/logogoogle.png')}
            style={RegisStyle.logoBtn}
          />
          <Text style={RegisStyle.labelButtonLoginWithGoogle}>
            Register with Google
          </Text>
        </TouchableOpacity>
        <Text style={RegisStyle.Login}>
          Already have account?
          <Text
            style={RegisStyle.link}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Register;
