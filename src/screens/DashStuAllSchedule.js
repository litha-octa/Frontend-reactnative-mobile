import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {DashStyle} from '../components/Dash/DashStyle';

const DashStuAllSchedule = ({navigation}) => {
  const data = {
    username: 'Emir',
  };

  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  let today = weekday[d.getDay()];

  let dateNow = new Date();
  let dd = String(dateNow.getDate()).padStart(2, '0');
  let monthNow = new Date();
  let month = new Array(12);
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  let mm = month[monthNow.getMonth()];

  let yyyy = dateNow.getFullYear();
  dateNow = dd + ' ' + mm + ' ' + yyyy;

  return (
    <View style={DashStyle.body}>
      <View style={DashStyle.header}>
        <Text style={DashStyle.welcome}>Welcome back,</Text>

        <Text style={DashStyle.username}>{data.username}</Text>
        <TextInput
          style={DashStyle.searchBar}
          placeholder="Looking for something?"
        />
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/images/Carousel.png')}
            style={DashStyle.imgNews}
          />
        </View>
        <View>
          <Card>
            <CardItem header>
              <Text>My Class</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Today {today} , {dateNow}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text style={DashStyle.chooseSchedule} >All Schedule For You</Text>
            </CardItem>
          </Card>
        </View>
      </ScrollView>

      <Footer>
        <FooterTab>
          <Button style={DashStyle.footer}>
            <Image source={require('../assets/images/Home-On.png')} />
          </Button>
          <Button
            style={DashStyle.footer}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-Off.png')} />
          </Button>
          <Button
            style={DashStyle.footer}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button
            style={DashStyle.footer}
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

export default DashStuAllSchedule;
