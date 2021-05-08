import React from 'react';
import {View, Text} from 'react-native';

const MyHeader = ({title, leftButton: LeftButton, style}) => {
  return (
    <View style={style}>
      <LeftButton />
      <Text>{title}</Text>
    </View>
  );
};

export default MyHeader;
