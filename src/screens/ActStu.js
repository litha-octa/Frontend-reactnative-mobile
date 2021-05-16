import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {ActStyle} from '../components/Act/ActStyle';
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

function ActStu({navigation}) {
  const classData = {
    name: 'Front-end fundamentals',
    progress: '80%',
    score: '80',
  };
  return (
    <View style={ActStyle.body}>
      <View style={ActStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActStuNewClass');
          }}>
          <Image
            source={require('../assets/images/backWhite.png')}
            style={ActStyle.backIcon}
          />
        </TouchableOpacity>
        <Text style={ActStyle.title}> My Class</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={ActStyle.subtitle}>Class Name Progress Score</Text>

          <List style={ActStyle.listItem}>
            <ListItem>
              <Left>
                <Text
                  onPress={() => {
                    navigation.navigate('ActStuClassDetail');
                  }}>
                  {classData.name}
                </Text>
              </Left>
              <Body>
                <Text>{classData.progress}</Text>
              </Body>
              <Right>
                <Text style={ActStyle.score}>
                  {classData.score}
                  <Image source={require('../assets/images/List.png')} />
                </Text>
              </Right>
            </ListItem>

            <ListItem footer>
              <Left>
                <Image source={require('../assets/images/Back.png')} />
              </Left>
              <Right>
                <Image source={require('../assets/images/Next.png')} />
              </Right>
            </ListItem>
          </List>
        </View>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button
            style={ActStyle.footerbtn}
            onPress={() => {
              navigation.navigate('DashStuAllSchedule');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={ActStyle.footerbtn}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-On.png')} />
          </Button>
          <Button
            style={ActStyle.footerbtn}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button
            style={ActStyle.footerbtn}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={require('../assets/images/Prof-Off.png')} />
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
}
export default ActStu;
