import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem,Right,Left, Body, Footer, FooterTab,List, Button, ListItem} from 'native-base';
import {DashFasStyle} from '../components/Dash/DashFasStyle';
import { TestScheduler } from '@jest/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DashFas = ({navigation}) => {
  const data = {
    username: 'Jojo',
    date: 'October 11',
  };
  const Schedule={
      time: '08:00 - 09:40',
      nameClass: 'Front-End fundamentals',
      student: '24'
  };
    return (
      <View style={DashFasStyle.body}>
        <View style={DashFasStyle.header}>
          <Text style={DashFasStyle.welcome}>Welcome back,</Text>

          <Text style={DashFasStyle.username}>{data.username}</Text>
          <TextInput
            style={DashFasStyle.searchBar}
            placeholder="Looking for something?"
          />
        </View>
        <ScrollView>
          <View>
            <Image
              source={require('../assets/images/Carousel.png')}
              style={DashFasStyle.imgNews}
            />
          </View>
          <View>
            <Card>
              <CardItem header>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    fontFamily: 'Kanit-Medium',
                  }}>
                  My Class
                </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      fontFamily: 'Roboto-Medium',
                      alignSelf: 'center',
                    }}>
                    October 2020
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                  <Text style={DashFasStyle.date}>Mo</Text>
                  <Text style={DashFasStyle.date}>Tu</Text>
                  <Text style={DashFasStyle.date}>We</Text>
                  <Text style={DashFasStyle.date}>Th</Text>
                  <Text style={DashFasStyle.date}>Fr</Text>
                  <Text style={DashFasStyle.date}>Sa</Text>
                  <Text style={DashFasStyle.date}>Su</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                  <Text style={DashFasStyle.date}>12</Text>
                  <Text style={DashFasStyle.date}>13</Text>
                  <Text style={DashFasStyle.date}>14</Text>
                  <Text style={DashFasStyle.date}>15</Text>
                  <Text style={DashFasStyle.date}>16</Text>
                  <Text style={DashFasStyle.date}>17</Text>
                  <Text style={DashFasStyle.date}>18</Text>
                </Body>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '96%',
                backgroundColor: 'white',
                marginLeft: '2%',
                marginBottom: 10,
              }}>
              <CardItem>
                <Text style={{marginRight: 30}}>{Schedule.time}</Text>
                <Text style={{marginRight: 30}}>{Schedule.nameClass}</Text>
                <Text>{Schedule.student}</Text>
                <Image source={require('../assets/images/stuIcon.png')} />
              </CardItem>
              <CardItem>
                <Text style={{marginRight: 30}}>{Schedule.time}</Text>
                <Text style={{marginRight: 30}}>{Schedule.nameClass}</Text>
                <Text>{Schedule.student}</Text>
                <Image source={require('../assets/images/stuIcon.png')} />
              </CardItem>
            </Card>
            <TouchableOpacity
              style={DashFasStyle.createBtn}
              onPress={() => {
                navigation.navigate('ActivityFas');
              }}>
              <Image
                source={require('../assets/images/PlusIcon.png')}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Kanit-Medium',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                New Task
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Footer>
          <FooterTab>
            <Button style={DashFasStyle.footer}>
              <Image source={require('../assets/images/Home-On.png')} />
            </Button>
            <Button
              style={DashFasStyle.footer}
              onPress={() => {
                navigation.navigate('ActivityFas');
              }}>
              <Image source={require('../assets/images/Act-Off.png')} />
            </Button>
            <Button
              style={DashFasStyle.footer}
              onPress={() => {
                navigation.navigate('Chat');
              }}>
              <Image source={require('../assets/images/Chat-Off.png')} />
            </Button>
            <Button
              style={DashFasStyle.footer}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image source={require('../assets/images/Prof-Off.png')} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
};

export default DashFas;
