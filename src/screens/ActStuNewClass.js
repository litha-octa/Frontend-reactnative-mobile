import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {ActStyle2} from '../components/Act/ActStyle2';
import {
  List,
  ListItem,
  Left,
  Right,
  Body,
  Container,
  Footer,
  FooterTab,
  Button,
} from 'native-base';

function ActStuNewClass({navigation}) {
  const classData = {
    name: 'Front-end fundamentals',
    progress: '80%',
    score: '80',
  };
  return (
    <View style={ActStyle2.body}>
      <View style={ActStyle2.header}>
        <Text style={ActStyle2.title}> Activity</Text>
      </View>
      <View>
        <Text style={ActStyle2.subtitle}>My Class</Text>
        <Text style={ActStyle2.subtitle}>Class Name Progress Score</Text>
      </View>
      <ScrollView>
        <View>
          <List style={ActStyle2.listItem}>
            <ListItem>
              <Left>
                <Text>{classData.name}</Text>
              </Left>
              <Body>
                <Text>{classData.progress}</Text>
              </Body>
              <Right>
                <Text style={ActStyle2.score}>
                  {classData.score}
                  <Image source={require('../assets/images/List.png')} />
                </Text>
              </Right>
            </ListItem>
          </List>
          <Text
            style={ActStyle2.viewAll}
            onPress={() => {
              navigation.navigate('ActStuMyClass');
            }}>
            View All
          </Text>
        </View>
        <View>
          <Container style={ActStyle2.container}>
            <Text style={ActStyle2.subtitle}>New Class</Text>
            <TextInput style={ActStyle2.searchbar} />
            <Button style={ActStyle2.searchbutton}>
              <Text style={ActStyle2.buttonLabel}> Search </Text>
            </Button>
            <View style={ActStyle2.filter}>
              <Text style={ActStyle2.viewAll}>Categories Level Pricing</Text>
            </View>
            <List style={ActStyle2.listItem}>
              <ListItem>
                <Text>ClassName Level Pricing</Text>
              </ListItem>
              <ListItem>
                <Text>{classData.name} Beginner $10</Text>

                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name} Beginner $10</Text>

                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name} Beginner $10</Text>

                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name} Beginner $10</Text>

                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name} Beginner $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
            </List>
          </Container>
        </View>
      </ScrollView>

      <Footer>
        <FooterTab>
          <Button
            style={ActStyle2.footer}
            onPress={() => {
              navigation.navigate('DashStuAllSchedule');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={ActStyle2.footer}
            onPress={() => {
              navigation.navigate('ActStuNewClass');
            }}>
            <Image source={require('../assets/images/Act-On.png')} />
          </Button>
          <Button
            style={ActStyle2.footer}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button
            style={ActStyle2.footer}
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
export default ActStuNewClass;
