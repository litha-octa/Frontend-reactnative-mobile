import React from 'react';
import {View, Text, Image, ScrollView,KeyboardAvoidingView} from 'react-native';
import {
  Card,
  CardItem,
  Label,
  Input,
  Button,
} from 'native-base';

const FormProfile = ({navigation}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View style={{backgroundColor: '#5784BA'}}>
            <Image
              source={require('../assets/images/profile.png')}
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginTop: 100,
              }}
            />
            <Button
              style={{
                alignSelf: 'center',
                marginTop: 30,
                width: 200,
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
                Change Profile Picture
              </Text>
            </Button>
            <Button
              style={{
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: 30,
                width: 200,
                backgroundColor: 'lightgrey',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'maroon',
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginLeft: 20,
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
              marginBottom:60,
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
