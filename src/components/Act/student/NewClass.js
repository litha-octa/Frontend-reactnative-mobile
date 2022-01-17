import React, {useState, useEffect, useRef} from 'react';
import {View, Text, RefreshControl, TextInput, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {DOMAIN_API, PORT_API} from '@env';
import {connect} from 'react-redux';
import {ActStyle2} from '../ActStyle2';
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
import getNewClass from '../../../redux/actions/newClass';
import {ListIcon} from '../../../assets/images';
import PercentageCircle from 'react-native-percentage-circle';
import {Dropdown} from 'react-native-element-dropdown';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function NewClass(props) {
  const classData = {
    name: 'Front-end fundamentals',
    progress: 80,
    score: '80',
  };
  const data = [
    {label: 'Finance', value: '1'},
    {label: 'History', value: '2'},
    {label: 'Math', value: '3'},
    {label: 'Psychology', value: '4'},
    {label: 'Science', value: '5'},
    {label: 'Software', value: '6'},
  ];
  const levelData = [
    {label: 'Advance', value: '1'},
    {label: 'Beginner', value: '2'},
    {label: 'Intermediate', value: '3'},
  ];
  const priceData = [
    {label: 'Free', value: '0'},
    {label: '$10', value: '10'},
    {label: '$20', value: '20'},
  ];

  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //   const {getNewClass} = props;
  //console.log(getNewClass);
//   const class_name = props.class_name;
  //console.log(class_name);
  //   useEffect(() => {
  //     getNewClass(`${DOMAIN_API}:${PORT_API}/api/v1/newclass/`);
  //     //getNewClass(`http://192.168.1.5:${PORT_API}/api/v1/newclass/`);
  //   }, []);

  //   //console.log(props.getNewClassReducer.isPending);
  //   const ref = useRef();
  //   useEffect(() => {
  //     if (!ref.current) {
  //       ref.current = true;
  //     } else {
  //       if (props.getNewClassReducer.isPending) {
  //         console.log('get New class Loading...');
  //       } else if (props.getNewClassReducer.isFulfilled) {
  //         console.log('get New class suscces');
  //         console.log(props.getNewClassReducer.isFulfilled);
  //       } else if (props.getNewClassReducer.isRejected) {
  //         //console.log(props.getNewClassReducer.result);
  //         console.log('get user data rejected : errroooorrrr');
  //       }
  //     }
  //   }, [
  //     props.getNewClassReducer.isPending,
  //     props.getNewClassReducer.isFulfilled,
  //     props.getNewClassReducer.isRejected,
  //   ]);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={ActStyle2.body}>
        <View style={ActStyle2.header}>
          <Text style={ActStyle2.title}> Activity</Text>
        </View>

        <View>
          <Text style={ActStyle2.subtitle}>My Class</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text style={ActStyle2.subtitle}>Class Name</Text>
            <Text style={ActStyle2.subtitle}> Progress</Text>
            <Text style={ActStyle2.subtitle}> Score</Text>
          </View>
        </View>

        <View>
          <List style={ActStyle2.listItem}>
            <ListItem>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <Left>
                  <Text>{classData.name}</Text>
                </Left>
                <Body>
                  <PercentageCircle
                    radius={20}
                    percent={50}
                    color={'#3498db'}></PercentageCircle>
                </Body>
                <Right>
                  <Text style={ActStyle2.score}>{classData.score}</Text>
                </Right>
              </View>
              <Image style={{marginLeft: '8%'}} source={ListIcon} />
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
              <Dropdown
                style={{width: '40%'}}
                placeholderStyle={ActStyle2.placeholderStyle}
                selectedTextStyle={ActStyle2.placeholderStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Categories"
                searchPlaceholder="Search..."
                value={category}
                onChange={item => {
                  setCategory(item.value);
                }}
              />
              <Dropdown
                style={{width: '30%'}}
                placeholderStyle={ActStyle2.placeholderStyle}
                selectedTextStyle={ActStyle2.placeholderStyle}
                data={levelData}
                maxHeight={200}
                maxWidth={400}
                labelField="label"
                valueField="value"
                placeholder="Level"
                value={level}
                onChange={item => {
                  setLevel(item.value);
                }}
              />
              <Dropdown
                style={{width: '30%'}}
                placeholderStyle={ActStyle2.placeholderStyle}
                selectedTextStyle={ActStyle2.placeholderStyle}
                data={priceData}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Price"
                value={price}
                onChange={item => {
                  setPrice(item.value);
                }}
              />
            </View>
            <List style={ActStyle2.listItem}>
              <ListItem>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '80%',
                  }}>
                  <Text>Class Name</Text>
                  <Text>Level</Text>
                  <Text>Pricing</Text>
                </View>
              </ListItem>
              <ListItem>
                <Text>class_name</Text>
                <Text style={{marginLeft: 10}}> Intermediate $10</Text>
                <Button success style={ActStyle2.registerBtn}>
                  <Text style={ActStyle2.buttonLabel}> Success </Text>
                </Button>
              </ListItem>
            </List>
          </Container>
        </View>
      </View>
    </ScrollView>
  );
}
// const mapStateToProps = state => ({
//   role: state.auth.resultLogin.data.role,
//   getUserReducer: state.getUserReducer,
//   name: state.getUserReducer.currentUser.name,
//   getNewClassReducer: state.getNewClassReducer,
//   class_name: state.getNewClassReducer.results.class_name,
// });

// const mapDispatchToProps = dispatch => ({
//   getNewClass: url => {
//     dispatch(getNewClass(url));
//   },
// });

// const ConnectedActStuNewClass = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ActStuNewClass);
// export default ConnectedActStuNewClass;

export default NewClass;
