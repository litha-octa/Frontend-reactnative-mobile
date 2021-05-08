import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ProfStyle} from '../components/Profile/ProfStyle';

const Profile = ({navigation, route}) => {
  return (
    <View>
      <View style={ProfStyle.Header}>
        <Text style={ProfStyle.caption}>Profile</Text>
          <View style={ProfStyle.headerpic}> 
            <Image source={require('../assets/images/profile.png')}
            style={ProfStyle.img} />
          </View>
          <View style={ProfStyle.headername}>
            <Text style={ProfStyle.username}>Emir Kharisma</Text>
            <Text style={ProfStyle.status}>online</Text>
          </View>
      </View>
      <View style={ProfStyle.container}>
      <Text style={ProfStyle.menu}>Account</Text>
      <Text>Phone Numbers</Text>
      <Text>Change Password</Text>
      </View>
      <View style={ProfStyle.container}>
        <Text style={ProfStyle.menu}>Settings</Text>
      <Text>Chat Settings</Text>
      <Text>Push Notifications</Text>
      <Text>Privacy and Security</Text>
      <Text>Data and Storage</Text>
      </View>
        <View style={ProfStyle.container}>
        <Text style={ProfStyle.menu}>Help</Text>
      <Text>F.A.Q</Text>
      <Text>Logout</Text>
      </View>
    </View>
  );
};


export default Profile;
