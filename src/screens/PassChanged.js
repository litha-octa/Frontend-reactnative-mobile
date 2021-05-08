import React from 'react';
import { View, Text, TextInput, TouchableOpacity , Image} from 'react-native';
import { ResStyle2 } from '../components/ResetPass/ResStyle2';

function PassChanged({ navigation }) {
    const caption = {
        cptn: 'Password changed!',
        msg: 'Login to your account',
        btnLabel: 'Create',
    };
    return (
        <View style={ResStyle2.body}>
            <Text style={ResStyle2.title}>
                {caption.cptn}
            </Text>
            <Image source={require('../assets/images/successChangePass.png')}
                style={ResStyle2.img} />
            <Text style={ResStyle2.subTitle2}
            onPress={()=>{navigation.navigate('Login')}}
            >{caption.msg}</Text>
        </View>
            );
};

export default PassChanged;
