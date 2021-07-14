/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef,useState} from 'react';
import {View, Text, TextInput, Image, ScrollView,Alert} from 'react-native';
import {ActFas} from '../components/Act/ActFas';
import NotifService from './../../NotifService';
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
  Picker,
  Item,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
function ActivityFas({navigation}) {
  const [registerToken, setRegisterToken] = useState('');
  const [fcmRegistered, setFcmRegistered] = useState(false);
  const onRegister = token => {
    setRegisterToken(token.token);
    setFcmRegistered(true);
  };

  const onNotif = notif => {
    Alert.alert(notif.title, notif.message);
  };

  const notif = new NotifService(onRegister, onNotif);
  const handlePerm = perms => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };

  const classData = {
    name1: 'Front-end fundamentals',
    student1: '24',
    name2: 'HTML For Beginners',
    student2: '32',
    name3: 'History of Europe',
    student3: '17',
  };
  const newClassData = {
    name: 'Class Name',
    category: 'Category',
    pricing: 'Pricing',
    schedule: 'Schedule',
    description: 'Description',
    level: 'Level',
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginBottom: 15,
                paddingLeft: '3%',
              }}>
              <Text style={ActFas.dataNewClass}>{newClassData.name} : </Text>
              <TextInput
                style={{
                  width: 200,
                  fontSize: 20,
                  marginLeft: 10,
                  backgroundColor: '#EBEBEB',
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: '3%',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <Text style={ActFas.dataNewClass}>{newClassData.category} :</Text>
              <Item
                picker
                style={{
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  marginTop: -5,
                  marginLeft: 30,
                  backgroundColor: '#5784BA',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  Select
                </Text>
                <Picker mode="dialog" style={{backgroundColor: '#5784BA'}}>
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Finance"
                    value="2"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="History"
                    value="3"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Math"
                    value="4"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Psychology"
                    value="5"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Science"
                    value="6"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Software"
                    value="7"
                  />
                </Picker>
              </Item>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: '3%',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <Text style={ActFas.dataNewClass}>{newClassData.pricing} : </Text>
              <TextInput
                keyboardType="numeric"
                style={{
                  width: 100,
                  fontSize: 20,
                  marginLeft: 40,
                  backgroundColor: '#EBEBEB',
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: '3%',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <Text style={ActFas.dataNewClass}>{newClassData.level} :</Text>
              <Item
                picker
                style={{
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  marginTop: -5,
                  marginLeft: 50,
                  backgroundColor: '#5784BA',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  Select
                </Text>
                <Picker mode="dialog" style={{backgroundColor: '#5784BA'}}>
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Advanced"
                    value="3"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Beginner"
                    value="1"
                  />
                  <Picker.Item
                    style={ActFas.categoryItem}
                    label="Intermediate"
                    value="2"
                  />
                </Picker>
              </Item>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: '3%',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <Text style={ActFas.dataNewClass}>{newClassData.schedule} :</Text>
              <TextInput style={{width: 100, fontSize: 20, marginTop: -16}} />
            </View>
            <View
              style={{
                marginTop: 15,
                marginBottom: 15,
                paddingLeft: '3%',
              }}>
              <Text style={ActFas.dataNewClass}>
                {newClassData.description} :
              </Text>

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
                }}
                onPress={() => {
                  notif.localNotif();
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
