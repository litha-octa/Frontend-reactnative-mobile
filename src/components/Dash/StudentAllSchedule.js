import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  CardItem,
 Left ,Right
} from 'native-base';
import {DashStyle} from './DashStyle';

const StudentAllSchedule = ({navigation}) => {
return (
  <View>
    <Card>
      <CardItem>
        <Left>
          <Text>08:00-09:40</Text>
        </Left>
        <Text>Introduction to Banking Finance</Text>
      </CardItem>
      <CardItem>
        <Left>
          <Text>11:00-11:40</Text>
        </Left>
        <Text>Introduction Javascript</Text>
      </CardItem>
    </Card>
  </View>
);
};


export default StudentAllSchedule;