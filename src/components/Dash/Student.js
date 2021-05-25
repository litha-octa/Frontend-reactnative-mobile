import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Tab,
  Tabs,
  Container,
  Header,
  Content,
} from 'native-base';
import {DashStyle} from './DashStyle';
import StudentAllShedule from './StudentAllSchedule';
import StudentForYou from './StudentForYou';

const Student = ({navigation}) => {
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
          <Tabs style={{borderWidth: 0}}>
            <Tab
              heading="All Schedule"
              textStyle={{color: '#ADA9BB'}}
              activeTextStyle={{color: '#5784BA'}}
              tabStyle={{backgroundColor: '#F9F9F9', borderWidth: 0}}
              activeTabStyle={{backgroundColor: '#F9F9F9'}}>
              <StudentAllShedule/>
            </Tab>
            <Tab
              heading="For You"
              textStyle={{color: '#ADA9BB'}}
              activeTextStyle={{color: '#5784BA'}}
              tabStyle={{backgroundColor: '#F9F9F9', borderWidth: 0}}
              activeTabStyle={{backgroundColor: '#F9F9F9'}}>
              <StudentForYou/>
            </Tab>
          </Tabs>
        </CardItem>
      </Card>
    </View>
  );
};

export default Student;
