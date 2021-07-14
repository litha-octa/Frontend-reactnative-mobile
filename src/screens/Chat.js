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

function Chat({...props}) {
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
            <Text
              style={chatStyle.nameMember}
              onPress={() => props.navigation.navigate('ChatRoom')}>
              Deddy Corbuzer
            </Text>
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
    </View>
  );
}
export default Chat;
