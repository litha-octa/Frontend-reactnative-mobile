import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import {DashFasStyle} from './DashFasStyle';

const DashFas = ({navigation}) => {
  const data = {
    username: 'Jojo',
    date: 'October 11',
  };
  const Schedule = {
    time: '08:00 - 09:40',
    nameClass: 'Front-End fundamentals',
    student: '24',
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
    <View style={DashFasStyle.body}>
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
          <Image source={require('../../assets/images/stuIcon.png')} />
        </CardItem>
        <CardItem>
          <Text style={{marginRight: 30}}>{Schedule.time}</Text>
          <Text style={{marginRight: 30}}>{Schedule.nameClass}</Text>
          <Text>{Schedule.student}</Text>
          <Image source={require('../../assets/images/stuIcon.png')} />
        </CardItem>
      </Card>
      <TouchableOpacity
        style={DashFasStyle.createBtn}
        onPress={() => {
          navigation.navigate('ActivityFas');
        }}>
        <Image
          source={require('../../assets/images/PlusIcon.png')}
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
  );
};

export default DashFas;
