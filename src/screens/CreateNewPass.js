import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { ResStyle2 } from '../components/ResetPass/ResStyle2';

function CreateNewPass({navigation}){
    const caption = {
        cptn: 'Create new password',
        msg: 'Your new password must be different from previous used password!',
        btnLabel: 'Create',
    };
    return(
        <View style={ResStyle2.body}>
            <Text style={ResStyle2.title}>{caption.cptn}</Text>
            <Text style={ResStyle2.subTitle}>{caption.msg}</Text>
            
            <Text style={ResStyle2.labelInput}>Password</Text>
                <TextInput style={ResStyle2.input}/>
            <Text style={ResStyle2.labelInput}>Confirm Password</Text>
                <TextInput style={ResStyle2.input} />

            <TouchableOpacity
                style={ResStyle2.button}
                onPress={() => { navigation.navigate('PassChanged') }}>
                <Text style={ResStyle2.labelButton}>{caption.btnLabel}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateNewPass;
