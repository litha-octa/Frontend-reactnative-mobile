import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  CardItem,
 Left ,Right
} from 'native-base';
import {DashStyle} from './DashStyle';

const StudentForYou = ({navigation}) => {
return (
  <View>
    <Card>
      <CardItem>
        <Text>No Class For Today</Text>
      </CardItem>
    </Card>
  </View>
);
};


export default StudentForYou;