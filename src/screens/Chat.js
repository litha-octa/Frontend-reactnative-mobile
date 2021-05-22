import React from 'react';
import {View, Text,Image, TextInput, ScrollView} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Right,
  Body,
  Card,
  Footer,
  FooterTab,
  Button,
  CardItem,
} from 'native-base';
import {chatStyle} from '../components/Chat/ChatStyle';

function Chat({navigation}) {
  return (
    <View style={chatStyle.body}>
      <View style={chatStyle.header}>
        <Text style={chatStyle.welcome}>Chats</Text>
        <TextInput />
      </View>
      <ScrollView>
        <Card>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Deddy Corbuzer</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Cita Citata</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Induk Bebek</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Pagar Rumah</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Deddy Corbuzer</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Cita Citata</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Induk Bebek</Text>
          </CardItem>
          <CardItem>
            <Image source={require('../assets/images/Member.png')} />
            <Text style={chatStyle.nameMember}>Pagar Rumah</Text>
          </CardItem>
        </Card>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => {
              navigation.navigate('DashStuAllSchedule');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-Off.png')} />
          </Button>
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-On.png')} />
          </Button>
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={require('../assets/images/Prof-Off.png')} />
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
}
export default Chat;
