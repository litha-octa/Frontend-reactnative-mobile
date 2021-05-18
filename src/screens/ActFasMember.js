import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {ACDStyle} from '../components/Act/ACDStyle';
import {
  List,
  ListItem,
  Left,
  Right,
  Body,
  Card,
  Footer,
  FooterTab,
  Button,
  CardItem,
} from 'native-base';

function ActFasMember({navigation}) {
  const classes = {
    name: 'Front-end fundamentals',
   };
  return (
    <View style={ACDStyle.body}>
      <View style={ACDStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActStuNewClass');
          }}>
          <Image
            source={require('../assets/images/backWhite.png')}
            style={ACDStyle.backIcon}
          />
        </TouchableOpacity>
        <Text style={ACDStyle.title}>{classes.name}</Text>
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/images/backgroundMobile.png')}
            style={ACDStyle.BgImg}
          />
          <Image
            source={require('../assets/images/iconComp.png')}
            style={ACDStyle.CompImg}
          />
          <Text style={ACDStyle.nameClass}>{classes.name}</Text>
          <Text style={ACDStyle.descClass}>
            Level : Beginner Category : Software Price : Free
          </Text>
        </View>

        <View style={ACDStyle.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Information
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Class Progress
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Class Discussion
            </Text>
            <Text style={{marginRight: 20, color: 'blue', fontWeight: 'bold'}}>
              Member
            </Text>
          </View>
          <Card>
            <CardItem>
              <Image source={require('../assets/images/Member.png')} />
              <Text style={ACDStyle.nameMember}>Deddy Corbuzer</Text>
            </CardItem>
            <CardItem>
              <Image source={require('../assets/images/Member.png')} />
              <Text style={ACDStyle.nameMember}>Cita Citata</Text>
            </CardItem>
            <CardItem>
              <Image source={require('../assets/images/Member.png')} />
              <Text style={ACDStyle.nameMember}>Induk Bebek</Text>
            </CardItem>
            <CardItem>
              <Image source={require('../assets/images/Member.png')} />
              <Text style={ACDStyle.nameMember}>Pagar Rumah</Text>
            </CardItem>
          </Card>
        </View>
      </ScrollView>

      <Footer>
        <FooterTab>
          <Button
            style={ACDStyle.footer}
            onPress={() => {
              navigation.navigate('DashStuAllSchedule');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={ACDStyle.footer}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-On.png')} />
          </Button>
          <Button
            style={ACDStyle.footer}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button
            style={ACDStyle.footer}
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
export default ActFasMember;
