import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {DashStyle} from '../components/Dash/DashStyle';

const DashStuAllSchedule = ({navigation}) => {
  const data = {
    username: 'Emir',
    date: 'October 11',
  };
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
                <Text> Today, {data.date}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> Tomorrow, {data.date}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> Today, {data.date}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={DashStyle.chooseSchedule}>All Schedule For You</Text>
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
