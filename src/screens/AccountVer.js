import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {ResStyle} from '../components/ResetPass/ResStyle';
function AccountVer({navigation}) {
  const caption = {
    cptn: 'Account verification',
    msg: 'Enter verification code we just sent to your email address',
    msg2: 'Didn’t receive a code?',
    link: 'Resend',
    btnLabel: 'Verfy',
  };
  return (
    <View style={ResStyle.body}>
      <Text style={ResStyle.title}>{caption.cptn}</Text>
      <Image
        source={require('../assets/images/orang2.png')}
        style={ResStyle.img}
      />
      <Text style={ResStyle.subTitle}>{caption.msg}</Text>
      <Text style={ResStyle.sendVer}>
        {caption.msg2}
        <Text style={ResStyle.link}>{caption.link}</Text>
      </Text>
      <TouchableOpacity
        style={ResStyle.button}
        onPress={() => {
          navigation.navigate('CreateNewPass');
        }}>
        <Text style={ResStyle.labelButton}>{caption.btnLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AccountVer;
