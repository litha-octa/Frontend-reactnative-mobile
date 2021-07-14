/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {useSocket} from '../components/Chat/socketProvider';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
//import CheckBox from '@react-native-community/checkbox';
import {Form, Item, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';

const URL = 'http://localhost:8080';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const roomRef = useRef();
  const socket = useSocket();
  useEffect(() => {
    if (socket === undefined) return;
    const displayConnection = () => {
      console.log(`user have been connected with id ${socket.id} from context`);
      socket.on('message-received', newMessage => {
        console.log(newMessage);
        setMessages(prevMessage => {
          return [...prevMessage, newMessage];
        });
      });
    };
    socket.on('connect', displayConnection);

    return () => socket.off('connect', displayConnection);
  }, [socket]);

  const submitHandler = e => {
    e.preventDefault();
    const {name, value} = messageRef.current;
    const room = roomRef.current.value;
    const body = {
      name,
      value,
    };
    const cb = ({status}) => {
      if (status) {
        setMessages(prevMessage => {
          return [...prevMessage, body];
        });
      }
    };
    socket.emit('send-message', body, room, cb);
  };

  const joinHandler = e => {
    e.preventDefault();
    const {value} = roomRef.current;
    socket.emit('join-room', value, ({status}) => {
      if (status) console.log(`user joined ${value} room`);
    });
  };
  return (
    <View style={{marginTop: 30, backgroundColor: '#FF8849  x'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black'}}>App</Text>
        <Button
          style={{marginLeft: 10, marginTop: 5, borderRadius: 5, width: 70}}
          onPress={() => {
            axios
              .post(
                URL,
                {
                  msg: 'Hello World',
                },
                {
                  headers: {
                    'x-access-token': 'new-app',
                  },
                },
              )
              .then(res => console.log(res.data))
              .catch(err => console.error(err));
          }}>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
            Post
          </Text>
        </Button>
        <Button
          style={{marginLeft: 10, marginTop: 5, borderRadius: 5, width: 70}}
          onPress={() => {
            axios
              .patch(
                URL,
                {
                  msg: 'Hello World',
                },
                {
                  headers: {
                    'x-access-token': 'new-app',
                  },
                },
              )
              .then(res => console.log(res.data))
              .catch(err => console.error(err));
          }}>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
            Patch
          </Text>
        </Button>
        <Button
          style={{marginLeft: 10, marginTop: 5, borderRadius: 5, width: 90}}
          onPress={() => {
            axios
              .delete(URL, {
                headers: {
                  'x-access-token': 'new-app',
                },
              })
              .then(res => console.log(res.data))
              .catch(err => console.error(err));
          }}>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
            Delete
          </Text>
        </Button>
      </View>
      <Form onSubmit={submitHandler}>
        <TextInput
          name="message"
          ref={messageRef}
          style={{backgroundColor: 'white', color: 'black'}}
        />
        <Button
          type="submit"
          style={{marginLeft: 10, marginTop: 5, borderRadius: 5, width: 90}}>
          <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>
            Send Message
          </Text>
        </Button>
      </Form>
      <Form onSubmit={joinHandler}>
        <TextInput
          name="room"
          ref={roomRef}
          style={{backgroundColor: 'white'}}
        />
        <Button
          type="submit"
          style={{marginLeft: 10, marginTop: 5, borderRadius: 5, width: 90}}>
          <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>
            Join Room
          </Text>
        </Button>
      </Form>
      <View>
        {messages.map((message, index) => {
          return (
            <Text style={{color: 'black', fontSize: 30}} key={index}>
              {message.value} from {socket.id}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
export default ChatRoom;
