import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {ACDStyle} from '../ACDStyle';
import {
  List,
  ListItem,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
} from 'native-base';

function ActStuClassDetail({navigation}) {
  const classes = {
    name: 'Know More Javascript',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. ',
    description:
      'Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.This class helps you get started with JavaScript and furthers your understanding of what is possible.',
  };
  return (
    <View style={ACDStyle.body}>
      <View style={ACDStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActStuNewClass');
          }}>
          <Image
            source={require('../../../assets/images/backWhite.png')}
            style={ACDStyle.backIcon}
          />
        </TouchableOpacity>
        <Text style={ACDStyle.title}>{classes.name}</Text>
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../../../assets/images/backgroundMobile.png')}
            style={ACDStyle.BgImg}
          />
          <Button success style={ACDStyle.RegisBtn}>
            <Text style={ACDStyle.labelRegisBtn}>Register</Text>
          </Button>
          <Image
            source={require('../../../assets/images/iconComp.png')}
            style={ACDStyle.CompImg}
          />
          <Text style={ACDStyle.nameClass}>{classes.name}</Text>
          <Text style={ACDStyle.descClass}>
            Level : Beginner Category : Software Price : Free
          </Text>
        </View>
        <View style={ACDStyle.container}>
          <Text style={ACDStyle.titleDesc}>Description</Text>
          <Text style={ACDStyle.contentDesc}>{classes.description}</Text>
          <Text style={ACDStyle.titleDesc}>What will I learn?</Text>
          <Text style={ACDStyle.contentDesc}>-{classes.content}</Text>
          <Text style={ACDStyle.contentDesc}>-{classes.content}</Text>
          <Text style={ACDStyle.contentDesc}>-{classes.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default ActStuClassDetail;
