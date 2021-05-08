import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-vector-icons/AntDesign';

const MyBackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={{width: 30}} onPress={onPress}>
      <Icon name="doubleleft" size={30} color="#900" />
    </TouchableOpacity>
  );
};

export default MyBackButton;
