/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Card, CardItem, Label, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/actions/getUser';
import {DOMAIN_API, PORT_API} from '@env';

function FormProfile(props) {
  // const [updateUser, setUpdateUser] = useState({
  //   name: '',
  //   fullname: '',
  //   email: '',
  //   phone: '',
  // });
  const {getUserReducer} = props;
  const {updateUserReducer} = props;
  const currentName = props.name;
  const currentPhone = props.phone;
  const currentEmail = props.email;
  const currentFullname = props.fullname;
  //const avatar = props.avatar;

  const [fullname, setFullname] = useState(
    currentFullname ?? 'Insert Fullname',
  );
  const [name, setName] = useState(currentName ?? 'Insert Name');
  const [email, setEmail] = useState(currentEmail ?? 'Insert Email');
  const [phone, setPhone] = useState(currentPhone ?? 'Insert Phone Number');

  const updateHandler = e => {
    e.preventDefault();
    const user_id = props.user_id;
    console.log(`user id = ${user_id}`);
    let formData = new FormData();
    fullname !== currentFullname && fullname !== 'Insert Fullname'
      ? formData.append('fullname', fullname)
      : null;
    name !== currentName && name !== 'Insert Name'
      ? formData.append('name', name)
      : null;
    email !== currentEmail && email !== 'Insert Email'
      ? formData.append('email', email)
      : null;
    phone !== currentPhone && phone !== 'Insert Phone Number'
      ? formData.append('phone', phone)
      : null;
    console.log(formData);
    console.log(DOMAIN_API, PORT_API);
    props.updateUser(
      `${DOMAIN_API}:${PORT_API}/api/v1/usr/${user_id}`,
      formData,
    );
    // props.updateUser(`http://192.168.99.128:${PORT_API}/api/v1/usr/${user_id}`, formData);
  };
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (props.updateUserReducer.isPending) {
        console.log('Update Profile : Loading...');
      } else if (props.updateUserReducer.isFulfilled) {
        console.log('Update Profile : Success');
        props.navigation.navigate('Dashboard');
      } else if (props.updateUserReducer.isRejected) {
        console.log('Update Profile : errroooorrrr !!');
      }
    }
  }, [
    props.updateUserReducer.isPending,
    props.updateUserReducer.isFulfilled,
    props.updateUserReducer.isRejected,
  ]);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View style={{backgroundColor: '#5784BA'}}>
            <Text
              style={{
                fontSize: 40,
                color: 'white',
                marginTop: 15,
                marginLeft: '90%',
              }}
              onPress={() => props.navigation.navigate('Dashboard')}>
              x
            </Text>
            <Image
              source={require('../../assets/images/profile.png')}
              //source= {avatar}
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginTop: 30,
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <Button
                style={{
                  alignSelf: 'center',
                  marginTop: 30,
                  marginLeft: 90,
                  width: 100,
                  backgroundColor: 'lightgrey',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 15,
                  }}>
                  Camera
                </Text>
              </Button>
              <Button
                style={{
                  alignSelf: 'center',
                  marginTop: 30,
                  width: 120,
                  marginLeft: 15,
                  backgroundColor: 'lightgrey',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 17,
                  }}>
                  From Galery
                </Text>
              </Button>
            </View>
            <Button
              style={{
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: 30,
                width: 230,
                backgroundColor: 'lightgrey',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'maroon',
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginLeft: 30,
                }}>
                Delete Profile Picture
              </Text>
            </Button>
          </View>
          <Card>
            <CardItem>
              <Label>Name : </Label>
              <Input value={name} onChangeText={text => setName(text)} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Full Name : </Label>
              <Input
                value={fullname}
                onChangeText={text => setFullname(text)}
              />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Email : </Label>
              <Input value={email} onChangeText={text => setEmail(text)} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Phone : </Label>
              <Input
                keyboardType="numeric"
                style={{color: 'black'}}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </CardItem>
          </Card>
          <Button
            style={{
              alignSelf: 'center',
              width: 200,
              backgroundColor: '#5784BA',
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={updateHandler}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 35,
              }}>
              Save Change
            </Text>
          </Button>
          <Button
            style={{
              alignSelf: 'center',
              width: 200,
              backgroundColor: '#5784BA',
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 60,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 65,
              }}>
              Cancel
            </Text>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const mapStateToProps = state => ({
  //email: state.auth.resultLogin.data.email,
  updateUserReducer: state.updateUserReducer,
  getUserReducer: state.getUserReducer,
  name: state.getUserReducer.currentUser.name,
  phone: state.getUserReducer.currentUser.phone,
  fullname: state.getUserReducer.currentUser.fullname,
  email: state.getUserReducer.currentUser.email,
  avatar: state.getUserReducer.currentUser.avatar,
  user_id: state.getUserReducer.currentUser.user_id,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (url, data) => {
    dispatch(updateUser(url, data));
  },
});

const ConnectedFormProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormProfile);
export default ConnectedFormProfile;
