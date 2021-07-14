import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';
import {ProfStyle} from '../components/Profile/ProfStyle';
import NotifService from './../../NotifService';

const Profile = ({navigation}) => {
 
  
  return (
    <View style={ProfStyle.body}>
      <View style={ProfStyle.Header}>
        <Text style={ProfStyle.caption}>Profile</Text>
        <View style={ProfStyle.headerpic}>
          <Image
            source={require('../assets/images/profile.png')}
            style={ProfStyle.img}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('FormProfile')}>
            <Image
              source={require('../assets/images/editicon.png')}
              style={{width: 20, height: 20, marginLeft: 80, marginTop: -10}}
            />
          </TouchableOpacity>
        </View>
        <View style={ProfStyle.headername}>
          <Text style={ProfStyle.username}>Emir Kharisma</Text>
          <Text style={ProfStyle.status}>online</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Account</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/PhoneIcon.png')} />
                </Left>
                <Body>
                  <Text
                    style={ProfStyle.menuBtn}
                    onPress={() =>
                     navigation.navigate('Notif')
                    }>
                    Phone Numbers
                  </Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/PINIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Change Password</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>

          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Settings</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/ChatIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Chat Settings</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/NotifIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Push Notifications</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image
                    source={require('../assets/images/SecurityIcon.png')}
                  />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Privacy and Security</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/StorageIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Data and Storage</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Help</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/FAQIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>F.A.Q</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem
                button
                onPress={() => {
                  alert('Anda Telah Keluar');
                  navigation.navigate('Login');
                }}>
                <Left>
                  <Image source={require('../assets/images/LogoutIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>LogOut</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Profile;
