import React, {useState} from 'react';
import {View, Text, Picker, TextInput, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {DOMAIN_API, PORT_API} from '@env';
import {connect} from 'react-redux';
import {ActStyle2} from '../components/Act/ActStyle2';
import {
  Item,
  Select,
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

function ActStuNewClass(props) {
  const [category, setCategory] = useState('');
  const classData = {
    name: 'Front-end fundamentals',
    progress: '80%',
    score: '80',
  };
  const getNewClass = () => {
    axios
      .get(`${DOMAIN_API}:${PORT_API}/api/v1/newclass/`)
      .then(res => console.log(res.data.result))
      .catch(err => console.log(err));
  };
  return (
    <View style={ActStyle2.body}>
      <View style={ActStyle2.header}>
        <Text style={ActStyle2.title}> Activity</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={ActStyle2.subtitle}>My Class</Text>
          <Text style={ActStyle2.subtitle}>Class Name Progress Score</Text>
        </View>

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
              props.navigation.navigate('ActStuMyClass');
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
              <Text style={ActStyle2.viewAll}>
                {/* <Item
                  Select
                  style={{
                    width: 10,
                    backgroundColor: 'blue',
                    overflow: 'hidden',
                  }}/> */}
                {/* <Select
                  mode="dialog"
                  placeholder="Select your SIM"
                  selectedValue={category}
                  onValueChange={e => setCategory(e)}>
                  <Select.Item label="Category" value="0" />
                  <Select.Item label="Finance" value="1" />
                  <Select.Item label="History" value="2" />
                  <Select.Item label="Math" value="3" />
                  <Select.Item label="Psychology" value="4" />
                  <Select.Item label="Science" value="5" />
                  <Select.Item label="Software" value="6" />
                </Select> */}
                {/* <Picker
                  selectedValue={category}
                  onValueChange={e => setCategory(e)}>
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
                 */}
                Categories Level Pricing
              </Text>
            </View>
            <List style={ActStyle2.listItem}>
              <ListItem>
                <Text>ClassName Level Pricing</Text>
              </ListItem>
              <ListItem>
                <Text>{classData.name}</Text>
                <Text style={{marginLeft: 10}}> Intermediate $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name}</Text>
                <Text style={{marginLeft: 20}}> Beginner $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name}</Text>
                <Text style={{marginLeft: 20}}> Beginner $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name}</Text>
                <Text style={{marginLeft: 20}}> Beginner $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>{classData.name}</Text>
                <Text style={{marginLeft: 20}}> Beginner $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
            </List>
          </Container>
        </View>
      </ScrollView>
    </View>
  );
}
export default ActStuNewClass;
