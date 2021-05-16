import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import {ProfStyle} from '../components/Profile/ProfStyle';

const Profile = ({navigation, route}) => {
  return (
    <View style={ProfStyle.body}>
      <View style={ProfStyle.Header}>
        <Text style={ProfStyle.caption}>Profile</Text>
        <View style={ProfStyle.headerpic}>
          <Image
            source={require('../assets/images/profile.png')}
            style={ProfStyle.img}
          />
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
                  <Text style={ProfStyle.menuBtn}>Phone Numbers</Text>
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
                  alert('Are You Sure?');
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

      <Footer>
        <FooterTab>
          <Button
            style={ProfStyle.footer}
            onPress={() => {
              navigation.navigate('DashStuAllSchedule');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={ProfStyle.footer}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-Off.png')} />
          </Button>
          <Button
            style={ProfStyle.footer}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button style={ProfStyle.footer}>
            <Image source={require('../assets/images/Prof-On.png')} />
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

export default Profile;
