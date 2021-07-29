import React, {useState, useEffect, useRef} from 'react';
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
import getNewClass from '../redux/actions/newClass';

function ActStuNewClass(props) {
  const classData = {
    name: 'Front-end fundamentals',
    progress: '80%',
    score: '80',
  };
  const {getNewClass} = props;
  //console.log(getNewClass);
  const class_name = props.class_name;
  //console.log(class_name);
  useEffect(() => {
    getNewClass(`${DOMAIN_API}:${PORT_API}/api/v1/newclass/`);
    //getNewClass(`http://192.168.1.5:${PORT_API}/api/v1/newclass/`);
  },[]);
  
        //console.log(props.getNewClassReducer.isPending);
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (props.getNewClassReducer.isPending) {
        console.log('get New class Loading...');
      } else if (props.getNewClassReducer.isFulfilled) {
        console.log('get New class suscces');
        console.log(props.getNewClassReducer.isFulfilled);
      } else if (props.getNewClassReducer.isRejected) {
        //console.log(props.getNewClassReducer.result);
        console.log('get user data rejected : errroooorrrr');
      }
    }
  }, [
    props.getNewClassReducer.isPending,
    props.getNewClassReducer.isFulfilled,
    props.getNewClassReducer.isRejected,
  ]);
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
                <Text>{class_name}</Text>
                <Text style={{marginLeft: 10}}> Intermediate $10</Text>
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
const mapStateToProps = state => ({
   role: state.auth.resultLogin.data.role,
   getUserReducer: state.getUserReducer,
  name: state.getUserReducer.currentUser.name,
  getNewClassReducer: state.getNewClassReducer,
  class_name: state.getNewClassReducer.results.class_name,
});

const mapDispatchToProps = dispatch => ({
  getNewClass: url => {
    dispatch(getNewClass(url));
  },
});

const ConnectedActStuNewClass = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActStuNewClass);
export default ConnectedActStuNewClass;

//export default ActStuNewClass;
