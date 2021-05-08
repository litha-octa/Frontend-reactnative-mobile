import React from'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import {ResStyle} from '../components/ResetPass/ResStyle';


function InsertEmail({navigation}){
   const caption = {
        cptn : 'Reset Password',
        msg: 'Enter your email address linked to this account.',
       msg2:'We will send you the verification code to reset your password',
        btnLabel: 'Send',};
    return(
        <KeyboardAvoidingView behavior="padding">
        <View style={ResStyle.body}>
            <Text style={ResStyle.title}>{caption.cptn}</Text>
                <Image source={require('../assets/images/orang.png')}
                style={ResStyle.img}/>
                
        <Text style={ResStyle.subTitle}>{caption.msg}</Text>
            <Text style={ResStyle.sendVer}>{caption.msg2}</Text>
            <TextInput style={ResStyle.input} placeholder="insert yout email"/>
            <TouchableOpacity
                style={ResStyle.button}
                onPress={() => {navigation.navigate('AccountVer')}}>
                <Text style={ResStyle.labelButton}>{caption.btnLabel}</Text>
                </TouchableOpacity>
    </View></KeyboardAvoidingView>
    );
};
export default InsertEmail;