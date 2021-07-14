/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  ActionSheet,
} from 'react-native';
import {Card, CardItem, Label, Input, Button} from 'native-base';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import axios from 'axios';
import {DOMAIN_API, PORT_API} from '@env';

const FormProfile = ({...props}) => {
  const [avatar, setAvatar] = useState();
  const [newAvatar, setNewAvatar] = useState();
  const [isAvatarUpdate, setIsAvatarUpdate] = useState(false);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  
  const choosePhotoHandler = () => {
    launchImageLibrary({noData: true}, response => {
      // console.log(response);
      if (response) {
        setNewAvatar(response);
        setIsAvatarUpdate(true);
      } else {
        setNewAvatar(avatar);
      }
    });
  };
  const launchCameraHandler = () => {
    launchCamera({noData: true}, response => {
      // console.log(response);
      if (response) {
        setNewAvatar(response);
        setIsAvatarUpdate(true);
      } else {
        setNewAvatar(avatar);
      }
    });
  };
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
              source={require('../assets/images/profile.png')}
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
                  }}
                  onPress={() => choosePhotoHandler}>
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
              <Label>Name</Label>
              <Input />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Full Name</Label>
              <Input />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Email</Label>
              <Input />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Label>Phone</Label>
              <Input keyboardType="numeric" />
            </CardItem>
          </Card>
          <Button
            style={{
              alignSelf: 'center',
              width: 200,
              backgroundColor: '#5784BA',
              borderRadius: 10,
              marginTop: 10,
            }}>
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
};
export default FormProfile;
