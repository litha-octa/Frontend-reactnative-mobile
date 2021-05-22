import React from 'react';
import {View, Text, TextInput, Image, ScrollView,} from 'react-native';
import {ActFas} from '../components/Act/ActFas';
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

function ActivityFas({navigation}) {
  const classData = {
    name1: 'Front-end fundamentals',
    student1:'24',
    name2: 'HTML For Beginners',
    student2: '32',
    name3:'History of Europe',
    student3: '17',
  };
  const newClassData = {
    one: 'Class Name',
    two: 'Category',
    three:'Pricing',
    four: 'Schedule',
    five: 'Description',
  };
  return (
    <View style={ActFas.body}>
      <View style={ActFas.header}>
        <Text style={ActFas.title}> Activity</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={ActFas.subtitle}>My Class</Text>
          <Text style={ActFas.subtitle}>Class Name Student</Text>
        </View>

        <View>
          <List style={ActFas.listItem}>
            <ListItem>
              <Body style={{flexDirection: 'row'}}>
                <Text
                  style={{width: 250}}
                  onPress={() => {
                    navigation.navigate('ActFasClassDetail');
                  }}>
                  {classData.name1}
                </Text>
                <Text>{classData.student1}</Text>
                <Image source={require('../assets/images/stuIcon.png')} />
                <Image
                  source={require('../assets/images/arrow.png')}
                  style={{marginLeft: '15%'}}
                />
              </Body>
            </ListItem>
            <ListItem>
              <Body style={{flexDirection: 'row'}}>
                <Text style={{width: 250}}>{classData.name2}</Text>
                <Text>{classData.student2}</Text>
                <Image source={require('../assets/images/stuIcon.png')} />
                <Image
                  source={require('../assets/images/arrow.png')}
                  style={{marginLeft: '15%'}}
                />
              </Body>
            </ListItem>
            <ListItem>
              <Body style={{flexDirection: 'row'}}>
                <Text style={{width: 250}}>{classData.name3}</Text>
                <Text>{classData.student3}</Text>
                <Image source={require('../assets/images/stuIcon.png')} />
                <Image
                  source={require('../assets/images/arrow.png')}
                  style={{marginLeft: '15%'}}
                />
              </Body>
            </ListItem>
          </List>
          <Text style={ActFas.viewAll}>View All</Text>
    
        </View>

        <View>
          <Container style={ActFas.container}>
            <Text style={ActFas.subtitle}>Create New Class</Text>
            <View style={{flexDirection: 'row', paddingLeft: '3%'}}>
              <Text style={ActFas.dataNewClass}>{newClassData.one} : </Text>
              <TextInput style={{width: 100, fontSize: 20, marginTop: -16}} />
            </View>
            <View style={{flexDirection: 'row', paddingLeft: '3%'}}>
              <Text style={ActFas.dataNewClass}>{newClassData.two} : </Text>
              <TextInput style={{width: 100, fontSize: 20, marginTop: -16}} />
            </View>
            <View style={{flexDirection: 'row', paddingLeft: '3%'}}>
              <Text style={ActFas.dataNewClass}>{newClassData.three} : </Text>
              <TextInput style={{width: 100, fontSize: 20, marginTop: -16}} />
            </View>
            <View style={{flexDirection: 'row', paddingLeft: '3%'}}>
              <Text style={ActFas.dataNewClass}>{newClassData.four} : </Text>
              <TextInput style={{width: 100, fontSize: 20, marginTop: -16}} />
            </View>
            <View style={{paddingLeft: '3%'}}>
              <Text style={ActFas.dataNewClass}>{newClassData.five} : </Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  width: '96%',
                  fontSize: 18,
                  textAlignVertical: 'top',
                  marginTop: 6,
                  backgroundColor: '#EBEBEB',
                }}
              />
              <Button
                success
                style={{
                  width: '96%',
                  borderRadius: 20,
                  marginTop: '7%',
                  marginBottom: '20%',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Medium',
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: '44%',
                  }}>
                  Create
                </Text>
              </Button>
            </View>
          </Container>
        </View>
      </ScrollView>

      <Footer>
        <FooterTab>
          <Button
            style={ActFas.footer}
            onPress={() => {
              navigation.navigate('DashFas');
            }}>
            <Image source={require('../assets/images/Home-Off.png')} />
          </Button>
          <Button
            style={ActFas.footer}
            onPress={() => {
              navigation.navigate('ActivityFas');
            }}>
            <Image source={require('../assets/images/Act-On.png')} />
          </Button>
          <Button
            style={ActFas.footer}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={require('../assets/images/Chat-Off.png')} />
          </Button>
          <Button
            style={ActFas.footer}
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
export default ActivityFas;
